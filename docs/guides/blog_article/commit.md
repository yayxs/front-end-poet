---
title: 美好的一天从提交一条规范的commit结束
---

# 美好的一天从提交一条规范的 commit 结束

## 背景

### 基于个人

首先自己习惯把自己的点滴分享到“同性交友网站上” 谈不上社区贡献，一方面是记录学习，最重要的一点是将来`退休时候` 还可以点点原来我`20某某` 年写的代码那个“简陋” 接着自我嘲讽一番。由于`仓 库repositories` 也有正有几个高频的项目正在维护 :smiley:，早期 `commit` 每次都是乱七八糟，随便贴一条。你是否也有同样的问题？每一次`commit` 都像是回答你女朋友的问题，不知如何措辞。随便贴一条

![](https://user-gold-cdn.xitu.io/2020/6/20/172cfe5b8d0013c6?w=862&h=105&f=png&s=6807)

> 那你倒是说句话啊，doc 哪不行

显然这种信息的参考价值不大，自己的项目还好，勉强知道当时发抽了。

### 基于企业团队

在实际开发场景中，一个成熟的团队是有一种不言而喻的默契。甚至连`commit` 信息都能重复。

- 规范化
- 一体化
- 简约化
- 性感化

团队协作是如此的美妙。

**BUT** 真实场景是这样的吗?甚至有的 `连 node_modules` 都上传上去了。（我是在沸点看到的有孩子这样吐槽）。`commit` 信息更是写的乱起八遭。

那会有什么问题？

在企业开发的过程中，尤其是

- 分支较多
- 项目定制型需求频繁
- cherry-pick 需求

那每当想 `cherry-pick` 一小块需求的时候，甚至不知道是哪个`commit` :angry:

![](https://user-gold-cdn.xitu.io/2020/6/22/172d971af3f7b283?w=255&h=255&f=jpeg&s=7984)

### 小结

正是由于这样的背景以及场景

- 自己新建的仓库呢，又希望`工整易读`
- 企业项目，又希望能够快速定位每次`commit` ，（主要是写日报、周报的时候好回忆今天干了啥，**我真的不是在摸鱼**）

那么请接着往下看，感觉还行给个赞吧，

> 原文仓库 **【reading-writing】 [记录所读所写](https://github.com/yayxs/reading-writing) **
>
> 原文链接 :point_right: [第一时间更新 ](https://github.com/yayxs/reading-writing/issues/12)

## 关键词

老规矩，本篇分享还是关键词部分，为了`SEO`，希望更多的有缘人能够看到这篇文章

> commmit commitizen husky commitlint cz-conventional-changelog

- git commit
- 规范化提交
- commitizen
- husky
- commitlint
- cz-conventional-changelog
- 前端工程化

## 看一看

我们先来看一看一些优秀的开源项目，他们的`commit` 日志

- [vue-next](https://github.com/vuejs/vue-next)
- ![](https://user-gold-cdn.xitu.io/2020/6/20/172cff8051a8968d?w=1104&h=708&f=png&s=80914)

- [material-ui](https://github.com/mui-org/material-ui)

![](https://user-gold-cdn.xitu.io/2020/6/20/172cff9e241ec3f8?w=1042&h=616&f=png&s=75132)

好了，够了，那么咱们也许可能没有这样完善的项目架构，但是这种规范还是值得学习的。那么这么才能够规范化我们的代码呢，往下看

## 实操

### 第一步

```sh
npm install -g commitizen
```

![](https://user-gold-cdn.xitu.io/2020/6/21/172d4f413405fd81?w=1539&h=113&f=png&s=21055)

### 第二步

- 首先全局安装 `cz-conventional-changelog`

```sh
npm install -g cz-conventional-changelog
```

- 然后在项目里安装

```
commitizen init cz-conventional-changelog --save --save-exact
```

![](https://user-gold-cdn.xitu.io/2020/6/21/172d4f46b3b9a6fe?w=1610&h=335&f=png&s=72011)

接着你可以看下你项目的`package.json` ,会多出一部分配置

```json
"devDependencies": {
    "cz-conventional-changelog": "^3.2.0"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```

之后需要 `git commit` 的操作全部换成 `git cz`

![](https://user-gold-cdn.xitu.io/2020/6/21/172d4f4f3ae56313?w=1070&h=282&f=png&s=98134)

### 第三步

项目内安装 `commitlint`

```sh
yarn add @commitlint/config-conventional @commitlint/cli
```

之后你的 `package.json` 又会多出一部分的配置

```json
  "dependencies": {
    "@commitlint/cli": "^8.3.5",
    "@commitlint/config-conventional": "^8.3.4"
  }
```

接着在`package.json` 统计目录新建 `commitlint.config.js` 文件 然后写入

```javascript
module.exports = { extends: ["@commitlint/config-conventional"] };
```

### 第四步

项目中安装`husky`

```sh
yarn add husky
```

接着配置 `husky`

```json
"dependencies": {
    "@commitlint/cli": "^8.3.5",
    "@commitlint/config-conventional": "^8.3.4",
    "husky": "^4.2.5"
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -e $GIT_PARAMS"
    }
  }
```

当我们去以不合法的提交信息进行提交代码时，会进行检查

![](https://user-gold-cdn.xitu.io/2020/6/21/172d4f588ada0545?w=1079&h=291&f=png&s=79848)

### 总结

整个提交的流程,大概就是这样的，以下我贴出步骤，至于具体的像以下内容代表的含义，你可以直接，在某搜索引擎，然后，输入上文提到的关键词，应该会有词条告诉你都是啥意思

```
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式方面的优化
refactor：重构
test：测试
chore：构建过程或辅助工具的变动
```

```powershell
$ git cz
cz-cli@4.1.2, cz-conventional-changelog@3.2.0

? Select the type of change that you're committing: docs:     Documentation only changes
? What is the scope of this change (e.g. component or file name): (press enter to skip) format docs ? Write a short, imperative tense description of the change (max 53 chars):
 (11) format docs
? Provide a longer description of the change: (press enter to skip)
 n
? Are there any breaking changes? No
? Does this change affect any open issues? No
\husky > commit-msg (node v12.16.1)
[master 4baa2ce] docs(format docs): format docs
 1 file changed, 16 deletions(-)
 rewrite flutter_state_provider/README.md (100%)
```

## 写在最后

欢迎你，关注微信公众号 《前端厚说》 有几点

- 一：你可能打开 github 有点慢，甚至进不去，这样你可以在`微信公众号上找到我`

![](https://user-gold-cdn.xitu.io/2020/6/21/172d4ecae27c8d64?w=1500&h=1500&f=jpeg&s=766248)

- 二：一块学习呗，不止前端

**同时有什么疑问可以添加咱们的《前端互鱼 QQ 群》** 713593204

![](https://user-gold-cdn.xitu.io/2020/6/21/172d4f373417072c?w=238&h=250&f=png&s=6817)

---

End but thank you
