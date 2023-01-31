---
title: 从0开撸微信小程序开发
---

# 从 0 开撸微信小程序开发

::: tip

1.  **微信小程序的开发**迫在眉睫

:::

## 文件类型

- 样式
- 骨架
- 业务
- 配置

### 配置 app.json

- window

```json
"window":{
   "navigationBarTitleText":"洋小洋",
   "navigationBarBackgroundColor":"#A5C6FF",
   "navigationBarTextStyle":"black"
 }
```

## 编码规范

- 不能有代码错误
- 驼峰命名
- 遵循语言的大规范

## 注册 App 时

### 判断小程序的进入场景

### 监听生命周期函数

```js
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    console.log(`小程序初始化完成`);
    // 获取用户的信息
    // wx.getUserInfo({
    //   success:function(res){
    //     // console.log(res)
    //   }
    // })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    // 场景值 判断小程序进入的场景
    // 获取用户的信息 并且收到信息时 将用户信息传递给服务器
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {},

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {},
});
```

### 定义全局的数据

因为 App()实例只有一个，并且是全局共享的(单例对象)，故可以将一些全局共享的数据放在这里

```js
globalData: {
  name: `yayxs`;
}
```

## 注册 Page 时

首先 Page()依然是传入一个对象

```js
Page({});
```

### 监听页面生命周期函数

```js
Page({
  onLoad() {
    console.log(`onLoad`);
  },
  onReady() {
    console.log(`onReady`);
  },
  onShow() {
    console.log(`onShow`);
  },
  /**
  页面隐藏起来
  */
  onHide() {
    console.log(`onHide`);
  },
  onUnload() {
    console.log(`onUnload`);
  },
});
```

在 `onLoad（）`中交互请求

```js
wx.request()({
  url: ``,
  success: (res) => {
    console.log(res);
  },
});
```

### 初始化数据

```js
Page({
  data: {},
});
```

### 监听 wxml 文件中的事件

### 监听其他的事件

#### 监听页面的滚动

#### 监听页面滚动到底部

## 内置组件

有的组件需要成对出现，有的可以不用

### text

| 属性       |                   作用                   |           常用值 |
| ---------- | :--------------------------------------: | ---------------: |
| selectable | 默认情况下 text 中的文本长按是不是能选中 |                  |
| space      |            决定文本空格的大小            | nbsp、ensp、emsp |
| decode     |                   解码                   |                  |

### button

`button`按钮默认会占据一行，原因是变成了`block`

```css
button {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  line-height: 2.55555556;
  border-radius: 5px;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  color: #000000;
  background-color: #f8f8f8;
}
```

| 属性  |                   作用                   |  常用值 |
| ----- | :--------------------------------------: | ------: |
| size  | 默认情况下 text 中的文本长按是不是能选中 |    mini |
| type  |                   样式                   | primary |
| plain |                   解码                   |         |

### view

可以添加不同的属性

### image

- **image** 可以写成单标签，也可是双标签
- 默认有自己的大小
- 是一个行内块元素（inline-block）

#### src

- 本地路径（相对路径、绝对路径）
- 远程地址

选中相册中图片

```html
<button bindtap="handleChoosePic">选中图片</button>
```

```js
handleChoosePic(){
  wx:chooseImage({
    success:function(res){
      console.log(res)
    }
  })
}
```

```js
<image
  show-menu-by-longpress
  src="https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"
/>
// 开启长按图片显示识别小程序码菜单
```

<!-- ![An image](../../images/QQ20191017-1.png) -->

#### mode

```js
Page({
  data: {
    array: [
      {
        mode: "scaleToFill",
        text: "scaleToFill：不保持纵横比缩放图片，使图片完全适应",
      },
      {
        mode: "aspectFit",
        text: "aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来",
      },
      {
        mode: "aspectFill",
        text: "aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来",
      },
      {
        mode: "top",
        text: "top：不缩放图片，只显示图片的顶部区域",
      },
      {
        mode: "bottom",
        text: "bottom：不缩放图片，只显示图片的底部区域",
      },
      {
        mode: "center",
        text: "center：不缩放图片，只显示图片的中间区域",
      },
      {
        mode: "left",
        text: "left：不缩放图片，只显示图片的左边区域",
      },
      {
        mode: "right",
        text: "right：不缩放图片，只显示图片的右边边区域",
      },
      {
        mode: "top left",
        text: "top left：不缩放图片，只显示图片的左上边区域",
      },
      {
        mode: "top right",
        text: "top right：不缩放图片，只显示图片的右上边区域",
      },
      {
        mode: "bottom left",
        text: "bottom left：不缩放图片，只显示图片的左下边区域",
      },
      {
        mode: "bottom right",
        text: "bottom right：不缩放图片，只显示图片的右下边区域",
      },
    ],
    src: "../resources/cat.jpg",
  },
  imageError: function(e) {
    console.log("image3发生error事件，携带值为", e.detail.errMsg);
  },
});
```

### input

```html
<input value="yayxs" type="number" password placeholder="默认占位" disabled />
```

input 绑定相关的事件

### 共同的属性

- id
- style
- hidden
- class
- data-\*
- bindtap

## 自定义组件

允许开发者自己开发自己的组件

## WXSS

由于这是前端的基础，所以简单回顾一下

- 行内样式
- 页内样式
- 全局样式

### 尺寸单位 rpx

可以根据屏幕宽度进行自适应，规定屏幕的宽度 750px

```html
.wrap{ width:100px; height:100px } .wrap{ width:200px;height:200px }
```

rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为 750rpx。如在 iPhone6 上，屏幕宽度为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1 物理像素。

#### 样式导入

```css
/** app.wxss **/
@import "common.wxss";
.middle-p {
  padding: 15px;
}
```

### 官方样式库

[WeUI for 小程序 为微信小程序量身设计](https://github.com/Tencent/weui-wxss/)

## WXML

只可以用一些内置的组件，闭合标签，属性区分大小写

```
Page({
  data:{
    name:`zs`,
    age:18
  }
})

<view>{{name + '' +age}}</view>
```

动态的添加类(三目)

```
data:{
  isActive:false
}
<view class="box {{isActive?'active':""}}"></view>

.active{
  color:red
}
```

## 条件判断(条件渲染)

```html
<view wx:if="{{ isShow}}"></view>
<view wx:if="{{length > 5}}"> 1 </view>
<view wx:elif="{{length > 2}}"> 2 </view>
<view wx:else> 3 </view>
```

如果要一次性判断多个组件标签，可以使用一个`<block/>` 标签将多个组件包装起来，并在上边使用 wx:if 控制属性
`<block/>` 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性

### wx:if vs hidden

都可以控制组件的显示与隐藏

```html
<view hidden="{{true}}"></view> <view wx:if="{{false}}"></view>
```

- 区别

hidden 这个属性如果是自定义组件的话，不能达到显示隐藏的效果
这时我们可以通过在自定义的组件的内部
接收一个 hidden,类型为 Boolean
| wx:if | hidden |
| -------------- | :------------: |
| 组件都没有创建 | 组件还是存在的 |
| 切换频率低 | 切换频率高 |
