---
title: 企业级项目中的CSS Mixin
---

# 企业级项目中的CSS Mixin

## 清除浮动

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

## 文字溢出


```css
.ellipsis {
     overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

## 修改滚动条的样式

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

## Vue项目的过度动画


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

## 多行隐藏

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

## 弹性盒

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