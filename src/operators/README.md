# 运算符

|               赋值运算符               | 比较运算符 | 算数运算符 |                      位运算符                       | 逻辑运算符 |   字符串运算符   | 一元运算符 | 一元操作符) | 关系操作符   | 二元运算符 | 三元运算符 | 逗号运算符(逗号操作符) | 关系运算符 |
| :------------------------------------: | :--------: | :--------: | :-------------------------------------------------: | :--------: | :--------------: | :--------: | ----------- | ------------ | :--------: | :--------: | :--------------------: | :--------: |
|               赋值 x = y               |     ==     |     +      |                       按位与&                       |            | "my " + "string" |    x++     | delete      | `in`         |    x+y     |            |           ,            |            |
|          加法赋值 x+=y x=x+y           |     !=     |     -      |                      按位或\|                       |            |                  |    ++x     | typeof      | `instanceof` |    x\*y    |            |                        |            |
|           求幂赋值 x=x\*\*y            |    ===     |     \*     |                      按位异或^                      |            |                  | 一元负值 - |             |              |            |            |                        |            |
|         左移位赋值 x = x << y          |    !==     |     /      |                       按位非~                       |            |                  | 一元正值+  |             |              |            |            |                        |            |
|           无符号右移位 x>>>y           |     >      |     %      | 左移 a << b 将 a 的二进制串向左移动 b 位 右边移入 0 |            |                  |            |             |              |            |            |                        |            |
|              按位或 x\|y               |     >=     |            |                     算数右移>>                      |            |                  |            |             |              |            |            |                        |            |
|              按位与 x & y              |     <      |            |                    无符号右移>>>                    |            |                  |            |             |              |            |            |                        |            |
| 按位异或 x ^ y (相同返回 0 不同返回 1) |     <=     |            |                                                     |            |                  |            |             |              |            |            |                        |            |
|                解构赋值                |            |            |                                                     |            |                  |            |             |              |            |            |                        |            |

## 算数运算符

- 加法运算符
- 减法运算符
- 乘法运算符
- 除法运算符
- 指数运算符
- 余数运算符
- 自增运算符
- 自减运算符
- 数值运算符
- 负数值运算符

## 加法运算符

```js
1 + 1 // 2
console.log(true + true) // 2

console.log('1' + false) // 1false
```

## 余数运算符

```js
// 取余
let num = 10

console.log(num % 3) // 10 / 3 = 3 …… 1

console.log(Math.abs(-3) % 2) // 1
```

## 数值运算符 vs 负数值运算符

```js
console.log(+true) // 1
console.log(+[]) // 0
console.log(+{}) // NaN
console.log(+[1]) // 1
```

## 指数运算符

```js
console.log(2 ** 2) // 4
```

## 赋值运算符

```js
x = 1
```

## 布尔运算符

- 取反运算符
- 且运算符
- 或运算符
- 三元运算符

## 位逻辑运算符

**2 的 n 次方**

|  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |  10  |  11  |  12  |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :--: | :--: | :--: |
|  1  |  2  |  4  |  8  | 16  | 32  | 64  | 128 | 256 | 512 | 1024 | 2048 | 4096 |

## 移位运算符

## 一元运算符

```js
let x = 0

console.log(++x) // 1
console.log(x) // 1

console.log(x++) // 0

console.log(x) // 1
```

## 逗号运算符

```js
// 逗号运算符

function handler(orign) {
  return ([orign[0], orign[1]] = [orign[1], orign[0]]), orign[0] + orign[1]
}
```

## 可选练操作符

```js
// 可选链操作符 ?.

const res1 = { code: 10001, data: null, msg: 'no-data' }
const res2 = { code: 0, data: {}, msg: 'have-data' }

function resHandler(res) {
  if (res && res.code === 0) {
    console.log('curr', res)
    console.log(res?.data?.name)
  }
}

resHandler(res1)
resHandler(res2)
```

## 取反运算符

```js
console.log(!false)
console.log(!undefined)
console.log(!null)
console.log(!0)
console.log(!NaN)

console.log(!'')
```

```js

!! // 两次取反 布尔值 Boolean()
```

## 且运算符

```js
//  &&

console.log(null && 1) // null
console.log(undefined && 2) // undefined
console.log(0 && 3) // 0
console.log('0' && 4) // 4
```

## 或运算符

```js
// ||

console.log(null || 1) // 1
console.log(undefined || 2) // 2
console.log(false || 3) // 3
console.log(0 || 4) // 4
console.log('' || 5) // 5
```

## 二进制位运算

- 二进制或运算 |
- 二进制与运算 &
- 二进制非运算 ~
- 异或
- 左移
- 右移
- 头部补零的右移 >>>

```js
console.log(~~-3) // -3

console.log(~~-2.9) // -2
console.log(~~47.12) // 47
console.log(~~1.999) // 1

console.log(~~-1.23) // -1
```
