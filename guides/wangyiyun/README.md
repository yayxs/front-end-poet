---
title: React16.13.1网抑云实战
---

---

# React16.13.1 网抑云实战 （第一周）| axios 封装、轮播图实现、alias 别名

> 源码地址（实时更新）[https://github.com/yayxs/NeteaseCloudMusic](https://github.com/yayxs/NeteaseCloudMusic)
>
> wiki 地址 [https://github.com/yayxs/NeteaseCloudMusic/tree/master/docs](https://github.com/yayxs/NeteaseCloudMusic/tree/master/docs)

::: tip
axios 封装、轮播图实现、alias 别名
:::

## 前言

### 项目背景

基于两点：（一）是笔者在企业中是使用`react` 开发，不过有的处理问题的方案还是比较老旧。举个例子：关于`redux` 还是使用原始的`switch` 一通写，比如使用`thunk`要处理 网络请求的几种状态 包括 **加载之前** **加载中** **记载异常**等等，这些都要处理，会有很多相似的看起来很尴尬的代码，但是又不好改企业项目的方案。所以打算**开发一个完整的企业级项目** 整合当下更优解决问题的方案，（二）只注重于`前端`的实现，外加有个非常完美的`接口`（这里指的的是开源的`网易云`的 Api，相必大家都知道）。所以选择`网抑云`音乐。

### 关于项目

此项目是一个`JS 版本`的（目前是从 JS 版本开始） 个人练手项目，整合当下`React` 项目中的最极实践，每周更新进度 ，旨在更好的走`react` 企业级项目开发流程。

分享`react`开发中的各个小点。望一起交流。代码会第一时间同步到文首的 仓库地址里(暂时没有放在码云)。

每周争取写一篇`进度分享` 。感兴趣的小伙纸 点个 `star` 是我更新的动力。

## 第一周成果展示

### 主要完成的部分

- 弹出`webpack` 配置，添加 `src`别名
- 配置`.vscode` 添加调试`json`配置
- 整理`Redux` 相关实践流程，跑通 `Redux` 流程
- `Api` 接口的`proxy`代理调试
- `axios` 的封装，以及`api`的配置
- `react-router-dom` 路由的初步化配置

### Preview

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6bf8800e9205405fa52490cd8e124c8a~tplv-k3u1fbpfcp-zoom-1.image)

## 基本介绍

首先要说的一点是**项目是使用[create react app ](https://create-react-app.dev/)** 来创建的 。然后通过 `npm run eject`弹出 `webpack` 的配置 ，删除单个构建依赖项

### 目录结构

```bash
|-- LICENSE
|-- README.md					// 描述文件
|-- build
|-- config
|   |-- webpack.config.js		// webpack 配置文件
|-- docs 						// 配套文档博文
|   `-- images
|-- examples
|   `-- proxy-middleware		// nestjs 项目  用于测试接口代理
|-- jsconfig.json
|-- package.json
|-- public
|   |-- favicon.ico
|   `-- index.html
|-- scripts
|-- src
|   |-- App.js					// App 主应用
|   |-- api						// api 接口
|   |-- assets					// 资源
|   |-- common					// 公用配置
|   |-- components				// 组件
|   |-- index.js
|   |-- layouts					// 布局
|   |-- pages					// 页面 views
|   |-- router					// react-router-dom 路由配置
|   |-- services				// axios 网络请求封装
|   |-- store					// redux 配置
|   |-- styles					// 样式文件
|   |-- utils					// 工具方法
|-- yarn.lock

```

### 依赖环境

#### npm 脚本

截止最新时间 `scripts` 的脚本

```json
 "scripts": {
    "analyze": "source-map-explorer 'build/static/js/*.js'",
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "clear": "rimraf node_modules &&  yarn add",
    "check": "npm install -g && npm-check-updates",
    "ncu": "ncu -u && npm i"
  },
```

#### package 包

点击下方的链接直接跳转官网，方便查看

- ["react": "^16.13.1"](https://reactjs.org/)
- ["react-router-dom": "^5.2.0"](https://reactrouter.com/web/guides/quick-start) (react 路由 V5 大版本)
- ["redux": "^4.0.5"](https://redux.js.org/)
- ["antd": "^4.6.1"](https://ant.design/index-cn)
- ["axios": "^0.20.0"](https://github.com/axios/axios)

- ["webpack": "4.44.1"](https://webpack.js.org/)

- 其他有待补充

```

"antd": "^4.6.1",
"axios": "^0.20.0",
"classnames": "^2.2.6",
"http-proxy-middleware": "^1.0.5",
"husky": "^4.2.5",
"immutable": "^4.0.0-rc.12",
"normalize.css": "^8.0.1",
"react-redux": "^7.2.1",
"react-router-config": "^5.1.1",
"redux": "^4.0.5",
"redux-immutable": "^4.0.0",
"styled-components": "^5.1.1",
"webpack": "4.44.1",
```

简单的说一下

- `antd` 用的是 V4 大版本 截止目前最新，因为和 V3 版本写法上有不同的地方
- `immutable` `redux-immutable` redux 数据流不可变的一种方案（并非最好）
- `redux` `react-redux` 全部都是最新包
- **`react`** 版本是官方最新

#### `Node` 等环境

- node v14.8.0

### 运行项目

#### clone 项目

```
https://github.com/yayxs/NeteaseCloudMusic.git
```

#### 安装依赖

```
npm run check && ncu // 检查依赖包版本  更新至最新并安装
```

#### 项目运行

```
npm run start
```

以上的`命令` 同时可以替换为 `yarn` 等，如果你喜欢的话

## 关于项目的样式

采用`antd` 组件库 + `styled-components` 结合 `sass` 以及 `normalize.css` 重置样式

```js
import styled from "styled-components";

export const WrapperContainer = styled.div`
  height: 285px;
  width: 100vw;
  background: url(${(props) => props.bgImage}) center center/6000px;

  .banner {
    height: 285px;
    display: flex;
    position: relative;
  }
`;
```

用上述的方式写样式，结合 `sass` 共同完成页面的样式部分

## axios 网络请求封装

```js
/*
 * @Author: yayxs
 * @Date: 2020-08-26 21:37:00
 * @LastEditTime: 2020-08-26 23:54:10
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\services\request.js
 * @
 */
// 引入axios
import axios from "axios";
// import * as commonConfig from "../common/config";
export default function request(options) {
  return new Promise((resolve, reject) => {
    // 1. 实例配置
    const insOptions = {
      baseURL: process.env.REACT_APP_BASE_URL,
      timeout: Number(process.env.REACT_APP_TIME_OUT),
    };
    console.log(insOptions);
    // 2. 创建axios 实例
    const axiosInstance = axios.create(insOptions);
    // 3. 请求拦截
    axiosInstance.interceptors.request.use(
      (config) => {
        // 3-1 页面添加loading组件
        // 3-2 token 鉴权
        // ……
        console.log(config);
        return config;
      },
      (err) => {
        return err;
      }
    );
    // 4. 响应拦截
    axiosInstance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        // 错误码处理
        if (err && err.response) {
        }
        return err;
      }
    );
    // 5 网络请求
    axiosInstance(options)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
```

使用的时候直接可以在`@/api` 文件夹下创建对应的 `js` 文件，然后配置对应的接口

```js
/*
 * @Author: yayxs
 * @Date: 2020-08-26 22:35:37
 * @LastEditTime: 2020-08-26 23:48:17
 * @LastEditors: yayxs
 * @Description: 推荐 API
 * @FilePath: \NeteaseCloudMusic\src\api\recommend.js
 * @
 */
import request from "@/services/request";

const fetchBannerListApi = () =>
  request({
    url: "/banner",
  });

export { fetchBannerListApi };
```

### 关于接口

请参考 **[网易云音乐 NodeJS 版 API](https://binaryify.github.io/NeteaseCloudMusicApi/#/)**

## 组件书写方式

以头部的`header组件为例子`

`@/components/header`

- index.jsx

  ```jsx
  import React, { memo } from "react";
  import classnames from "classnames";
  import { WarpperContainer, StyledLeft, StyledRight } from "./styled";
  import { NavLink } from "react-router-dom";
  import { headerNavConfig } from "../../common/config";
  const HeaderComp = memo(() => {
    return (
      <WarpperContainer>
        <div className="wrap_1100_center container">
          <StyledLeft>
            <a hidefocus="true" href="/#" className="logo sprite_topbar">
              网易云音乐
            </a>
            <ul>
              {headerNavConfig.map((item) => (
                <li key={item.title} className={classnames("setected_nav")}>
                  <NavLink to={item.path}>
                    {item.title}
                    <i className="sprite_topbar icon"></i>
                  </NavLink>
                </li>
              ))}
            </ul>
          </StyledLeft>
          <StyledRight></StyledRight>
        </div>
      </WarpperContainer>
    );
  });

  export default HeaderComp;
  ```

- styled.js

  ```js
  /*
   * @Author: yayxs
   * @Date: 2020-08-24 23:28:16
   * @LastEditTime: 2020-08-25 23:28:36
   * @LastEditors: yayxs
   * @Description:
   * @FilePath: \NeteaseCloudMusic\src\components\header\styled.js
   * @
   */
  import styled from "styled-components";

  export const WarpperContainer = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #242424;
    .container {
      display: flex;
    }
  `;

  export const StyledLeft = styled.div`
    display: flex;
    .logo {
      display: block;
      width: 176px;
      height: 69px;
      background-position: 0 0;
      text-indent: -9999px;
    }
    ul {
      width: 508px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        font-size: 14px;
        color: #ccc;
      }
    }
  `;
  export const StyledRight = styled.div``;
  ```

## redux 流程

**此项目的数据分为两种** 一种是组件内部的状态。这时候，我们采用 `react hooks` 中的 `useState hook` 来解决

```jsx
const [currIndex, setCurrIndex] = useState(0);
```

`axios` 网络请求的数据我们一律存取在 `redux`

### 整体的流程

```jsx
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
```

- store/index.js

```jsx
/*
 * @Author: yayxs
 * @Date: 2020-08-22 11:48:40
 * @LastEditTime: 2020-08-26 23:01:17
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\store\index.js
 * @
 */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
```

### 局部组件状态

关于局部的组件流程，我们分为几部分处理

#### actionTypes.js

```js
/*
 * @Author: yayxs
 * @Date: 2020-08-26 22:27:29
 * @LastEditTime: 2020-08-26 22:32:33
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\pages\foundMusic\childrenPages\recommend\store\actionTypes.js
 * @
 */
// 获取轮播图数据
export const FETCH_BANNER_LIST_SUCCESS = "FETCH_BANNER_LIST_SUCCESS";
export const FETCH_BANNERLIST_BEGIN = "FETCH_BANNERLIST_BEGIN";
export const FETCH_BANNERLIST_ERROR = "FETCH_BANNERLIST_ERROR";
```

#### actionCreators

```js
/*
 * @Author: yayxs
 * @Date: 2020-08-26 22:27:33
 * @LastEditTime: 2020-08-27 21:07:49
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\pages\foundMusic\childrenPages\recommend\store\actionCreators.js
 * @
 */
import { fetchBannerListApi } from "@/api/recommend.js";
import { FETCH_BANNER_LIST_SUCCESS } from "./actionTypes";

export const changeBannerLsitAction = (data) => ({
  type: FETCH_BANNER_LIST_SUCCESS,
  payload: { data },
});

export const getBannerListAsyncAction = () => (dispatch) => {
  fetchBannerListApi()
    .then((res) => {
      if (res.code === 200) {
        dispatch(changeBannerLsitAction(res.banners));
      }
    })
    .catch((err) => {});
};
```

#### reducer

```js
/*
 * @Author: yayxs
 * @Date: 2020-08-26 22:27:34
 * @LastEditTime: 2020-08-27 21:09:44
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\pages\foundMusic\childrenPages\recommend\store\reducer.js
 * @
 */
import { Map } from "immutable";
import * as actionTypes from "./actionTypes";

const initState = Map({
  bannersList: [],
});

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BANNER_LIST_SUCCESS:
      return state.set("bannersList", action.payload.data);

    default:
      return state;
  }
};
```

关于以上的`redux` 的流程，一方面 你可以关注本项目查看完整的代码 , 其次**[我有整理一篇 redux 流程的纵向分析实践（2020 年 8 月更新）](https://github.com/yayxs/state-management-compare/tree/master/docs)**

当然你也可以直接在 `juejin 查看` (如果遇到网络问题) [https://juejin.im/post/6844904128682917901](https://juejin.im/post/6844904128682917901)

## 路由懒加载

```jsx
const YYHeaderComp = lazy(() => import("./components/header/index"));
const YYFooterComp = lazy(() => import("./components/footer/index"));
```

## webpack 别名配置

此项目通过简单的修改`webpack`的配置来添加别名（alias）

```js
const resolveDir = (dir) => {
  let res = path.resolve(__dirname, dir);
  console.log(res);
  return res;
};
```

```js
   alias: {
        // webpack 配置别名
        '@': resolveDir('../src') ,// 这样配置后 @ 可以指向 src 目录
        'components': resolveDir("../src/components"),
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        'react-native': 'react-native-web',
        // Allows for better profiling with ReactDevTools
        ...(isEnvProductionProfile && {
          'react-dom$': 'react-dom/profiling',
          'scheduler/tracing': 'scheduler/tracing-profiling',
        }),
        ...(modules.webpackAliases || {}),
      },
```

## CRA 的配置

### proxy 代理的配置

在开发中代理 `API` 请求 ，通过`http-proxy-middleware` 然后在 **src** 目录下新建 `setupProxy.js` 文件。注意是`src`目录 并不是 项目的根目录

```js
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
```

### 测试代理

如果你想测试代理，可以启动 `examples/proxy-middleware` (https://github.com/yayxs/NeteaseCloudMusic/tree/master/examples/proxy-middleware) 这是一个 nest 项目，安装依赖，然后 `npm run start`

## 其他

### 编辑器的基本配置

写`React` 的项目可以使用`vscode` 插件 ，快捷的生成代码片段

![![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6bf8800e9205405fa52490cd8e124c8a~tplv-k3u1fbpfcp-zoom-1.image)](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1c074aa4a0448aea6757fc614d35ccf~tplv-k3u1fbpfcp-zoom-1.image)

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c30b8cf1c1794ad7b41cfaf03dd7d722~tplv-k3u1fbpfcp-zoom-1.image)

在项目目录的最顶端有个`.vscode` 并没有添加 到 忽略文件，如果你使用`vscode` 编辑器的话，会看到

- launch.json

  ```json
  {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Chrome",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:3001",
        "webRoot": "${workspaceFolder}/src",
        "sourceMapPathOverrides": {
          "webpack:///src/*": "${webRoot}/*"
        }
      }
    ]
  }
  ```

- settings.json

  ```json
  {
    "emmet.includeLanguages": {
      "javascript": "javascriptreact"
    }
  }
  ```

具体的含义及作用请自行 `搜索`

### 资源

#### 网易云官方精灵图

- https://s2.music.126.net/style/web2/img/frame/topbar.png 头部 logo 等
- https://s2.music.126.net/style/web2/img/index/download.png?3ef09214698d22ffbf4ba0a142a0b6d1 下载客户端

## 关联阅读

- [react | react-redux | react-thunk | state | 状态管理 | state-management-compare](https://github.com/yayxs/state-management-compare/tree/master/docs)

## Q&A

有什么问题还请 多多交流 [https://github.com/yayxs/NeteaseCloudMusic/issues](https://github.com/yayxs/NeteaseCloudMusic/issues)

也可以添加交流群

- 前端互鱼 1 群 713593204

---

这是 `网易云web版本项目的第一篇分享` 你们的小赞是我更新的动力，能看到这里的人啊，都是“闲人” ,老粉晓得咱们的玩法，评论区 赞数最多的朋友，下一篇直接置顶 【读读评论】。给个 `star` 吧 亲

<hr />

---

# React16.13.1 网抑云实战 （第二周）| 播放条组件、路由配置、Api 项目双部署

::: tip
播放条组件、路由配置、Api 项目双部署
:::

> 项目源码地址,第一时间更新 [https://github.com/yayxs/NeteaseCloudMusic](https://github.com/yayxs/NeteaseCloudMusic)
>
> wiki 地址以及 Api 接口说明 [https://github.com/yayxs/NeteaseCloudMusic/blob/master/docs/README.md](https://github.com/yayxs/NeteaseCloudMusic/blob/master/docs/README.md)

## 前情提要

### 读读评论

- [x] ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac85299fca4148ac83afa7515a65139c~tplv-k3u1fbpfcp-zoom-1.image)

  > 项目和其用到的 API 已经 部署上线，详细请看 wiki 文档，感谢评论

- [x] ![![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac85299fca4148ac83afa7515a65139c~tplv-k3u1fbpfcp-zoom-1.image)](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3797bf768034c46815aa268a2fc9277~tplv-k3u1fbpfcp-zoom-1.image)

- [x] ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4096987921749398d2ae47b94e7794e~tplv-k3u1fbpfcp-zoom-1.image)

> 感谢用户 [ @OldMan23837 ](https://juejin.im/user/2119514148314382)

### 系列文章

- [React16.13.1 网抑云实战 （第一周）| axios 封装、轮播图实现、alias 别名](https://juejin.im/post/6866940379866857480#heading-36)

## 第二周成果展示

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a0f9284a5024944a025bf37ef71c713~tplv-k3u1fbpfcp-zoom-1.image)

### 完成部分

- 首先封装几个公用的组件，主要工作量在底部的**播放控制条**
- 跑通`react-router-dom` `react-router-config` 的配置
- **Api** 接口部署上线 ，项目部署上线

### 底部核心播放 bar

底部最核心的功能就是对音乐的播放，还有就是进度条，对音乐的播放，利用 `HTML5` 新增的标签 ,动态的改变 `SRC` 属性

```jsx
audioRef.current.src = getAudioSrc("442869203");
// 开始播放
setNowIsPaly(false);
audioRef.current
  .play()
  .then((res) => {
    setNowIsPaly(true);
  })
  .catch((err) => {
    setNowIsPaly(false);
  });
```

### 红色滑动条

利用`antd` 的 [Slider 滑动输入条](https://ant.design/components/slider-cn/) ，修改其样式

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f882d6d2c9df40aaa57195dddf5facbf~tplv-k3u1fbpfcp-zoom-1.image)

```scss
.pbar {
  width: 493px;
  .ant-slider {
    padding: 0;
    margin: 0;
    width: 493px;
    height: 9px;
    .ant-slider-rail {
      width: 493px;
      border-radius: 2px;
      height: 9px;
      background-color: #535353;
    }
    .ant-slider-track {
      height: 9px;
      background-color: #c70c0c;
    }
    .ant-slider-step {
      border-radius: 2px;
      height: 9px;
    }
    .ant-slider-handle {
      width: 22px;
      height: 24px;
      margin-top: -7px;
      background: url("../../../assets//images/sprite_icon.png") 0 -250px;
      border: none;
    }
  }
  .time {
    position: absolute;
    top: 21px;
    right: 215px;
    color: #797979;
    span {
      color: #a1a1a1;
    }
    text-shadow: 0 1px 0 #121212;
  }
}
```

**注意上文我们引入背景图片的方式** 通过 `background: url("../../../assets/images/sprite_icon.png") 0 -250px;`

这是我们使用 `sass` 但是使用 `styled-components` 就不能这样直接引入了，否则会找不到 ，可通过

```
import arrowImg from "../../../../../../assets/images/arrow_banner_sprite.png";
```

然后使用的时候

```
background: url(${arrowImg});
```

还有一点，关于 鼠标滑过的高亮效果其实是精灵图的 位置发生了变化

```scss
&:hover {
  background-position: 0 -360px;
}
```

## 路由配置

路由配置方案，采用 `react-router-config` 这也是 官方推荐的静态路由配置方案 ，具体的路由表 见项目 `@/router/routesConfig.js`

从页面来分析的话

```
// 发现音乐 : 推荐 排行榜 歌单 主播电台 歌手 新碟上架
// 我的音乐 :
// 朋友 :
// 商城 :
// 音乐人
// 下载客户端
```

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/195b0b535e564f86beb0d31f85929b2e~tplv-k3u1fbpfcp-zoom-1.image)

```js
     {
        component: YYAlbumPage,
        path: "/discover/album",
      },
    ],
  },
  // 我的音乐
  {
    component: YYMyPage,
    path: "/my",
  },
  // 朋友
  {
    component: YYFriendPage,
    path: "/friend",
  },
  // 下载客户端
  {
    component: YYDownloadPage,
    path: "/download",
  },
```

## 项目部署上线

### Api 接口

关于项目中所用到的网易云的接口 **已经完成部署** 短时间不会下线 ，你也可以直接 使用 基本的地址是 `http://101.201.148.180:3000` (项目部署在 3000 端口)

请求示例参考

![![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/195b0b535e564f86beb0d31f85929b2e~tplv-k3u1fbpfcp-zoom-1.image)](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09de5eb66ee94b9dbf28c652ce2ce60b~tplv-k3u1fbpfcp-zoom-1.image)

### 项目的部署

项目目前通过手动部署的方式，已经部署在阿里云服务，有关 `nginx` 相关的配置以及一些常用的配置 可以看 [Nginx | 前端也应晓得常用 Nginx 命令及配置](https://juejin.im/post/6844904192146931719)

不过打包的时候如果遇到一些问题，比如 webpack 的一些配置问题。可能需要注释掉

```js
// config/webpack.config.js

// importWorkboxFrom: "cdn",
```

具体见文末推荐阅读

## 关联阅读

- [https://developers.google.com/web/tools/workbox/guides/migrations/migrate-from-v4](https://developers.google.com/web/tools/workbox/guides/migrations/migrate-from-v4)

## 最后

个人项目，下班时间写，更新慢见谅。正如上文所说，已经部署上线，请关注 [http://101.201.148.180/](http://101.201.148.180/#/discover/recommend)

- 感谢评论关注 `star` 的铁汁儿，期待在下一次的读读评论见到你
- 文档中的外链比较多，见谅，因为是之前简单写过，就不再写一遍呢，在写就是深入了 over

## 彩蛋

### 精灵图篇

- [https://s2.music.126.net/style/web2/img/frame/playbar.png?4b285455950eeb8c77bec37cb2a2829c](https://s2.music.126.net/style/web2/img/frame/playbar.png?4b285455950eeb8c77bec37cb2a2829c)
- [底部播放 bar](https://s2.music.126.net/style/web2/img/frame/statbar.png?fe9bf6f2a8cee166bf1b2ea588744650)
- [公共的 title](https://s2.music.126.net/style/web2/img/index/index.png?4e57335302280b79024e0c6444d40fc2)
- [cover](https://s2.music.126.net/style/web2/img/coverall.png?8e9cf6b243b0ed197db8847d8905d064)

### 插件篇

上次忘了说了，如果使用 `styled-components` 这个方案处理样式的话，需要装个插件最好了

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8740c69f6c549bc839d4ae9b3c5fe7d~tplv-k3u1fbpfcp-zoom-1.image)
