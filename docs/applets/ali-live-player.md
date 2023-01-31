这篇文章有点不一样的地方，是记录一次公司的一次技术调研与推进。全程由个人主导，先说需求，需求是在支付宝小程序环境内，实现 `rtmp` 流媒体格式的实时拉流，应用内接到推流的地址，然后进行实时拉流，一句话概括：支付宝小程序用户：能够在小程序内进行观看直播操作。我需要制定一个需求的技术方案。以及这种方式是否可行。这是在`2022年6月初`的一次前端技术的调研。

## 背景

先从代码角度出发，项目是 `uni-app` 的代码，产出的内容是 支付宝小程序，运行在支付宝小程序中
再从产品的角度考虑，当然产品不关心代码具体怎么实现，能够实现心跳检测、结束直播、播放器的全屏与否等等

我要做的就是出一个结论，能不能做，怎么做

## 一些术语的解释

1、 `uni-app`uni-app 是前端能够实现跨端的一个框架：例如可以开发支付宝小程序、微信小程序、甚至 APP

2、`原生支付宝小程序` 完全符合支付宝小程序的一套开发方式：指的通过支付宝自身提供的 API 来进行支付宝小程序的开发

3、实时音视频直播（实时音视频播放）：不同于一个简单的视频播放，音视频直播也就直播拉流，对应的也有直播推流。简言之，就是有一个推流端产生一个流地址 例如：` rtmp://xxxx` 然后支付宝小程序对流进行实时拉取播放

4、文件格式

我在刚毕业的时候做过视频播放相关的项目，对**视频的文件格式** 有一些基础的了解
| 文件格式 | 格式的介绍 |
| ------------- |:-------------:|
| M3U8 | M3U8 文件是指 UTF-8 编码格式的 M3U 文件。M3U 文件是记录了一个索引纯文本文件，打开它时播放软件并不是播放它，而是根据它的索引找到对应的音视频文件的网络地址进行在线播放。M3U 是一种播放多媒体列表的文件格式，它的设计初衷是为了播放音频文件，比如 MP3，但是越来越多的软件现在用来播放视频文件列表，M3U 也可以指定在线流媒体音频源。很多播放器和软件都支持 M3U 文件格式。 |
|MP4|MP4 或称 MPEG-4 第 14 部分（英语：MPEG-4 Part 14）是一种标准的数字多媒体容器格式。MPEG-4 第 14 部分的扩展名为.mp4，以存储数字音频及数字视频为主，但也可以存储字幕和静止图像。因其可容纳支持比特流的視频流（如高级視频编码），MP4 可以在网络传输时使用流式传输。虽然携带式媒体播放器有时会被称作"MP4 播放器"，但并不仅限于播放 MP4 格式的影片，有些也可以播放 AMV、MKV 或其他影帧式扩展名为.flv 或.f4v 并同样基于 ISO 基础媒体文件格式（MPEG-4 第 12 部分）的 Flash 視频格式与 MPEG-4 第 14 部分极为相似，多数情况下直接变更扩展名为.mp4 也能够正常播放|
|RTMP|RTMP 是 Real Time Messaging Protocol（实时消息传输协议）的首字母缩写。该协议基于 TCP，是一个协议族，包括 RTMP 基本协议及 RTMPT/RTMPS/RTMPE 等多种变种。RTMP 是一种设计用来进行实时数据通信的网络协议，主要用来在 Flash/AIR 平台和支持 RTMP 协议的流媒体/交互服务器之间进行音视频和数据通信。支持该协议的软件包括 Adobe Media Server/Ultrant Media Server/red5 等。|
|HTTP-FLV|FLV (Flash Video) 是 Adobe 公司推出的另一种视频格式，是一种在网络上传输的流媒体数据存储容器格式。其格式相对简单轻量，不需要很大的媒体头部信息。整个 FLV 由 The FLV Header, The FLV Body 以及其它 Tag 组成。因此加载速度极快。采用 FLV 格式封装的文件后缀为 .flv。|

5、**VLC** 播放器

关于什么是 `vlc` VLC 是一款自由、开源的跨平台多媒体播放器及框架，可播放大多数多媒体文件，以及 DVD、音频 CD、VCD 及各类流媒体协议。 [https://www.videolan.org/](https://www.videolan.org/)

当你想要好好探索播放器，或者对视频感兴趣，你可以下载这个软件，作用是播放一些不常见的视频文件格式

## 一些调研的思路

既然项目目前使用的是`uni-app` 当然了当初项目开发之初的选型也是我，为什么不用原生的支付宝小程序呢，大概因为我前几年写过 `uni-app` 大体了解生态中的功能。
我先去 uni-app 文档拔了一下，[https://uniapp.dcloud.net.cn/component/live-player.html#live-player](https://uniapp.dcloud.net.cn/component/live-player.html#live-player)

| App                  |      H5       | 微信小程序 | 支付宝小程序 | 百度小程序 | 字节跳动小程序 | 飞书小程序 | QQ 小程序 | 快应用 | 360 小程序 | 京东小程序 |
| -------------------- | :-----------: | ---------: | :----------: | :--------: | :------------: | :--------: | :-------: | :----: | :--------: | :--------: |
| app 端直接使用 video | h5 页面不支持 |       支持 |      X       |    支持    |      支持      |     X      |   支持    |   X    |     X      |     X      |

初步的结论是 uni-app 环境下，没法搞 直播拉流操作

原生支付宝小程序 ：不对外暴露 直播拉流的 能力，社区相关讨论如下

[支付宝小程序 如何实时直播拉流 播放 rtmp 流媒体格式](https://open.alipay.com/portal/forum/post/85301041)
[你好，支付宝小程序如何实现直播拉流（实时音视频播放），需要开通那些功能？](https://open.alipay.com/portal/forum/post/13401012)

既然看了，`uni-app` `支付宝小程序` 有关微信小程序的这块实现，可以自己读一下 [微信小程序这块的说明](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html)

## 实现的推进

开始技术调研，是否支持内置的组件

- 是 live-player
- 否 能否接入第三方的播放器 （事实证明这种方式是不可行的）

1. 调研 [支付宝小程序集成实时视频直播] 技术可行性
   此功能点为内邀功能：不对外开放
   可以尝试和支付宝方对接，确定能否对小万开放相关 API
   该组件是原生组件，目前定向开放，需要申请权限并审核通过才能通过
   开发简易 demo，验证 api 的准确性与可达性
   文档中的 api 属性和方法仅能满足简易的开始直播 结束直播 全屏 等等操作
2. 推进的结论
   在支付宝小程序可以实现直播功能点，但是可扩展的小功能点不多
   播放器需要针对特定业务进行二次封装

```js
// 1、创建播放器上下文
this.livePlayerContext = my.createLivePlayerContext('live-player-id')

// 2、通过设备的deviceId获取rtmp直播流
// 3、心跳保持直播流的有效状态
```

```js
 <live-player
    id="live-player-id"
    :src="livePlayerUrl"
    mode="live"
    :autoplay="false"
    :muted="false"
    object-fit="contain"
    style="width: 100%; height: 400rpx"
    orientation="vertical"
    @stateChange="onStateChange"
    @fullscreenChange="onFullscreenChange"
    @error="handleError"
  />
```

## 代码实现

```html
<view class="page-body">
  <view>
    <live-player
      id="liveplayer"
      src="{{url}}"
      autoplay="{{true}}"
      mode="live"
      onStateChange="onStateChange"
      onError="onError"
      onFullscreenChange="onFullscreenChange"
    />
  </view>
  <view>
    <view class="info-area">视频源(src):</view>
    <input
      type="text"
      style="width:100%;"
      onInput="srcChanged"
      value="{{url}}"
    />
    <view class="section-body">播放状态展示:state/error/direction </view>
    <button type="default" class="info-area" plain="false">{{state}}</button>
    <button type="default" class="info-area" plain="false">{{error}}</button>
    <button type="default" class="info-area" plain="false">
      {{direction}}
    </button>
    <view class="section-body">接口展示 </view>
    <button type="default" class="btn-area-3" onTap="pause" plain>pause</button>
    <button type="default" class="btn-area-3" onTap="resume" plain>
      resume
    </button>
    <button type="default" class="btn-area-3" onTap="mute" plain>mute</button
    ><button type="default" class="btn-area-2" onTap="play" plain>play</button>
    <button type="default" class="btn-area-2" onTap="stop" plain>stop</button>
    <button type="default" class="btn-area-3" onTap="fullScreen0" plain>
      反向横屏
    </button>
    <button type="default" class="btn-area-3" onTap="fullScreen1" plain>
      竖屏全屏
    </button>
    <button type="default" class="btn-area-3" onTap="fullScreen2" plain>
      横屏全屏
    </button>
  </view>
</view>
```

```js
Page({
    data: {
    url: "rtmp://ns8.indexforce.com/home/mystream",
    state: "0",
    direction: 90,
    error: "0",
    isMute: false,
    direction: 90,
},
onLoad() {
    this.liveplayerContext =
    my.createLivePlayerContext('liveplayer');
},
play() {
    this.liveplayerContext.play();
},
pause() {
    this.liveplayerContext.pause();
},
resume() {
    this.liveplayerContext.resume();
},
stop() {
    this.liveplayerContext.stop();
},
mute() {
    console.log("mute");
    this.data.isMute = !this.data.isMute;
    this.liveplayerContext.mute({
    ison: this.data.isMute,
    });
    console.log("mute finished, val=" + this.data.isMute);
},
fullScreen0() {
    this.liveplayerContext.requestFullScreen({
    direction: -90,
});
// setTimeout(() => { this.liveplayerContext.exitFullScreen() },
3000);
},
fullScreen1() {
this.liveplayerContext.requestFullScreen({
direction: 0,
});
// setTimeout(() => { this.liveplayerContext.exitFullScreen() },
3000);
},
fullScreen2() {
this.liveplayerContext.requestFullScreen({
direction: 90,
});
// setTimeout(() => { this.liveplayerContext.exitFullScreen() },
3000);
},
onError(e) {
console.log("onPushError, e=" + JSON.stringify(e));
this.setData({
error: e.detail.code,});
},
onStateChange(e) {
console.log("onStateChange, e=" + JSON.stringify(e));
this.setData({
state: e.detail.code,
});
},
onFullscreenChange(e) {
    console.log("arguments.length=" + arguments.length);
    console.log("onFullscreenChange, e=" + JSON.stringify(e));
    this.setData({
    direction: e.detail.direction + "-" +
    e.detail.fullScreen,
    });
    },
});
```

## 总结

`定时器` `延时器` `视频播放`，有可能有性能问题 （播放器所在页面的内存泄漏问题），
可以通过小程序页面推出后台、销毁等时机，保证定时器延时器清除

还有就是在企业级的项目中，是可以比个人开发者申请更多的内侧功能

| 属性名             |   类型   |     默认值 |                                                                     描述                                                                     |
| ------------------ | :------: | ---------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| src                |  string  |         '' |                                  直播源的 url 地址。可以支持 rtmp、http、https 等协议（和 video 组件类似）                                   |
| mode               |  string  |     'live' |                                                         默认 live，rtc 模式暂不支持                                                          |
| autoplay           |   bool   |      false |                                                是否自动播放。是否在组件一显示就 自动开始播放                                                 |
| muted              |   bool   |      false |                                                                   是否静音                                                                   |
| orientation        |  string  | "vertical" |                                                     播放方向，可选 vertical、 horizontal                                                     |
| object-fit         |  string  |  "contain" |                                                        填充模式，可选 contain 和 fill                                                        |
| min-cache          |  float   |        1.0 |                                                                  最小缓冲区                                                                  |
| max-cache          |  float   |        3.0 |                                                                  最大缓冲区                                                                  |
| floating-mode      |  string  |       none |                           none:无浮窗; page:页面内浮 窗; miniprogram:跨页面浮窗； （app:全局浮窗，暂时不对外开放）                           |
| onStateChange      | function |            |                                                                 播放状态变化                                                                 |
| onFullScreenChange | function |            |                                                                 全屏状态变化                                                                 |
| onUserAction       | function |            | 用户操作事件，event.detail = {tag:"float_view"}，tag 为用户操 作的元素，目前支持的 tag 有： float_view(浮窗)、float_view_close(浮窗关闭按钮) |
