## 序言
时间就是那么的稍纵即逝，还记的 `2020年02月03日` 的一篇《春节间的TypeScript笔记整理》截止目前半年过去了，转眼间已经到了 2020的年中 `TypeScript` 它还是依旧的像热辣妹子一样如此火爆。我们先来看看发生的变化，就在我们眼皮子底下的变化

 - `Deno` 它底层用`TS` 搞了一波，不过 听说要是移除，过多的细节，就不在咱们的讨论范围内，至于为什么要移除 `TS` 是TS不够优秀嘛？显然不是

 - `Vue 3x` 已经表明 底层用`TS` 重写了一遍 

 - 随便 `Clone` 一个开源的项目，你一打开会发现 `.ts` `.tsx` 

你可能会问，现在我要不要开始学一点`TS` 半年过去了，这个问题想必已经没有意义了。因为在社区里，已经默认你会`TS` 了，即使你还没有使用过`TypeScript` 写过一行代码

…………

过多了就不说了，回顾一下在[春节间的TypeScript笔记整理](https://juejin.im/post/5e377a5de51d4530e60e4d1d) 在这篇文章中，大体梳理了一下，关于 `TS` 学习探索的思路（如果你还有印象的话：就是在前期思路那里）

 1. TS一些基本的语法
 2. 在Vue中的实践
 3. 在React中的实践

我们没有填坑的有，一是更好的理解 `Ts` ;二是 如何在实践中应用 ，本篇就正值 `2020年中` 我们来次小分享，开始吧


## tsconfig.json 文件

其中`compilerOptions ` 是编译选项，详细见 [https://jkchao.github.io/typescript-book-chinese/project/compilationContext.html#%E5%9F%BA%E7%A1%80](https://jkchao.github.io/typescript-book-chinese/project/compilationContext.html#%E5%9F%BA%E7%A1%80)

```json
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}

```

不得不提的是在我们的一些ts项目中的`package.json` 文件中非常常见如下的配置
```json
{
  "include": [ // 需要包含的文件
    "./folder"
  ],
  "exclude": [ // 需要排除的文件
    "./folder/**/*.spec.ts", // 测试文件
    "./folder/someSubFolder"
  ]
}
```
## 声明空间

 - 类型声明空间

```ts
class Simple {}

let s:Simple // 其中Simple 是s 的一个`类型注解`

```


 - 变量声明空间

## 模块
假使我们在同一个项目中创建两个文件 
 - index.ts
 - demo.ts

我们在不同的文件定义相同的变量
```
let foo: any
无法重新声明块范围变量“foo”。ts(2451)
index.ts(1, 7): 此处也声明了 "foo"。
```
也就是说这些是全局的模块，会造成影响

### ES模块
这里你就需要回忆一下`ES` 的模块化语法

### global.d.ts
这是我们项目中的全局模块 ,来自[https://jkchao.github.io/typescript-book-chinese/project/modules.html#%E4%BB%80%E4%B9%88%E6%98%AF-place](https://jkchao.github.io/typescript-book-chinese/project/modules.html#%E4%BB%80%E4%B9%88%E6%98%AF-place)
```ts
// global.d.ts
declare module 'foo' {
  // some variable declarations
  export var bar: number;
}
```
作用就是将`接口` 或者`类型` 放入全局命名空间

## 类型注解
说白了，就是对变量的类型进行注解，就像这样

```ts
 let arr:boolean[] // 数组里只能放布尔值
```
其他的就不多说了，可以看第一篇文章

## 泛型
这就需要重点说一下，毕竟在`js` 中很少提到,习惯上用 `T` 来表示

```ts
function foo<T>(params:T[]):T[]{

}
// 还记得  let arr:boolean[] ，也就是说 函数的参数 params 是有 `T` 类型组成的数组，返回值亦然
```
## 联合类型

```ts
function bar(params:boolean | string){

}

```
## 类型别名
不管怎么说，见到`type ` 得知道是类型别名，至于什么时候用 接口什么时候用类型别名，你用着用着就知道了

```ts
type Callback = (data: string) => void;
```
## 