---
title: CSS 必须掌握的布局方式
---

#  CSS 必须掌握的布局方式

## 水平居中

### 原理

1. 行内元素可以通过 `text-align: center;` 来实现,适用于内联、内联块、内联表、内联 Flex
2. 块级元素可以通过 `margin: 0 auto;`
   (在现代浏览器中实现水平居中，可以使用 display: flex; justify-content: center;不过，在 IE8-9 这样的不支持弹性盒布局的旧式浏览器中，上述代码并不会生效。此时要实现在父元素中居中，可使用 margin: 0 auto)



3. 绝对定位 absolute+移动 transform 的方式（知道元素的宽度）
    - transform 这种移动的方式存在兼容性的问题
    - 要知道宽度的值
4. 绝对定位 absolute+margin 负边距的方案（要知道元素的宽度）
    - 这种使用margin-left需要知道宽度值

5. 弹性盒 [存在一定的兼容性](https://caniuse.com/?search=flex)

### 完整代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>水平居中</title>
    <style>
      html,
      body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        padding: 20px;
        box-sizing: border-box;
      }
      .parent {
        width: 100%;
        height: 60px;
        border: 1px solid #ddd;
        text-align: center;
      }
      .inline-block {
        display: inline-block;
      }
      .block {
        /* 左右margin 上下平分0 计算值是0 */
        width: 200px;
        margin: 0 auto;
        border: 1px solid red;
      }
      .parent-block {
        width: 100%;
        height: 60px;
        border: 1px solid #ddd;
      }
      .some-parent-block {
        width: 100%;
        height: 60px;
        border: 1px solid #ddd;
        text-align: center;
      }
      .some-parent-block section {
        border: 1px solid red;
        display: inline-block;
      }
      .father-element{
          /* 宽度是一定的 */
          width: 100%;
          border: 1px solid #ddd;
          height: 140px;
          /* 相对定位 */
          position: relative;
      }
      .son-ele{
          width: 100px;
          height: 100px;
          background-color: #00ff00;
          position: absolute;
          /* 父元素宽度的一半 */
          left: calc(100%/2);
          margin-left: calc(-100px /2);
      }
    </style>
  </head>
  <body>
    <header>
      <h3>水平居中-text-align方式</h3>
    </header>
    <section class="parent">
      我是一段文字
    </section>
    <section class="parent">
      <span>我是一个行内元素</span>
    </section>
    <section class="parent">
      <span class="inline-block">我是一个行内块元素</span>
    </section>
    <section class="parent-block">
      <section class="block">
        我是一个定宽度的块级元素(不然的话直接占满整行)
      </section>
    </section>

    <section class="some-parent-block">
      <section class="son-block-one">块1</section>
      <section class="son-block-two">块2</section>
      <section class="son-block-three">块3</section>
    </section>
    <header>
      <h3>水平居中-position方式(知道宽度的情况下)</h3>
    </header>
    <section class="father-element">
        <section class="son-ele"></section>
    </section>
  </body>
</html>



```

## 垂直居中

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>垂直居中</title>
    <style>
      html,
      body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        padding: 20px;
        box-sizing: border-box;
      }
      .box{
        width: 100%;
        height: 60px;
        border: 1px solid #ddd;
      }
      .parent {
        width: 100%;
        height: 60px;
        border: 1px solid #ddd;
        text-align: center;
      }
      .parent span {
        line-height: 60px;
      }
      .parent-img{
        width: 100%;
        height: 60px;
        border: 1px solid #ddd;
        line-height: 60px;
        font-size: 0;
      }
      .parent-img img{
        vertical-align: middle;
      }
      .parent-table{
        display: table-cell;
        vertical-align: middle;
      }
      .position{
        position: absolute;
      }
      .position-child{
        position: relative;
        top: 30px;
        display: inline-block;
        border: 1px solid red;
        height: 20px;
        width: 400px;
        /* margin-top: -10px; */
        transform: translateY(calc(-20px /2));
      }
    </style>
  </head>
  <body>
    <header>
      <h3>垂直居中-line-height方式(行内的内容 要知道高度)</h3>
    </header>
    <section class="parent">
      <span class="child">
        我是一段文字
      </span>
    </section>
    <header>
      <h3>垂直居中-vertical-align方式(图片的垂直居中)</h3>
    </header>
    <section class="parent-img">
      <img src="https://yayxs.github.io/avatar.jpg" alt="" width="40" height="40">
    </section>
    <header>
      <h3>垂直居中-table-cell方式(表格内容垂直的方式)</h3>
    </header>
    <section class="box parent-table">
        <span>我是表格中的文字</span>
    </section>


    <header>
      <h3>垂直居中-positon的方式(相对父元素定位，然后移动自身)</h3>
    </header>
    <section class="box position">
        <span class="position-child">我是需要垂直居中的文字</span>
    </section>
  </body>
</html>

```

## 完全居中

完全居中：指的是水平垂直方向都居中

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>水平垂直居中</title>
  <style>
    .parent{
      border: 1px solid #ddd;
      position: absolute;
      width: 200px;
    }
    .son{
      position: relative;
      width: 100px;
      height: 100px;
      background-color: pink;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  </style>
</head>
<body>
  
  <header>
    <h3>水平垂直居中-绝对居中（脱离文档流）</h3>
  </header>
  <section class="parent">
    <section class="son"></section>
  </section>
</body>
</html>
```

## 两列布局-左侧定宽-右侧自适应

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        html,body{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .app{
            width: 100vw;
            /* height:100vh; */
            /* border: 1px solid #ddd; */
        }
        .app .left{
            width: 200px;
            height: 200px;
            background-color: bisque;
            float: left;
        }
        .app .right{
            margin-left: 200px;
            height: 200px;
            background-color: cadetblue;
        }
        .app1{
            position: absolute;
        }
        .app1 .left1{
            position: relative;
            width: 200px;
            height: 200px;
            background-color: cadetblue;
            top: 0;
            left: 0;
        }
        .app1 .right1{
            position: relative;
            height: 200px;
            top: -200px;
            right: 0;
            /* left 的值对应左侧的width宽度值 */
            left: 200px;
            background-color: coral;
        }
    </style>
  </head>
  <body>
    <header>
        <h3>左右两列布局-浮动float浮动脱离文档流+margin移动位置-兼容性好</h3>
    </header>
    <section class="app">
      <aside class="left"></aside>
      <main class="right"></main>
    </section>
    <header>
        <h3>左右两列布局-position定位-脱离文档流</h3>
    </header>
    <section class="app1 app">
      <aside class="left1"></aside>
      <main class="right1"></main>
    </section>
  </body>
</html>

```

## 两列布局-左侧不定-右侧自适应

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .left {
        float: left;
        height: 300px;
        background-color: cyan;
      }
      .right {
        overflow: hidden; /*触发bfc*/
        height: 500px;
        background-color: darkolivegreen;
      }
    </style>
  </head>
  <body>
    <header>
      <h3>左右两列布局</h3>
    </header>
    <section class="app">
      <aside class="left">
        123456
      </aside>
      <main class="right"></main>
    </section>
  </body>
</html>

```