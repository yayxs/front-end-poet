我最早做了一段时间的`video`视频相关的`vue` 项目，也写过`webrtc`。虽然我当时学习过 `html`，但是有关 video 标签了解的不算很多。
我当时的项目有几个痛点

- 1、一个`vue` 的项目中，包含很多个基于原生 video 封装的组件，不同的开发者看不懂对方怎么封装的。就像这样

```html
<video style="display:none;" controls="controls" id="aa"></video>
```

```html
<video
  id="video-id"
  :src="currVideo.fileUrl"
  ref="videotag"
  loop="loop"
  @mouseleave="fovervideo"
  @mouseover="overvideo"
  autoplay="autoplay"
  @timeupdate="timeupdate"
  @canplay="getTime"
></video>
```

```html
<video
  class="video-player"
  :src="src[currentIndex]"
  :poster="poster[currentIndex]"
  controls="controls"
  ref="video"
  @timeupdate="onPlayerTimeupdate($event)"
  @play="onPlayerPlay($event)"
  @pause="onPlayerPause($event)"
  @ended="onPlayerEnded($event)"
  @canplay="onPlayerCanplay($event)"
></video>
```

```html
<video
  v-for="(video, index) in mainUrl"
  :id='"video" + index'
  :key="video.fileUrl + index"
  :poster="video.uploadPic || playerDefaultPoster"
  class="video-js vjs-default-skin vjs-big-play-centered main-video"
  autoplay
  controls
  preload="auto"
  data-setup="{}"
>
  暂不支持当前播放！
  <source
    :src="video.fileUrl"
    :type="streamForm == 'demand'?'video/mp4':'application/x-mpegURL'"
  />
</video>
```

```html
<videoplayer
  :key="videoKeys[1]"
  :courseId="courseId"
  :groupId="groupId"
  :tecOrStu="'second'"
  :videoType="courseId.length > 1 ? videoTypeTeacher : videoTypeStudent"
  :videoList="videoList2"
  :behavior="behaviorSec"
  :squTime="squTimStu"
  :isStudentAnalysis="isStudentAnalysis"
  :isCompare="isCompare"
  :playFlag="playFlag"
  :videoTime="videoTime"
  @getOperation="getOperation"
  :isPreciseVideo="isPreciseVideo"
  :starttime="starttime"
  :endtime="endtime"
  :duration="duration"
  :noteliveList="noteliveList"
  :showmuted="true"
  :isShowBullet="false"
  :defaultPoster="defaultPosterSecond"
></videoplayer>
```

```html
<video
  :id="`video${tecOrStu}`"
  autoplay
  controls
  loop
  :muted="muted"
  class="video-js vjs-default-skin vjs-big-play-centered main-video"
  preload="auto"
  :poster="defaultPoster"
>
  暂不支持当前播放！
  <source
    :src="streamList[currentIndex]"
    :type="streamForm == 'demand'?'video/mp4':'application/x-mpegURL'"
  />
</video>
```

还有很多很多，就不看了。这些组件没有说明文档。随着项目越来越大，`vue` 页面中到处用到视频播放器。有一个组件是**巡课** 组件，一个页面需要展示 20 多个视频播放器。

- 2、**video.js** 整个项目依赖 `video.js`，现在`video.js` 兼容性问题。

## 为什么写这篇文章

出于以下的几个原因我写这篇文章

- 1、`video` 标签是 `html` 中较为高级一点的标签，可以作为重新学习 `html` 的切入点
- 2、但凡应用程序中包含视频的，都逃不出原生的`video`，目前也有基于`video`封装的（不管是 vue 中，还是 react 生态中），但只需要掌握原生 video 就好，收益较高。
- 3、现在短视频流行，了解视频标签有助于拓宽自己的技术
- 4、也是对几年前写过的视频播放，作一个回顾与总结。
- 5、面试的时候，我作为面试官面试过很多人，很多人 video 也讲不出来一二，有的说没用过。

## `<video mdn`

我在刚工作遇到问题，还是去不靠谱的 `baidu`。很少去官方找答案（这也是我踩过的坑）

[https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)

> `<video>` 被用在 html 或者 xhtml 中，可以在文档中播放视频。注意有些浏览器不支持 video

像 `class` `data-*` `dir` `hidden` `id` `is` `style` `title` 等等这些被称为**全局属性**，这些属性都能用在 video 标签上。除了这些还有一些

- `autoplay` 视频会尽快自动开始播放，不会停下来等待数据全部加载完成，但是用户们会比较反感自动播放的媒体文件

```html
<video autoplay></video>
```

- `autopictureinpicture`（实验中） 那么当用户在当前页面和另一个页面或应用程序之间来回切换时，会自动切换画中画（picture-in-picture）模式
- `controls` 视频展示浏览器自带的控件界面，一般情况下我们是使用自己自定义的控件

```js
this.player.domId.play() // 播放
this.player.domId.pause() // 静音
this.player.domId.requestFullscreen() // 全屏
```

- controlslist 当浏览器显示自己的控件集(例如，当指定了 Controls 属性时)，Controlslist 属性将帮助浏览器选择在媒体元素上显示的控件。
- `crossorigin` 该枚举属性指明是否使用 CORS（跨域资源共享）来获取相关视频

当视频加载完成之后，可以截取视频的画面，代码如下

```html
<video @loadeddata.self="loadedData($event)"
```

```js
const loadedData = (event) => {
  let video = event.target
  let canvas = document.createElement('canvas')
  canvas.width = 200
  canvas.height = 110
  canvas.getContext('2d').drawImage(video, 0, 0, 200, 110)
  let img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = canvas.toDataURL('image/png')
  video.parentNode.insertBefore(img, video)
}
```

- `loop` 这个属性可以让音频或者视频文件循环播放
- `width` `height` 视频都会保持它原始的长宽比 — 也叫做**纵横比**。如果你设置的尺寸没有保持视频原始长宽比，那么视频边框将会拉伸，而未被视频内容填充的部分，将会显示默认的背景颜色。
- `height`：视频显示区域的高度，单位是 CSS 像素 （仅限绝对值；不支持百分比）

```
1cm = 96px/2.54
1mm = 1/10th of 1cm
1Q = 1/40th of 1cm
1px = 1/96th of 1in
```

- muted 布尔属性，指明了视频里的音频的默认设置。设置后，音频会初始化为静音。
  需要注意的是，多个视频在一个页面中，其中一个播放，其他的视频需要静音

```html
<video autoplay muted
```

```js
let myVideo = document.querySelector('#myVideo')
myVideo.muted = true
```

- `poster`一个海报帧的 URL，用于在用户播放或者跳帧之前展示

- object-position 调整视频元素内部的位置
- buffered 这个属性可以读取到哪段时间范围内的媒体被缓存了
- `preload`用户需要这个视频优先加载

  - none 不缓冲
  - auto 页面加载后缓存媒体文件
  - metadata 仅缓冲文件的元数据

- `src` 展示视频的地址,指向网页中的视频资源

### Source

video 块内的 <source> 元素来指定需要嵌到页面的视频。

[https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/source](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/source)

`HTML <source>` 元素可用在 `video` 元素内

```html
<source
  :src="video.fileUrl"
  :type="streamForm == 'demand'?'video/mp4':'application/x-mpegURL'"
/>
```

指定单个视频文件，请始终使用 type 属性，如果不能，则显示包含的文本。

```html
<video src="chrome.webm" type="video/webm">
  <p>Your browser cannot play the provided video file.</p>
</video>
```

至于可以是什么类型，请看 [https://www.rfc-editor.org/rfc/rfc4281](https://www.rfc-editor.org/rfc/rfc4281)

你可以使用多个 <source> 标签，使同一视频的不同格式可用。浏览器就会播放它所支持的格式。

```html
<video controls>
  <source src="weekend.mp4" />
  <source src="weekend.ogg" />
  <source src="weekend .webm" />
</video>
```

[阶段小结] 看了上述的`mdn`，我们知道`video` 标签可以播放一个 src 链接，能指定 `宽度px` `高度px` 的媒体播放器，能够静音，能设置控制条。能设置海报帧图片 URL。同时也有一些事件：

- `@canplay` 浏览器可以播放媒体文件了，但估计没有足够的数据来支撑播放到结束，不必停下来进一步缓冲内容。

```html
<video @canplay="getTime"></video>
```

可以在这个事件获取视频的总时长和当前的播放时长

```js
// 初始声音大小
voiceValue: 50, // 初始声音大小

// 获取video dom
let video = document.getElementById('myVideo')
video.volume = this.voiceValue / 100
video.currentTime = this.changeTime
this.videoprogress = (video.currentTime / video.duration) * 100
```

- `@ended`

```html
<video @ended="onPlayerEnded($event)"></video>
```

```js
function onPlayerEnded() {
  // 当播放结束的时候，展示重新播放
  this.playState = 'replay'
}
```

- `@loadeddata` media 中的首帧已经完成加载。
  直播切换偶尔黑屏 手动调用 play()

[阶段小结] 我们经过上述的文档阅读，基本知道 `<video />` 标签有一些属性和一些事件。

## 一些应用场景

1、指定开始和结束时间 （节省带宽并改善网站响应性：利用媒体片段为视频元素添加开始和结束时间）

播放 **5 到 10s 的视频**

```html
<source src="video/chrome.webm#t=5,10" type="video/webm" />
```

```js
function initStart(params) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    console.log(`your browser not support  navigator.mediaDevices.getUserMedia`)
  } else {
    const constraints = {
      video: {
        width: 400,
        height: 300,
        frameRate: 30, // 帧率
      }, // 是否视频
      audio: {}, // 是否音频
    }
    navigator.mediaDevices
      // 获取用户媒体
      .getUserMedia(constraints)
      // 获取媒体流
      .then(getMediaStream)
      // 获取设备的列表
      .then(getListDevices)
      // 异常了
      .catch(handleError)
  }
}
```

```js
function getMediaStream(stream) {
  // 同意访问音视频数据
  try {
    const player = getEle('#player')
    player.srcObject = stream
    // 获取视频流成功之后然后创建设备选择
    return navigator.mediaDevices.enumerateDevices()
  } catch (error) {}
}

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log(`your browser not support`)
} else {
  // navigator.mediaDevices
  //   .enumerateDevices()
  //   .then(getListDevices)
  //   .catch(handleError)
}
```

```js
/**
 * 设备分组
 * @param {*} deviceInfos
 */
function getListDevices(deviceInfos) {
  const sortList = handleGrouping(deviceInfos)
  console.log(sortList)
}
```

## 自定义视频播放器

::: tip

以下案例完整的代码可以在这里看

https://github.com/yayxs/html-learn/tree/main/projects/custom-video-player
:::

我们通过上文大致了解，`video` 标签，下面我们使用原生的 html css js 来自定义一个视频播放器

html 部分：分为 `video` 标签 + `<i class="fa fa-play fa-2x"></i>` 播放和暂停的图标按钮 + `input` 进度条 + `span`时间

![自定义播放器效果图](https://cdn.statically.io/gh/yayxs/picture-image@master/vite-learn/202301312117817.png)
页面的标题

```html
<h1>Custom Video Player</h1>
```

video 本身，只需要一个视频的链接 和一个类名 `screen`

```html
<video
  class="screen"
  src="https://cdn.jsdelivr.net/gh/chuzhixin/videos@master/video.mp4"
  id="video"
></video>
```

控制条

```html
<div class="controls">
  <button class="btn" id="play">
    <i class="fa fa-play fa-2x"></i>
  </button>
  <button class="btn" id="stop">
    <i class="fa fa-stop fa-2x"></i>
  </button>
  <input
    type="range"
    id="progress"
    class="progress"
    min="0"
    max="100"
    step="0.1"
    value="0"
  />
  <span class="timestamp" id="timestamp">00:00</span>
</div>
```

接着用样式修饰，通用的界面修饰 `css/style.css`

引入线上的字体

```css
/* 引入字体 */
@import url('https://fonts.googleapis.com/css?family=Questrial&display=swap');
```

**body** 等通用的一些设置，包括设置盒模型

```css
* {
  box-sizing: border-box;
}

body {
  font-family: 'Questrial', sans-serif;
  background-color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}

h1 {
  color: #fff;
}
```

进度条的盒子样式

```css
.controls {
  background-color: #333;
  color: #fff;
  width: 20%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
```

两个图标按钮

```css
.controls .btn {
  border: 0;
  background: transparent;
  cursor: pointer;
}

.controls .fa-play {
  color: #28a745;
}

.controls .fa-stop {
  color: #dc3545;
}
```

紧接着就是修改默认 `input range` 的默认样式。`input[type='range']` 样式修改的思路是

0、新建 `css/progress.css` 文件
1、把默认的样式去除
2、考虑在不同浏览器内核的兼容
3、然后自己定义 中间可以滑动的滑块的样式 以及 底部最长的条这两部分的样式

```css
input[type='range'] {
  /* 隐藏滑块 并自定义滑块 */
  -webkit-appearance: none;
  /* 火狐浏览器需要指定宽度 */
  width: 100%;
  /* 谷歌浏览器是白色的，把白色设置为透明 达到隐藏的效果 */
  background: transparent;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
}
input[type='range']:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type='range']::-ms-track {
  width: 100%;
  cursor: pointer;
  /* 隐藏滑块 */
  background: transparent;
  border-color: transparent;
  color: transparent;
}

/* 针对WebKit/Blink 的风格设计 中间可以滑动的滑块 */
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
  margin-top: -14px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}

input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background-color: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}

input[type='range']:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}
```

接着就是脚本，首先获取 dom 元素

```js
const video = document.getElementById('video') // 视频播放器本身 即是video标签
const play = document.getElementById('play') // 播放按钮
const stop = document.getElementById('stop') // 停止按钮
const progress = document.getElementById('progress') // 进度条滑动
const timestamp = document.getElementById('timestamp') // 进度时间
```

```js
// 播放或者暂停视频
function toggleVideoStatus() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
// 更新图标的状态
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-stop fa-2x"></i>`
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
  }
}

// 更新进度条

function updateProgress() {
  // 视频当前播放的时间点 / 视频的总时长
  progress.value = (video.currentTime / video.duration) * 100
  // 换算成分钟
  let mins = Math.floor(video.currentTime / 60)
  // 前面补0
  if (mins < video.duration) {
    mins = '0' + String(mins)
  }

  // 得到秒
  let secs = Math.floor(video.currentTime % 60)
  if (secs < video.duration) {
    secs = '0' + String(secs)
  }

  timestamp.innerHTML = `${mins}:${secs}`
}

// 设置视频的时间和进度条
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100
}
// 停止视频

function stopVideo() {
  video.currentTime = 0
  video.pause()
}
```

最后在相对应的 dom 元素上添加事件绑定

```js
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)
stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)
```

## 相关链接

- [https://www.freecodecamp.org/chinese/news/html-video-how-to-embed-a-video-player-with-the-html-5-video-tag/](https://www.freecodecamp.org/chinese/news/html-video-how-to-embed-a-video-player-with-the-html-5-video-tag/)

- [video 和 source 标签](https://web.dev/i18n/zh/video-and-source-tags/)

- [修改 input range 样式可以参考](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
