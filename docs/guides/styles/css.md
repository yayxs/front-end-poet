---
title: css
---

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
