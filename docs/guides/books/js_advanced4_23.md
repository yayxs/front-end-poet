---
title: JSON
---

## keywords

- JSON 不属于 js
- 解析序列化 json 的能力
- JSON 中没有变量声明
- 最后没有分号
- ES5 中增加了 JSON 的全局对象

## JSON.stringify

### 是什么

`JSON.stringify` 是将对象转换为 JSON，完整的形式 `JSON.stringify(val[,replacer,space])` 

- 参数一 待转换的值
- 参数二 可以是个数组、过滤函数
- 参数三 格式化的缩进

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

完整的形式`JSON.parse(str, [reviver]);`

- 参数一 合法的字符串
- 参数二 转换的函数