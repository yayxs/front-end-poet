---
title: CSS 的基础知识
---

# CSS 的基础知识

css 中的样式空白依赖压缩工具压缩其空白； css 样式表错误不影响正常的 css 渲染（不像 JS 的代码一样）

## 选择器

### 选择器的基本分类

> 基本的选择器

| 选择器 | 别名       | 使用 |
| ------ | ---------- | ---- |
| \*     | 通配符     | \*{} |
| tag    | 标签选择器 | p{}  |
| .class | 类         | .{}  |
| #id    | id 选择器  | #{}  |

> 伪元素

| 选择器   | 别名         | 使用 |
| -------- | ------------ | ---- |
| ::before | 在元素前插入 |      |
| ::after  | 在元素后插入 |      |

> 层次选择器

| 选择器      | 别名       | 使用 |
| ----------- | ---------- | ---- |
| elem1+elem2 | 相邻的同胞 |      |
| elem1~elem2 | 通用的同胞 |      |



#### + 选择器的应用

```html
<h3>选择器的应用</h3>
  <div class="box1">
    <ul class="list">
      <li>兄弟元素</li>
      <li class="curr">当前的元素</li>
      <li>兄弟元素</li>
      <li>兄弟元素</li>
      <li>兄弟元素</li>
    </ul>
  </div>
  <div class="box1"></div>
```


```css
.box1{
  display: flex;
  & + .box1{
    margin-top: 20px;
  }
  .list{
    border: 1px solid #f66;
    width: 200px;
    line-height: 2;
    font-weight: bold;
    font-size: 20px;
    color: #f66;
    & + .list{
      margin-left: 20px;
    }
    li{
      padding: 0 10px;
    }
    .curr{
      background-color: aquamarine;
      & + li{
        background-color: bisque;
      }
    }
  }
}
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

## 关于CSS中的背景background

```scss
.box-bg{
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  background-color: cornsilk;
  background-image: url('https://yayxs.github.io/avatar.jpg');
  background-repeat: no-repeat;
  background-position: center;
  // background-size: 200px 200px;
  background-size: contain;
}
```

