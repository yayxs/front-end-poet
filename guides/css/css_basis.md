---
title: CSS基础知识与技巧
---

# CSS 的基础知识

css 中的样式空白依赖压缩工具压缩其空白； css 样式表错误不影响正常的 css 渲染（不像 JS 的代码一样）



## 非布局的样式

 - 字体、字重、颜色、大小、行高
 - 背景、边框
 - 滚动、换行
 - 粗体、斜体、下划线
 - 等等



#### iconfont的原理

原理是：自定义字体

#### 行高

 - 行高的构成
 - 行高的现象方案
 - 
`line-height` 一般情况下是字体的 倍数 随着当前的字体的大小的改变而改变 动态的调整
#### 字重
#### 斜体
#### 下划线

 - text-decoration

#### 指针 cursor
#### 字体大小

像素 百分比 px 常用的单位

```css
main {
  font-size: 14px;
}
span {
  font-size: 100%;
  font-size: 1em;
  font-size: 14px;
}
```

```html
<main>
  123
  <span>字体</span>
</main>
```



#### 颜色

用于描述颜色的方式有哪些呢

 - rgba
 - rgb
 - 单词
 - hls
 - hlsa

### 背景background

```scss
.box-bg{
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  background-color: cornsilk;
  background-image: url('https://yayxs.github.io/avatar.jpg');
  // 平铺的方式
  background-repeat: no-repeat;
  // 平铺的
  // background-position: center top;
  background-position: 20px 30px;
  背景图的大小
  // background-size: 200px 200px;
  background-size: contain;
}
```
### 文本换行

 - overflow-wrap(word-warp) 
 - word-break
 - white-space 空白处是否断行

### CSS Hack

CSS中，hack是指一种兼容css在不同浏览器中正确显示的技巧方法，因为他们都属于个人对css代码的非官方的修改，或非官方的补丁。有些人更喜欢使用patch（补丁）来描述这种行为。

 1.因为历史原因，不同的浏览器样式存在差异，可以通过 Normalize.css 抹平差异，也可以定制自己的 reset.css，例如通过通配符选择器，全局重置样式
```css
  { margin: 0; padding: 0; }
```
 2.在CSS3还没有成为真正的标准时，浏览器厂商就开始支持这些属性的使用了。CSS3样式语法还存在波动时，浏览器厂商提供了针对浏览器的前缀，直到现在还是有部分的属性需要加上浏览器前缀。在开发过程中我们一般通过IDE开发插件、css 预处理器以及前端自动化构建工程帮我们处理。

浏览器内核与前缀的对应关系如下

| 内核    | 主要代表的浏览器 | 前缀    |
| ------- | ---------------- | ------- |
| Trident | IE浏览器         | -ms     |
| Gecko   | Firefox          | -moz    |
| Presto  | Opera            | -o      |
| Webkit  | Chrome和Safari   | -webkit |

 3.在还原设计稿的时候我们常常会需要用到透明属性，所以解决 IE9 以下浏览器不能使用 opacit。

```
 opacity: 0.5;
 filter: alpha(opacity = 50); //IE6-IE8我们习惯使用filter滤镜属性来进行实现
 filter: progid:DXImageTransform.Microsoft.Alpha(style = 0, opacity = 50); //IE4-IE9都支持滤镜写法progid:DXImageTransform.Microsoft.Alpha(Opacity=xx)
```

## 布局方式

 - table 布局
 - float 浮动 + margin的方式
 - inline-block布局
 - flexbox布局

### 表格布局

```html

    <style>
        .left{
            background:red;
        }
        .right{
            background:blue;
        }
        table{
            width:800px;
            height:200px;
            border-collapse: collapse;
        }
        .table{
            margin-top:20px;
            display: table;
            width:800px;
            height:200px;
        }
        .table-row{
            display: table-row;
        }
        .table-cell{
            vertical-align: center;
            display: table-cell;
        }
    </style>


    <table>
        <tr>
            <td class="left">左</td>
            <td class="right">右</td>
        </tr>
    </table>
    <div class="table">
        <div class="table-row">
            <div class="left table-cell">
                左
            </div>
            <div class="right table-cell">
                右
            </div>
        </div>
    </div>

```