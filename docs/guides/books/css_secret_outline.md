---
title: 《CSS 揭秘》
---

一段简单的`css`描述一个`box` 盒子,起初的 css 我们看一下有什么不当的地方

```html
<div class="box">按钮</div>
```

```css
.box {
  width: 200px;
  height: 100px;
  background: #58a linear-gradient(green, yellow);
  padding: 6px 16px;
  border: 1px solid red;
  border-radius: 4px;
  box-shadow: 0 2px 6px pink;
  color: white;
  font-size: 20px;
  line-height: 100px;
}
```

![](https://raw.githubusercontent.com/yayxs/Pics/master/20201104223418.png)

可以看出行高是字体的**5**倍，那么应该

```css
font-size: 20px;
line-height: 100px;
----->line-height: 5;
```

改变了行高，就要改变字体，写成 20px 不太行太过绝对
