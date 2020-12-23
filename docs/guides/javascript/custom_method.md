---
title: JS中常用方法
---

# JS 中常用方法

## 检测数据类型

```js
function testTypeofRet() {
  let targetArr = [
    undefined,
    0,
    10n,
    true,
    "foo",
    Symbol("id"),
    Math,
    null,
    console,
  ];
  let result = [];
  for (let i of targetArr) {
    // console.log(typeof i )
    result.push(typeof i);
  }
  return result; // ["undefined", "number", "bigint", "boolean", "string", "symbol", "object", "object", "object"]
}
```
