## Node | 自我爬虫掘金专栏文章

## 需求概述

由于后续会搭建一个 `全栈个人网站`，目前暂定放一些`技术文档` `全民K歌资源` `B站制作的视频`，也打算把`博客`集成在网站中。所以本篇就来分享一下`node爬虫`。
整体这个网站分为三个部分

- 音乐 ：第三方平台自己没事录的歌
- 视频 ：第三方平台剪辑的视频
- 文章 ：平常没事的技术文档

这篇就打算先`爬虫一些数据`，暂且放在本地的数据库里

## 写在前面

- 转载请标注来源（请尊重原创及想法思路）
- 本篇的 demo 案例仅作为演示案例，练习案例，禁止商用
- 如有问题致邮：`youngwanlia@gmail.com`

## 前期准备

俗话说，`工欲善其事，必先利其器`，那么前期准备无非便是

- 参阅文档
- 环境工具

### 必阅文档

- [Node.js v12.16.0 文档](http://nodejs.cn/api/)

  关于`node`这份文档，咱们直接读中文文档也行，我觉得

- [jQuery 一个中文文档，在线可以查看一些 jQuery 的 api](https://www.jquery123.com/)

至于爬个虫为什么还需要`jQuery` 呢，请接着阅读

### 环境准备

- node && nodemon

```sh
npm install -g nodemon
```

![20200220184917.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200220184917.png)

- axios

```sh
yarn add  axios
```

## 需求分析

获取专栏的列表，刷新列表页分析接口的请求
![20200220204021.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200220204021.png)
爬取相关的数据，然后存入`数据库表里`

经过我们对接口的分析，得出:获得数据专栏的`api`便是这个

```js
https://timeline-merger-ms.juejin.im/v1/get_entry_by_self?src=web&uid=5cf00b7c6fb9a07eba2c226f&device_id=1580692913721&token=eyJhY2Nlc3NfdG9rZW4iOiJqa3FzYTJaUzB3cTY3VVBoIiwicmVmcmVzaF90b2tlbiI6ImJrcG9LMnAyaUlSUFRvSFUiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D&targetUid=5cf00b7c6fb9a07eba2c226f&type=post&limit=20&order=createdAt
```

发现可以直接`浏览器`地址栏查询，目前来看的话只有**14**条，因为我才刚刚写`14`条
![20200220204554.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200220204554.png)

那我们就在 node 环境下跑一下这个接口

```js
// 异步获取数据
async function getEntryBySelf() {
  let reqUrl = `https://timeline-merger-ms.juejin.im/v1/get_entry_by_self?src=web&uid=5cf00b7c6fb9a07eba2c226f&device_id=1580692913721&token=eyJhY2Nlc3NfdG9rZW4iOiJqa3FzYTJaUzB3cTY3VVBoIiwicmVmcmVzaF90b2tlbiI6ImJrcG9LMnAyaUlSUFRvSFUiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D&targetUid=5cf00b7c6fb9a07eba2c226f&type=post&limit=20&order=createdAt`;
  const res = await axios.get(reqUrl);
  console.log(res.data);
}

getEntryBySelf();
```

![20200220210104.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200220210104.png)
全局安装`nodemon`

### 模块 module

- exports
- module.exports

`exports`在模块执行之前赋值给`module.exports` ，实际上导出的是`module.rxports`
