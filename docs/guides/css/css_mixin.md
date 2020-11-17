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