---
title: JS中常用方法
---

# JS中常用方法

## 检测数据类型

```js

function testTypeofRet(){
    let targetArr = [undefined , 0 , 10n , true, "foo", Symbol('id'), Math, null, console ]
    let result = []
    for(let i of targetArr){
        // console.log(typeof i )
        result.push(typeof i)
    }
    return result // ["undefined", "number", "bigint", "boolean", "string", "symbol", "object", "object", "object"]
}

```

## 数据类型转换

```js
function dataTypeConversion(){
    let targetArr = [1,0,NaN, "1","","0","-1","1.1","01",true,false,null,undefined,Symbol('id'), [1],[],{name:'yayxs'},{},()=>{}]

    let toString = []

    for(let i of targetArr){
         i = String(i)
        toString.push(i)

    }
    console.log(toString) // 
}
// ["1", "0", "NaN", "1", "", "0", "-1", "1.1", "01", "true", "false", "null", "undefined", "Symbol(id)", "1", "", "[object Object]", "[object Object]", "()=>{}"]
```