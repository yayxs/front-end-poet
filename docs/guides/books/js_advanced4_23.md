---
title: JSON
---

### keywords

- JSON 不属于 js
- 解析序列化 json 的能力
- JSON 中没有变量声明
- 最后没有分号
- ES5 在增加了 JSON 的全局对象

## JSON.stringify

**函数属性** **Symbol 类型** **存储的是undefined** 都是会被跳过，完整的形式 `JSON.stringify(val[,replacer,space])`

```js
let o = {
  id: 1,
  info: {
    arr: [1, 2, 3],
    subs: [
      {
        id: 1,
        name: "subs",
        info: undefined, // 直接pass
      },
    ],
  },
};

console.log(JSON.stringify(o, ["id"])); // {"id":1}
console.log(
  JSON.stringify(o, (k, v) => {
    if (k === "id") {
      return 2;
    } else {
      return v;
    }
  })
);

console.log(JSON.stringify(o, null, 2));
console.log(JSON.stringify(o, null, "---"));
```

## JSON.parse