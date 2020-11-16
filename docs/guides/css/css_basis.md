---
title: CSS的基础知识
---

# CSS的基础知识

::: tip
[选择器](#选择器)
[权重](#权重)
[继承](#继承)
[字体](#字体)
:::

## 选择器

1. css 样式空白 依赖压缩工具 压缩空白
2. css 样式表错误 不影响正常的 css 表

```css
body {
  backgroundadas: #000; // 不影响当前的样式表 控制台也不会报错
}
```

3. 选择器

```
*  // 通配符
a // 元素选择器
.app // 类选择器
#app // id选择器 理论上是唯一的 不应重复出现
main h2 // 结构选择器
h1[title] // 属性选择器 h1元素 有title这个属性
h1[title="img"] // 属性是title并且属性值是img的h1元素
h1[title~="img"] // 属性的值 是img 独立的一个单词
h1[title|="img"] // 属性选择器
h1[title*="img"] // 属性选择器
a:active 伪类选择器
input:focus // 聚焦的时候
```

4. 多类名选择器

```html
<section class="main-right success"></section>
```

5. main 元素的 h2

```html
<main>
  <!-- 仅仅只选中这一个h2 -->
  <h2>main</h2>
  <aside>
    <h2>aside</h2>
  </aside>
  <section>
    <h2>right</h2>
  </section>
</main>
```

```css
main > h2 {
  color: red;
}
```

6. h2 元素的兄弟 h3

```html
<main>
  <h2>main</h2>
  <!-- 选中 -->
  <h3>h3-main</h3>

  <aside>
    <h2>aside</h2>
  </aside>
  <section>
    <h2>right</h2>
  </section>

  <!-- 选中 -->
  <h3>h3-main</h3>
</main>
```

```css
main h2 ~ h3 {
  color: pink;
}
```

7. 伪类选择器

可以作用在一般的元素上，不仅仅是 a 标签

```css
a:link {
  color: red;
}
a:visited {
  color: pink;
}
a:hover {
  color: blue;
}
```

目标元素，应用在锚点链接

```css
div:target {
  color: red;
}
```

根元素的伪类选择器

```css
html {
}
/* 通过下方的方式也可 通过`:root` 选中html */
:root {
}
```

空元素的伪类选择器

```css
li:empty {
  /* li是空元素的话直接不显示 */
  display: none;
}
```

首尾选择器

```css
aside :first-child {
  color: red;
}
```

```html
<main>
  <aside>
    <h1>选中</h1>
    <ul>
      <li>选中</li>
      <li>选中</li>
    </ul>
  </aside>
  <h1>h1</h1>
</main>
```

```css
aside > :first-child {
  color: red;
}
```

```html
<main>
  <aside>
    <h1>选中</h1>
    <ul>
      <li>xx</li>
      <li>xx</li>
    </ul>
  </aside>
  <h1>h1</h1>
</main>
```

```css
aside h1:first-child {
  color: red;
}
```

```html
<main>
  <aside>
    <h1>选中</h1>
    <ul>
      <li>xx</li>
      <li>xx</li>
    </ul>
  </aside>
  <h1>h1</h1>
</main>
```

```html
<main>
  <aside>
    <h2>xx</h2>
    <h1>xx</h1>
    <ul>
      <li>xx</li>
      <li>xx</li>
    </ul>
  </aside>
  <h1>h1</h1>
</main>
```

```css
aside h1:first-of-type {
  color: red;
}
```

```html
<main>
  <aside>
    <h2>xx</h2>
    <h1>选中</h1>
    <ul>
      <li>xx</li>
      <li>xx</li>
    </ul>
  </aside>
  <h1>h1</h1>
</main>
```

唯一选择器

```css
aside :only-child {
  color: red;
}
```

```html
<main>
  <aside>
    <h2>xx</h2>
    <h1>xx</h1>
    <ul>
      <li>xx</li>
      <li>xx</li>
    </ul>
    <p>
      <span>选中</span>
    </p>
  </aside>
  <h1>xx</h1>
</main>
```

**选中 aside 中里边的 ul**

```css
aside ul:only-of-type {
  color: red;
}
```

```html
<main>
  <aside>
    <h2>xx</h2>
    <h1>xx</h1>
    <ul>
      <li>选中</li>
      <li>选中</li>
    </ul>
    <p>
      <span>xx</span>
    </p>
  </aside>
  <h1>xx</h1>
</main>
```

8. 隔一行变色的效果
   理论上可以

```css
main > ul li:nth-child(2n-1) {
  color: red;
}
main > ul li:nth-child(odd) {
  color: red;
}
main > ul li:nth-child(even) {
  color: red;
}
```

```html
<main>
  <h1></h1>
  <h2></h2>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</main>
```

9. 表单的样式

```css
/* 必填 */
input:required {
  border: 1px solid red;
}
/* 有效 */
input:valid {
  background-color: pink;
}
/* 无效 */
input:invalid {
  background: powderblue;
}
```

```html
<form action="">
  <input type="text" required />
</form>
```

## 权重

|     选择器     |  权重位  |
| :------------: | :------: |
|      行内      |   1000   |
|       id       |   0100   |
| 类选择器、属性 |   0010   |
|      标签      |   0001   |
|       \*       |   0000   |
|      继承      | 没有权重 |

通过 `color: powderblue !important;` 提高自己的权重

## 继承

子元素继承自父级的元素，大部分元素在 html 中设置字体 大小 能够继承的属性能有哪些呢？

## 字体

保证字体能够显示，一般情况下不使用中文字体 商业版权

```css
@font-face {
  /* 自己定义的名字是 my */
  font-family: "my";
  /* format 是字体的格式化类似于 */
  src: url("xxx") format("opentype");
}
h3 {
  font-family: my;
}
```

### 字体大小

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

### 行高

`line-height` 一般情况下是字体的 倍数 随着当前的字体的大小的改变而改变 动态的调整

### 颜色

用于描述颜色的方式有哪些呢

### 倾斜

`font-style: italic;`

**组合定义的时候需要字体样式和 size**

### 大小写转换

- 小型的大写等等

### 下划线

```css
h3 {
  text-decoration: underline;
  text-decoration: overline;
  text-decoration: line-through;
  text-decoration: none;
}
```

### 文字阴影

```css
text-shadow: pink 1px 2px 3px;
```

### 超出显示省略号

```css
/* 不换行 */
white-space: nowrap;
/* 超出隐藏 */
overflow: hidden;
/* 超出 的部分处理 */
text-overflow: ellipsis;
```
