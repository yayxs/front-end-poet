[TOC]

## 栈

### 栈结构的实现

```js
 function Stack() {
        this.arr = [];
        Stack.prototype.push = function (ele) {
          this.arr.push(ele);
        };
        Stack.prototype.pop = function () {
          return this.arr.pop();
        };
        Stack.prototype.peek = function () {
          return this.arr[this.arr.length - 1];
        };
        Stack.prototype.size = function () {
          return this.arr.length;
        };
        Stack.prototype.toString = function () {
          let str = "";
            for (let i = 0; i < this.arr.length; i++) {
            str += this.arr[i] + " ";
          }
          return str;
        };
      }
```

### 栈的操作

- push
- pop
- peek
- isEmpty
- size
- toString

## 队列

### 队列的操作

### 击鼓传花

### 优先级队列

## 链表

###   单向链表



## 算法

### 大O

### 排序算法



