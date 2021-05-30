---
title: CSS预处理器与企业级通用Mixin
---

# CSS预处理器与企业级通用Mixin

## 写在前面

在实际项目开发中，我们已经渐渐的不去使用原始的`css`,反而使用较为方便的预处理器`sass`，`less`，也就是下文咱们即将要提到的。既然是前端开发者不得不掌握的一门技术：写样式，即使现在是`工程化` `模块化` 开发，不过我们逃不开的还是最基础的样式。我们知道常见的`css预处理器` 有三种（其核心没有本质的区别）：

- `sass` :scss  编译稍慢 是一种动态样式语言，语法是缩排的，比css多出好些功能，像变量、嵌套、运算、混入、继承、颜色出路、函数等
- `less`: 基于node 入门简单些 less也是一种动态的样式语言，受sass影响较大，赋予了动态语言的特性，如变量，继承，运算，函数，less，既可以在客户端运行，也可以在服务器端运行
- `stylus`:产生于node社区，人气相对来说第一点，但是也是一种革命性的新语言，提供一个高效，动态、和使用表达方式来产生css，支持缩进和常规的样式书写规则

主要是为了解决一些权重的问题等等，不过最终使用的还是 css 样式 只是借助第三方的方式更便捷的写样式而已。是基于`css` 的另一种语言。通过工具编译为`css`，添加了很多css的不具备的特性，其意义是提升css文件的组织，或多或少我们都知道`sass`很便捷，支持嵌套的语法，接下来的内容重点分享`less` 与`sass` 简单说说三者的联系与区别

```scss
body {
  background-color: pink;
  ul {
    li {
      font-size: 20px;
    }
  }
}
```
编译之后，还是一般的 css

```css
body {
  background-color: pink;
}
body ul li {
  font-size: 20px;
}

```
相对于css而言更强大了一些，因为在css的预处理器中添加了类似于编程语言的一些特性，比如说变量、混合宏、扩展、逻辑运算等。就早期而言，写css是不存在这些的这些特性给我们写Css和维护带来了很大的方便之处。

- css用一门专门的编程语言，进行web页面的样式设计，然后再编译成正常的css文件，以供项目是用，
- 让css更加的简洁，适应性更强、可读性更佳、更易于代码的维护
## 核心特性用法

- 嵌套 
- 变量和计算 减少重复的代码
- extend 和mixin 代码片段
- 循环 适用于复杂的样式
- import css文件的模块化

## 安装
### less的安装

```
<!-- 可以全局安装 -->
npm i -g less
```
### sass的安装

对于前端开发者来说,可以直接在`node`环境安装,文件的后缀名为`scss`

```bash
 npm install -g sass
# 或者 npm i node-sass
 sass --version  // 1.29.0 compiled with dart2js 2.10.3
```

在基于`node` 的环境下，直接全局安装就可以使用，当然在`windows`以及`mac` 平台上又有一些差异，这里可以查阅官网
[sass 英文官方网站](https://sass-lang.com/install)

**安装完成**
![20200205182552.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200205182552.png)


## 嵌套

- 目的：便于维护、层次分明、可视化
- 使用：直接一层一层的嵌套

### less的嵌套
和`sass` 大致相同
### sass的嵌套

```scss
li {
  a {
    display: block;
    &:hover {
      background-color: pink;
    }
  }
}
```
**编译后的结果如下**
```css
li a {
  display: block;
}
li a:hover {
  background-color: pink;
}
li li-text {
  font-size: 20px;
}

/*# sourceMappingURL=demo.css.map */
```


## 变量

- 目的 ：为了能够在样式表中方便的访问
- 使用：存储颜色、字体，背景颜色等等，

### less中变量

注：以下案例中的`lighten()`是一个颜色函数，相似的还有

```scss
$light-color: lighten($base-color, 30%);
$dark-color: darken($base-color, 30%);

$saturate-color: saturate($base-color, 50%);
```

```less
// 变量部分 以`@`开头
@fontSize: 12px;
@bgColor: red;

body{
    padding:0;
    margin:0;
}

.wrapper{
    background:lighten(@bgColor, 40%);

    .nav{
        font-size: @fontSize;
    }
    .content{
      // 使用计算
        font-size: @fontSize + 2px;
        &:hover{
            background:@bgColor;
        }
    }
}

```
### sass中的变量
以`$`开头

```scss
$my-color: #fff;
$my-border: 1px solid $my-color;
.box {
  background-color: $my-color;
}
h1 {
  border: $my-border;
}
```


## mixin

### less中的mixin

```less
// 定义混入 假使我们定义一个块
.block(@fontSize){
    font-size: @fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}


// 使用混入
div {
  .block(@fontSize + 22px)
}
```
### sass的mixin

```scss


$fontSize: 12px;
$bgColor: red;

@mixin block($fontSize){
    font-size: $fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}

body{
    padding:0;
    margin:0;
}

.wrapper{
    background:lighten($bgColor, 40%);

    .nav{
      // 显示的调用
        @include block($fontSize);
    }
    .content{
        @include block($fontSize + 2px);
        &:hover{
            background:red;
        }
    }
}

```

## extend

### less中的extend

```less

@fontSize: 12px;
@bgColor: red;

.block{
    font-size: @fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}

body{
    padding:0;
    margin:0;
}

.wrapper{
    background:lighten(@bgColor, 40%);

    .nav:extend(.block){
        color: #333;
    }
    .content{
        &:extend(.block);
        &:hover{
            background:red;
        }
    }
}

```
### sass中的extend

```scss
.wrapper{
    background:lighten($bgColor, 40%);

    .nav{
        @extend .block;
        color: #333;
    }
    .content{
        @extend .block;
        &:hover{
            background:red;
        }
    }
}

```

## import
首先默认的 css也是可以`@import` 但是默认是不会做过多的处理，这就会造成过多的`http` 连接数
### less中的import

```less
@import "xxx.less"
```
### sass中的import

和`less` 大体一样，不过多的分析
## 三者的区别

- 从变量的角度
  - sass声明变量是`$`开头 尽量避免混淆
  - less是用`@`开头 尽量接近 css的习惯
  - stylus声明变量没有什么限定

- 从`mixin`的角度，详见上文描述
- 作用域
  - sass:三者最差、不存在全局变量的概念、
  - less:最近的一次更新的变量有效
  - stylus：sass的处理方式与stylus相同

## sass与scss是什么关系

sass的缩排语法，对于写惯了css的前端开发者来说，也不能将css代码加入到sass里，sass3就变成了scss，与之前兼容 ，只是用{}取代了原来的缩进

## 扩展：企业级项目中的`Mixin`


### 清除浮动

```css
.clearfix:after{
    visibility: hidden;
    display: block;
    font-size: 0;
    clear: both;
    height: 0;
    content: '';
}
```

### 文本溢出不换行


```css
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

### 修改滚动条的样式

```scss
@mixin scrollbar {
  max-height: 88vh;
  margin-bottom: 0.5vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(144, 147, 153, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(144, 147, 153, 0.3);
  }
}

@mixin base-scrollbar {
  &::-webkit-scrollbar {
    width: 13px;
    height: 13px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track:hover {
    background-color: #f8fafc;
  }
}
```

### Vue项目的过度动画


```scss
@charset "utf-8";

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: $base-transition;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

```

### 多行隐藏

```scss

@mixin textoverflow($clamp:1) {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $clamp;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}

```

### 弹性盒

```scss
@mixin flexbox($jc:space-between, $ai:center, $fd:row, $fw:nowrap) {
  display: flex;
  display: -webkit-flex;
  flex: 1;
  justify-content: $jc;
  -webkit-justify-content: $jc;
  align-items: $ai;
  -webkit-align-items: $ai;
  flex-direction: $fd;
  -webkit-flex-direction: $fd;
  flex-wrap: $fw;
  -webkit-flex-wrap: $fw;
}
```