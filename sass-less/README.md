# CSS | 预处理器（上）- Sass

---

## 写在前面

在实际项目开发中，我们已经渐渐的不去使用原始的`css`,反而使用较为方便的预处理器`sass`，`less`，也就是下文咱们即将要提到的。既然是前端开发者不得不掌握的一门技术：写样式，即使现在是`工程化` `模块化` 开发，不过我们逃不开的还是最基础的样式
我们知道常见的`css预处理器` 有三种：

- sass
- less
- stylus

这是一个`系列篇`

1. [CSS | 预处理器（上）- Sass (已完成)]()
2. [CSS | 预处理器（中）- Less (未完成)]()
3. [CSS | 预处理器（下）- Stylus(未完成)]()

### 初识

或多或少我们都知道`sass`很便捷，支持嵌套的语法

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

```css
body {
  background-color: pink;
}
body ul li {
  font-size: 20px;
}

/*# sourceMappingURL=demo.css.map */
```

### 核心用法

- 变量
- 嵌套
- 混合
- 函数

## 准备工作

### 安装

对于前端开发者来说,可以直接在`node`环境安装

```bash
 npm install -g sass

 sass --version // 1.26.2 compiled with dart2js 2.7.1
```

在基于`node` 的环境下，直接全局安装就可以使用，当然在`windows`以及`mac` 平台上又有一些差异，这里可以查阅官网
[sass 英文官方网站](https://sass-lang.com/install)

**安装完成**
![20200205182552.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200205182552.png)

### 编译

将`style`文件下的`sass`转为`style`下的`css`

```bash
sass --watch style/sass:style/css
```

```sh
├─demo.html
├─README.md
├─style
|   ├─sass
|   |  ├─demo.scss
|   |  └_base.scss
|   ├─css
|   |  ├─demo.css
|   |  └demo.css.map
```

## 详细用法

### 变量

- 目的 ：为了能够在样式表中方便的访问
- 使用：存储颜色、字体

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

```css
.box {
  background-color: #fff;
}

h1 {
  border: 1px solid #fff;
}

/*# sourceMappingURL=demo.css.map */
```

#### 插值变量

```scss
$class: ".div" #{$class} {
  width: 200px;
}
```

### 嵌套

- 目的：便于维护、层次分明、可视化
- 使用：直接一层一层的嵌套

```scss
li {
  a {
    display: block;
    &:hover {
      background-color: pink;
    }
  }
  & &-text {
    font-size: 20px;
  }
}
```

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

```scss
body {
  font: {
    family: Arial, Helvetica, sans-serif;
    size: large;
    weight: bold;
  }
  border: 1px solid red {
    radius: 20px;
    top: 20px;
  }
}
```

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  font-weight: bold;
  border: 1px solid red;
  border-radius: 20px;
  border-top: 20px;
}

/*# sourceMappingURL=demo.css.map */
```

### mixins 混合

#### 基本使用

```scss
// 定义混入
@mixin mixinName {
  color: red;
  background-color: pink;
  a {
    color: green;
  }
}

// 使用混入
div {
  @include mixinName();
}
```

```css
div {
  color: red;
  background-color: pink;
}
div a {
  color: green;
}

/*# sourceMappingURL=demo.css.map */
```

#### 带参数

```scss
@mixin myMixin($text-color, $bgc) {
  color: $text-color;
  background-color: $bgc;
}

.box {
  @include myMixin(#fff, red);
}
.box2 {
  @include myMixin($bgc: #fff, $text-color: pink);
}
```

```css
.box {
  color: #fff;
  background-color: red;
}

.box2 {
  color: pink;
  background-color: #fff;
}

/*# sourceMappingURL=demo.css.map */
```

### 继承

```scss
.type {
  margin: 10px;
}
.type a {
  font-weight: bold;
}

.type-info {
  @extend .type;
  font-size: 20px;
}
```

```css
.type,
.type-info {
  margin: 10px;
}

.type a,
.type-info a {
  font-weight: bold;
}

.type-info {
  font-size: 20px;
}

/*# sourceMappingURL=demo.css.map */
```

### partials 和 @import

```scss
@import "base";
div {
  background-color: pink;
}
```

### 注释

```scss
// 单行注释

/*注释
*多行注释*/
```

```css
@charset "UTF-8";
/*注释
*多行注释*/

/*# sourceMappingURL=demo.css.map */
```

### 类型

```
PS E:\gh-code\every-day-up\sass-less\style> sass -i
>> type-of(`yayxs`)
           ^
Error: expected ")".
>> type-of(12)
number
>> type-of(hello)
string
>> type-of(1px solid)
list
>> type-of(#fff)
color
>> type-of(red)
color
>>
```

```

>> (10 /2)
5
>> (10px+10px)
20px
>> 2px * 2px
4px*px
>> (4px/2px)
2
>>

```

```
>> abs(-10)
10
>> round(2.2)
2
>> ceil(2.3)
3
>> floor(3.6)
3
>> min(1,2,3)
min(1, 2, 3)
>> max(100,99,98)
max(100, 99, 98)
>>
```

### string

```
>> to-lower-case('YAYXS')
"yayxs"
>> str-length('yayxs')
5
>> str-index("yayxs",yx)
3
>> str-insert("yayxs","nice",2)
"yniceayxs"
>>

```

### 颜色函数

```scss
body {
  background-color: rgb(255, 0, 0);
  background-color: rgba(255, 0, 0, 0.5);
  background-color: hsl(100%, 0, 0);
  background-color: hsla(100%, 0, 0, 0.5);
}
```

#### adjust-hue

```scss
$base-color: #ff0000;
body {
  background-color: adjust-hue($base-color, 138deg);
}
```

```css
body {
  background-color: #00ff4d;
}

/*# sourceMappingURL=demo.css.map */
```

#### lighten

```scss
$light-color: lighten($base-color, 30%);
$dark-color: darken($base-color, 30%);

$saturate-color: saturate($base-color, 50%);
```

### 列表

```
>> length(1px solid red)
3
>> nth(5px 10px,2)
10px
>> index(1px 2px,1px)
1
>> append(1px 2px,3px)
1px 2px 3px
>>

```
