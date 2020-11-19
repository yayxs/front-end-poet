---
title: CSS3 有哪些好玩的新特性
---

---

# 前言
 
`css3` 新增了好玩的特性，大体包括三大交互属性 `变换` `过渡` `动画` 以及`圆角` `阴影` `渐变`等等

# 一、 CSS3 系列之动画 animations

动画包括两部分：

- 其一 描述动画的样式规则
- 其二 指定动画开始、结束、中间点的关键帧（此处指的是帧动画|可以理解为一帧一帧的）

脚本也可以实现动画，那么纯正的`css` 实现动画有什么好处或者优点

> 1.  能够非常容易地创建简单动画，你甚至不需要了解 JavaScript 就能创建动画。
> 2.  动画运行效果良好，甚至在低性能的系统上。渲染引擎会使用跳帧或者其他技术以保证动画表现尽可能的流畅。而使用 JavaScript 实现的动画通常表现不佳（除非经过很好的设计）。
> 3.  让浏览器控制动画序列，允许浏览器优化性能和效果，如降低位于隐藏选项卡中的动画更新频率。
>
> 摘自《MDN》

先来看一段 css3 的动画

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    width: 100vw;
    height: 100vh;
    background-color: yellowgreen;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  main {
    width: 100px;
    height: 100px;
    background-color: #fff;
    animation-name: animationName;
    animation-duration: 4s;
  }

  @keyframes animationName {
    form {
      background-color: #fff;
    }
    to {
      background-color: black;
    }
  }
</style>
<body>
  <main></main>
</body>
```

其中`animation-xxx` 描述的是动画的细节、这些细节指的是动画持续的时间、时长、等等

```css
animation: name duration timing-function delay iteration-count direction
  fill-mode;
```

上述不明白暂时没有关系，接着看

<div style="color:red">上述的完整代码  </div>

### keyframes

desc:用来定义动画的序列（两个及以上的关键帧） 上个例子的

```css
form {
  // 代表的是从什么时间开始 开始状态
  background-color: #fff;
}
to {
  // 代表结束状态
  background-color: black;
}
```

上述便是关键帧的简单实用

```css
@keyframes animationName {
  100% {
    background-color: #fff;
  }
  0% {
    // 元素的原始状态
    background-color: black;
  }
}
// 值得注意的是即使是顺序颠倒也是同样的道理 0% 是动画的开始，100% 是动画的完成。 为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。
```


# 二、 CSS3 系列之渐变 gradient

渐变指两种或多种颜色在特定区域内平滑过渡的效果,值得注意的是每个渐变函数都必须在background或background-image上使用，

## 线性渐变
```scss
  .box{
      width: 200px;
      height: 50px;
      /* 线性渐变 */
      /* to right 指的是方向 */
      /*  */
      background-image: linear-gradient(to right,#fff,#ddd);
    }
```
### 渐变背景

```scss
  .box1{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      background: linear-gradient(135deg,#f66,#f90,#3c9,#09f,#66f) left center/400% 400%;
      font-weight: bold;
      font-size: 100px;
      color: #fff;
      animation: move 10s infinite;
    }
    @keyframes move {
        0%,100%{
          background-position-x: left;
        }
        50%{
          background-position-x: right;
        }
    }
```




# 三、 CSS3 系列之阴影 

阴影效果有三剑客，分别是box-shadow、text-shadow、drop-shadow()，