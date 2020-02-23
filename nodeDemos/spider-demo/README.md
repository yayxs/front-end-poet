## Node | 自我爬虫掘金专栏文章

![20200223192736.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200223192736.png)

## 写在前面

- 转载请标注来源（请尊重原创及想法思路）
- 本篇的 demo 案例仅作为演示案例，练习案例，禁止商用
- 如有问题致邮：`youngwanlia@gmail.com`

## 需求概述

由于后续会搭建一个 `全栈个人网站`，目前暂定放一些`技术文档` `全民K歌资源` `B站制作的视频`，也打算把`博客`集成在网站中。所以本篇就来分享一下`node爬虫`。
整体这个网站分为三个部分

- 音乐 ：第三方平台自己没事录的歌
- 视频 ：第三方平台剪辑的视频
- 文章 ：平常没事的技术文档

这篇就打算先`爬虫一些数据`，暂且放在本地的数据库里

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

- mysql

```sh
yarn add mysql
```

- cheerio

```sh
yarn add cheerio
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
async function getEntryBySelf() {
  let reqUrl = `https://timeline-merger-ms.juejin.im/v1/get_entry_by_self?src=web&uid=5cf00b7c6fb9a07eba2c226f&device_id=1580692913721&token=eyJhY2Nlc3NfdG9rZW4iOiJqa3FzYTJaUzB3cTY3VVBoIiwicmVmcmVzaF90b2tlbiI6ImJrcG9LMnAyaUlSUFRvSFUiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D&targetUid=5cf00b7c6fb9a07eba2c226f&type=post&limit=20&order=createdAt`;
  const res = await axios.get(reqUrl);
  const {
    s,
    m,
    d: { total, entrylist }
  } = res.data;
  if (s === 1 && m === "ok") {
    // 请求成功
    return entrylist;
  } else {
    return `reqErr`;
  }
}
```

![20200220210104.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200220210104.png)

## MySql 结合 Node

我们通过使用`node`环境然后操作数据库，在这篇文章就简单的说一下数据相关的操作，后续会持续更新，希望能够关注笔者`github`

### 数据库连接

```js
// 配置对象
const config = {
  host: "localhost", // 主机地址
  user: "root", // 数据库用户
  password: "123456", // 密码
  database: "blog" // 数据库
};
// 建立连接
let con = mysql.createConnection(config);
con.connect(err => {
  if (err) {
    console.log(`数据库建立失败`);
  }
});
```

### 建表-专栏

在`blog` 数据库新建`zhuan_lan`表用来存放掘金专栏的文章，并初始化一些字段，这里与爬取的数据字段名大致一致

![20200222190951.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200222190951.png)

### 插入数据库

```js
// 数据插入数据库
// let testSql = "INSERT INTO zhuan_lan (collectionCount,commentsCount,originalUrl,createdAt,screenshot,content,titlte,category,viewsCount,summaryInfo) VALUES (21,2121,'212','212','212','212','212','221','2121','212')";
let iblogSql =
  "INSERT INTO zhuan_lan (collectionCount,commentsCount,originalUrl,createdAt,screenshot,content,titlte,category,viewsCount,summaryInfo) VALUES (?,?,?,?,?,?,?,?,?,?)";
// 插入数据
con.query(iblogSql, arrData, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`插入成功`);
  }
});
```

![20200222195953.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200222195953.png)

### 插入数据库

![20200222200348.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200222200348.png)

## 本章小结

倘若对`爬虫`感兴趣的话，可以多多交流。本篇所有完整代码在[样小样童鞋的`day-up`仓库](https://github.com/yayxs/day-up/tree/master/nodeDemos/spider-demo)

```sh
day-up/nodeDemos/spider-demo/
```

**提问**
有个问题请教一下：把日常的小案例放在一个仓库里，是不是对**你**点赞有影响
