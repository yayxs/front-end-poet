`vite` 在`github`上可以看到一些社区中常见的[开发者](https://github.com/orgs/vitejs/people)。看一下`github组织` 中的[repositories](https://github.com/orgs/vitejs/repositories?q=&type=all&language=&sort=stargazers)。有`vite`官方的仓库：可以看看源码大致是怎么实现的；有 `awesome-vite` 一些很棒的 vite 项目：可以找一些用在自己的开发项目中；`create-vite-app`: 在[搭建](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project) vite 项目时候可以看到模板的实现细节；还有`docs-es` `docs-cn` 官方的文档；以 `vite-plugin-xx` 开头的官方的 **vite 插件**

从官方组织中可以得到以下信息：

- vue 社区中 `antfu` `patak` `sodatea`…… 在开发
- vite 是前端的一个工具，有可能和打包有关，推测和`webpack` 有关
- 已经有一些成熟的轮子，拿来即用
- 中英文文档和其他语言的文档已经基本完备
- 有`create-vite-app` 推测和 `create-react-app` 有关
- 可能有插件的概念，推测和 `rollup` 有某种关联

在看官方的文档之前（docs-es/docs-cn）还要在`github` 上待一会，按照 [vite most stars](https://github.com/search?o=desc&q=vite&s=stars&type=Repositories) 大约 55,041 repository results

- 需要排除 `vitess`: 这是一个 ` MySQL.`有关的仓库
- `vue-vben-admin` `vue-pure-admin` `electron-vite-vue` `vue-admin-box` `fast-vue3` `v3-admin-vite` :需要留意，推测能从这些项目学习怎么配置 `vite`
- `vitest` :推测是一个测试的框架
- `unplugin-xx` :这种仓库，有可能提供了一种 帮我们自动化加载插件 plugin 的能力
- `vite plugin` :项目的名字包含这两个关键字，会不会与我们说的插件机制有关
- [element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter)：这个需要特别留意，可以用来学习 `element plus ` 结合 `vite` 怎么写
- `vscode-vite`: 有关 vite 在 vscode 中的插件
- `juejin-book-vite`:《深入浅出 Vite》掘金小册代码示例仓库
  阶段小结：
  1、vite 仓库的数量还比较少，但是像 mock 能力已经有插件，可以用于生产
  2、有一些 admin 的项目模板，但是需要阅读源码鉴别是否可以直接用于企业项目

## element-plus-vite-starter

[element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter)

看到项目有`pnpm-lock.yaml` 使用 pnpm （注意 node 的版本）

```sh
git clone https://github.com/element-plus/element-plus-vite-starter
pnpm i
pnpm run dev
```

有几个现象:
1、终端几乎是秒开，“It's fast!” 从体验上来说是的
2、初次打开浏览器页面的时候，tab 加载了一会

控制台网络查看全部

![element-plus-vite-starter控制台图](https://cdn.statically.io/gh/yayxs/picture-image@master/vite-learn/202301072054112.png)

- 从类型看：加载的是 `script`、`png`、`svg+xml` ……
- 从状态看：有 101、200、304

可以看到控制台一下子加载了很多内容

先来看 `element-plus` 是怎么加载的

```js
请求地址： http://localhost:3000/node_modules/.vite/deps/element-plus_es.js?v=d96abe08
请求方法：GET
状态代码：200 ok 来自磁盘缓存


query 参数的 v=xxx 应该是一个随机标记
再来看看响应

import {


}from "/node_modules/.vite/deps/chunk-MQGLGLDI.js?v=d96abe08";
import "/node_modules/.vite/deps/chunk-2RTGWPUT.js?v=d96abe08";
import "/node_modules/.vite/deps/chunk-W2H2VHQC.js?v=d96abe08";
import "/node_modules/.vite/deps/chunk-45X4ZMQ3.js?v=d96abe08";
//# sourceMappingURL=element-plus_es.js.map

```

```js
请求：
http://localhost:3000/node_modules/.vite/deps/element-plus_es_components_config-provider_style_index.js?v=d96abe08
响应：
import "/node_modules/.vite/deps/chunk-XPLNBTON.js?v=d96abe08";

// node_modules/.pnpm/element-plus@2.2.19_vue@3.2.41/node_modules/element-plus/es/components/config-provider/style/index.mjs
import "/node_modules/.pnpm/element-plus@2.2.19_vue@3.2.41/node_modules/element-plus/theme-chalk/src/config-provider.scss";
//# sourceMappingURL=element-plus_es_components_config-provider_style_index.js.map


```

再来看看`.scss` 文件是怎么加载的

```js
请求地址：http://localhost:3000/node_modules/.pnpm/element-plus@2.2.19_vue@3.2.41/node_modules/element-plus/theme-chalk/src/button.scss

状态代码: 304 OK

响应：
import {createHotContext as __vite__createHotContext} from "/@vite/client";
import.meta.hot = __vite__createHotContext("/node_modules/.pnpm/element-plus@2.2.19_vue@3.2.41/node_modules/element-plus/theme-chalk/src/button.scss");
import {updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle} from "/@vite/client"
const __vite__id = "D:/yuanma/element-plus-vite-starter/node_modules/.pnpm/element-plus@2.2.19_vue@3.2.41/node_modules/element-plus/theme-chalk/src/button.scss"
const __vite__css = "中间的css省略"
__vite__updateStyle(__vite__id, __vite__css)
import.meta.hot.accept()
export default __vite__css
import.meta.hot.prune(()=>__vite__removeStyle(__vite__id))

```

阶段小结：单单从 `element-plus` 的浏览器加载感觉怪怪的。
不过可以看到很多的 `import语句`，这点很重要。

当浏览器加载到文件的时候

```html
<script type="module" src="/src/main.ts"></script>
```

然后控制台筛选到 `main.ts`,响应的结果：

```js
import { createApp } from '/node_modules/.vite/deps/vue.js?v=d96abe08'
import App from '/src/App.vue'
import '/src/styles/index.scss'
import '/__uno.css'
import '/node_modules/.pnpm/element-plus@2.2.19_vue@3.2.41/node_modules/element-plus/theme-chalk/src/message.scss'
const app = createApp(App)
app.mount('#app')
```

**在 vite 中，一个 import 语句代表一个 http 请求** （深入浅出 vite）

阶段小结：看到这儿已经可以了，有几点不一样的地方

1、浏览器会一下加载很多的文件
2、有的是来自磁盘缓存

有几个问题？
1、有关 vite 的打包问题，开发状态和正式上了生产有啥区别
2、上了上产环境也是这样吗，加载很多的文件
3、vite 为啥很快

为了形成对比，我打开我们公司线上的项目，来简单的对比一下

首先加载文档

## 企业线上项目

```html
<head>
  <script
    type="module"
    crossorigin
    src="/这个是在服务器的二级路径/assets/index.dfa7494c.js"
  ></script>
  <link
    rel="stylesheet"
    href="/这个是在服务器的二级路径/assets/index.dc059c31.css"
  />
</head>
<body>
  <div id="app"></div>
</body>
```

css 文件，关注一下 大小来自 `disk cache`

![线上的css图片](https://cdn.statically.io/gh/yayxs/picture-image@master/vite-learn/202301072056542.png)

加载 js 文件

```js
https://域名/这个是在服务器的二级路径/assets/dayjs.min.bfb4d8cf.js
```

![线上的JS加载图片](https://cdn.statically.io/gh/yayxs/picture-image@master/vite-learn/202301072057146.png)

可以看到线上的 js 加载的文件没有那么多，能得到一个结论，控制台的请求日志，线上的环境没有开发环境的加载的资源多。还有 `vite` 是稳稳的上生产的，问题不大

## element-plus-vite-starter/vite.config.ts

回过头来，看看`vite` 在 element-plus-vite-starter 是怎么应用的

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^2.3.3",
    "vite": "^2.9.9",
    "vite-ssg": "^0.20.0"
  }
}
```

一个是 `dev:vite` ,执行这个脚本起一个开发时候的服务器
一个是 `@vitejs/plugin-vue` 这个推测 是 vite 的一个插件，可能与 vue 有关

接着打开 `vite.config.ts`

```js
export default defineConfig({})
```

1、和`webpack` 比 ，vite 的配置文件是 ESM
2、接着是`defineConfig` ,这个是 vite 抛出的用来定义配置
3、接着 plugins 装载了很多插件，用来服务这个项目

有关别名中的 `path.resolve`

```js
// node.js
const nodePath = require('path')

console.log('nodePath', nodePath)
```

你可以看看 [node 的 path](https://nodejs.org/docs/latest-v17.x/api/path.html#pathresolvepaths)

```js
path.resolve('/foo/bar', './baz')
// Returns: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/')
// Returns: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
// If the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
```

`__dirname` 是 node 的 `The module scope`

```js
console.log(__dirname)
// Prints: /Users/mjr
console.log(path.dirname(__filename))
// Prints: /Users/mjr
```

阶段小结：通过开源项目 vite 配置，大体了解 `vite.config.ts/js` 在项目启动的某个时机执行
后面我们只需要，用到什么配置了解什么配置就好。装包，然后配置。看文档了解用法。

## rollup

在看了一个 vite 的实际项目之后，还要了解一个内容 `rollup`

```sh
git clone https://github.com/rollup/rollup.git
```

其实 rollup 还是挺好的，想写一个 `npm 包` 的话，可以使用`rollup`。vite 和它的联系十分紧密，需要先看看。

在几年前，我查到一篇文章讲的就是如何使用 rollup 发布一个 npm 包，[这是仓库](https://github.com/MrXujiang/timeout_rollup) （注意：有的配置可能发生变化，但可以参考学习一下）

如果通读一下[rollupjs](https://rollupjs.org/guide/en/)文档，会发现一个文件 `rollup.config.js`

1、我个人认为：rollup 和 vite 的设计异曲同工之妙
2、rollup 学习的优先级可以低于 vite，先把 vite 应用到真实的项目中

## vite

本小节看一下 `vite` 的源码，不过不用担心，很你一定看得懂。其实上文说了，vite 是 vite 官方组织中标星最多的，这很正常，所以 clone 一下

```sh
git clone https://github.com/vitejs/vite.git
```

然后项目内搜索一下 `rollup.config.ts` 文件，它在 `你的项目根目录/packages/vite` 下

```js
// rollup.config.ts
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
```

`node:xx` 推测是高版本 node 的写法

```js
const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)).toString()
)
```

可以通过这种方式读取 `package.json` 中的当前项目的信息

先在这个文件搜一下 `defineConfig`

```js
// 作用是整一个环境变量的配置 （其中__dirname我们上文说过）
const envConfig = defineConfig({
  // 输入文件
  input: path.resolve(__dirname, 'src/client/env.ts'),
  // 用什么插件
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, 'src/client/tsconfig.json'),
    }),
  ],
  // 输出什么
  output: {
    file: path.resolve(__dirname, 'dist/client', 'env.mjs'),
    sourcemap: true,
  },
})
```

同样的道理 `clientConfig` `sharedNodeOptions` `createNodeConfig` 都是同样的道理

然后在看一下 `export default`,其实 这才是这个文件的出口，作用就是生成 `rollup`的配置
还有一些“辅助函数” 比如 `bundleSizeLimit` `cjsPatchPlugin` `shimDepsPlugin`

阶段小结：结合看 rollup 的文档 和 vite 源码中 rollup 的配置粗略的了解了一下。

## rollup

又回到 `rollup`，可以初始化一个项目，简单跑一下，

```sh
pnpm init -y
```

使用`rollup -c` 脚本执行一下 `rollup.config.js` 文件

```js
/**
 * @type { import('rollup').RollupOptions }
 * 提供 type 提示
 */
const rollupOptions = {
  input: 'input.js', // 某一个入口
  output: [
    // 输出不同的格式可以是个数组
    {
      file: 'output-iife.js',
      format: 'iife', // 浏览器
    },
    {
      file: 'output-esm',
      format: 'esm', // 浏览器esm
    },
    {
      file: 'output-cjs',
      format: 'cjs',
    },
  ],
}

export default rollupOptions // 可以是一个对象
```

## antfu/utils

还是 `rollup` ,上文都是看了别人怎么配置的，还有个项目

```sh
git clone https://github.com/antfu/utils.git
```

我猜测作者更多的在维护 `vueuse` ，当然了这个仓库很值得学习。搜一下 `rollup.config.js`

```js
// 使用了一些插件 rollup-plugin-esbuild 、rollup-plugin-dts 、@rollup/plugin-node-resolve 、rollup/plugin-commonjs
```

具体在实际项目中使用什么插件根据需要。
接着

```js
// 这个就是入口了
const entries = ['src/index.ts']
```

然后构造插件数组

```js
const plugins = [
  alias({
    entries: [{ find: /^node:(.+)$/, replacement: '$1' }],
  }),
  resolve({
    preferBuiltins: true,
  }),
  json(),
  commonjs(),
  esbuild({
    target: 'node14',
  }),
]
```

最后导出一个数组

```js
export default [
  ...entries.map((input) => ({
    input,
    output: [
      {
        file: input.replace('src/', 'dist/').replace('.ts', '.mjs'),
        format: 'esm',
      },
      {
        file: input.replace('src/', 'dist/').replace('.ts', '.cjs'),
        format: 'cjs',
      },
    ],
    external: [],
    plugins,
  })),
  ...entries.map((input) => ({
    input,
    output: {
      file: input.replace('src/', '').replace('.ts', '.d.ts'),
      format: 'esm',
    },
    external: [],
    plugins: [dts({ respectExternal: true })],
  })),
]
```

## vite 文档

有的文档是社区文档，一般是去`github` 然后看官方文档[https://vitejs.dev/](https://vitejs.dev/)。还是看中文 [https://cn.vitejs.dev/](https://cn.vitejs.dev/)

### 是什么

使用原生 ESM 文件，开发阶段无需打包 + 非常快的 HMR + 插件 + TypeScript 提供了工程化的全链条 的工具链

### 为什么是 vite

[https://cn.vitejs.dev/guide/why.html#why-bundle-for-production](https://cn.vitejs.dev/guide/why.html#why-bundle-for-production)
vite 应用中**依赖**和**源码**
[依赖] 第三方的库包（node_modules 中）：开发时候不会变动的纯 JS，vite 使用`esbuild` 预构建
[源码]什么是源码/业务代码：jsx css vue 需要转换 原生的 esm 浏览器直接接管打包程序的部分工作 **no-bundle**

一方面，vite 在开发阶段基于浏览器原生的 ESM 支持 no-b 服务
另一方面，借助 esbuild 编译速度 第三方库的构建和 ts/jsx 语法编译

> Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。

有关生产环境的打包：

> 为了在生产环境中获得最佳的加载性能，最好还是将代码进行 tree-shaking、懒加载和 chunk 分割（以获得更> 好的缓存）。

### 插件

插件有官方的插件
1、为`vue3` 提供 单文件组件支持
2、为`vue3` 提供 jsx 支持
3、兼容旧的浏览器等

和社区中的插件，我们在开头说过了，你也可以看一下

```sh
git clone https://github.com/patak-dev/vite-rollup-plugins # 获取一个带使用说明的兼容 Rollup 官方插件列表
```

插件的使用优先级就是；先是官方的插件，提供了官方的能力，还有就是社区成熟的插件，这个要看实际项目
关于插件的开发：文档中也说了，先看看社区有没有，没有同类的话再进行开发

## 指引与配置

告诉我们 vite 该怎么使用，该怎么去配置，进一步诠释解决的前端痛点：
| 痛点 | 详解 | 达到的目的 | 现有方案 |
| :---------------------------------------------: | :------------------: | :------------: | :----------------: |
| 模块化需求 | ESM CommonJS AMD CMD | 兼容模块的规划 | 一些模块化的方案 |
| 兼容浏览器、编译高级语法 | ts tsx | | sass\ts\img\font\ |
| 线上代码质量问题 | 安全性、兼容性 | | 压缩、语法降级 |
| 开发效率 项目的冷启动、二次启动时间、热更新时间 | | | HMR |

但是 Vite 呢：

- 被应用在大型项目中
- 启动的性能非常快
- 在开发阶段基于浏览器原生的 ESM 支持`no-bundle`服务(开发阶段：基于原生浏览器)
- 第三方库：使用 esbuild

|     模块化     |                   语法转译                   |        产物         | 其他 |
| :------------: | :------------------------------------------: | :-----------------: | :--: |
| 基于原生的 ESM | vite 内置 TypeScript JSX Sass 高级语法的支持 | rollup+terser+babel |      |

生产环境：vite 基于 rollup 打包
开发阶段：不打包、开发模块按需编译

## vite-starter

```sh
git clone https://github.com/yayxs/vite-starter.git
```

当我决定在公司用 vite 时候，还没具体看过“风险”。不过觉得问题不大，首先我会用终端起多个项目，首先想到怎么自定义开发服务器的 `port`。

[https://cn.vitejs.dev/config/server-options.html#server-port](https://cn.vitejs.dev/config/server-options.html#server-port)

```js
    server: {
      host: '0.0.0.0', // host 0.0.0.0 方便都能访问
      port:2023,
      proxy: {
        '/api': {
          target: VITE_APP_BASE_API,
          changeOrigin: true
        }
      }
    }
```

接着是，别名，兼容`vue2` 的方式，导入一个文件

```js
import echarts from '@/plugins/echarts/index.js'
```

可以这样配置

```js
 resolve: {
      alias: {
        '@': resolve(__dirname, '.', 'src')
      }
    },
```

还有一个值得注意的就是 `base` 这个，如果你的项目是 `https://www.a.com/hello/home`

那么需要配置,就像这样

```js
 base: `/${VITE_APP_BASE_URL}/`,
```

不过值得注意的是，在你装载路由的时候，同样需要关注

```js
function getHistoryMode() {
  const { VITE_APP_BASE_URL } = import.meta.env
  return createWebHistory(`/${VITE_APP_BASE_URL}`)
}
```

关于 `import.meta.env` 可以看 [https://cn.vitejs.dev/guide/env-and-mode.html#env-variables](https://cn.vitejs.dev/guide/env-and-mode.html#env-variables)

还有在 vite 启动，装载 `css`

```js
scss: {
  additionalData: `@use "./src/styles/element/index.scss" as *;`
}
```

接着就是装载插件了，一般情况下，我们写个`function` , 用来创建插件

```js
export function createVitePlugins() {
  const vitePlugins = [
    vue(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
    DefineOptions(),
    // see unocss.config.ts for config
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),
  ]
  return vitePlugins
}
```

关于插件的装载，可以参考上述主流的开源的项目。不过我们扩展的能力，比如原子化 css 或者第三方组件库，这个根据需要，想要了解方案细节的话还是需要看看相关的生态

- [ ] css
  - [ ] 原生 css
  - [ ] css 预处理器 css 预处理器 sass scss less stylus
  - [ ] css modules 将 css 类名处理成哈希值
  - [ ] postcss css 后处理器 postcss
  - [ ] css in js
  - [ ] 原子化 css tailwind windicss
- [ ] 代码规范
  - [ ] eslint
  - [ ] prettier
  - [ ] Stylelint

我觉的目前像 `掘金` 或者其他社区博客中有很多类似的帖子，怎么使用 `sass` 或者使用 `windicss` 等等。

最后在 **打包的时候**

```js
  build: {
      sourcemap: false,
      chunkSizeWarningLimit: 4000,
      outDir: VITE_APP_BASE_URL,
      assetsDir: 'assets'
    },

```

## 小结

1、`vue3` 或者 `vite` 环境的项目，推荐一些新的插件，等等，这些开源项目中也是这么做的

```json
{
  "recommendations": ["Vue.volar"]
}
```

2、有关这次 `vite` 上线，没有我想象的“可怕”，模块比较少的缘故，vite 整体上次比较顺利，但在开发时候的体验和 `webpack` 大不同，一切顺利

3、本篇说的，大致是我近 3 个月学习 vite 的路径，仍有很多内容还未用到，不过整体梳理了下，包括：

- `vite-learn` 核心仓库 持续记录 学习 vite 的心得
- `vite.config` 整理 vite 常见的配置
- `vite-starter` 项目中是怎么使用的

4、还有就是 `vite` 是偏工具性质的，重要的是理解 `模块化` 和 vite 的能力，和底层的架构 `rollup` + `esbuild`
