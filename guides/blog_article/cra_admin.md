---
title: Creat React App 从 0 搭建基于 antd mock Redux Toolkit 的 admin 中后台解决方案 (一)
---

# Creat React App 从 0 搭建基于 antd mock Redux Toolkit 的 admin 中后台解决方案 (一)

> **react-cra-amin** 源码实时更新至 [https://github.com/yayxs/react-cra-admin](https://github.com/yayxs/react-cra-admin)

> 包含系列教程说明文档。

## 前言

### 背景

从目前实际的背景来看，关于项目中的 `中后台管理系统` 也就是咱们平常所谓的 `admin` 项目。不得不提的就是`花裤衩偶像` 和`唐金洲偶像`。等等。单从 `react` 技术栈来看的话呢，想必我们第一想到的就是 `antd` 系列 ，包括

- UI 框架 antd
- 数据流 dva
- 实践框架 antd-pro
- 集成方案 UmiJS

最近一段时间研究了下它们的源码，有一种`规范`在。值得深入探讨和学习。不过接下来的文章全部是`JS` 部分。为什么强调这一点呢。从目前的趋势来看，写`React` 差不多已经都走向了 `TypeScrit` **小 tips** : 学习 `antd` 系列最好也是学习 `TS` 版本的。

### 对比`Vue`

我们重点讨论的是 `React` ，不得不提的是`vue` 关于 `admin` 的解决方案，社区里有很多成熟优雅大方的，包括上文提到的

- [PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
- [vueComponent/ant-design-vue](https://github.com/vueComponent/ant-design-vue)

但是从`create raect app` 的角度出发，并且弹出`webpack` 的配置（注意官方是不建议直接弹出的）修改`webpack` 的配置也是有其他的方案，请自行搜索。采用的更多的方案是更成熟的一套 `umijs`。关于如何`从 0 基础搭建一套简单的后台管理方案`，我们接下来就来谈谈。

> 下文提到的`CRA` 即代表 `create react app`

## 关于 `Mock` 数据

`Mock` 请求数据一直以来是前端项目常见的操作，运行此项目之前最好跑一下 `mock` 脚本。方便我们接下来的代理请求，它大致是这样的。在项目的**根目录** 新建一个 `mockServer.js`,核心代码

```js
app.use("/api/login/account", function(req, res) {
  console.log(req.body);
  const { password, userName, type } = req.body;
  if (password === "admin" && userName === "admin") {
    res.send({
      status: "ok",
      type,
      currentAuthority: "admin",
    });
    return;
  }

  if (password === "user" && userName === "user") {
    res.send({
      status: "ok",
      type,
      currentAuthority: "user",
    });
    return;
  }

  if (type === "mobile") {
    res.send({
      status: "ok",
      type,
      currentAuthority: "admin",
    });
    return;
  }

  res.send({
    status: "error",
    // type,
    currentAuthority: "guest",
  });
});
```

以上的部分也是`CV` 的 `antd-pro` 的中`user` 的 `mock` 部分。我们的`API`跑在 `8080` 端口，默认情况下我们的项目是起在 `3000` 端口，这时候

```js
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
};
```

访问 `Api` 开头代理到 8080 就好。第一章节，没有引入 `RKT`(Redux Toolkit) 那我们就简单的测试，在登录页面的时候,我们通过`axios` 进行请求

![login](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36e3da777aae4f6aa3310615259728bf~tplv-k3u1fbpfcp-zoom-1.image)

```js
axios
  .post(`/api/login/account`, {
    userName: "admin",
    password: "admin",
    type: "hah",
  })
  .then((res) => {
    console.log(res);

    comLocalStorage.set("token", `123`);
    history.replace(from);
  })
  .catch((err) => {
    console.log(err);
  });
```

登录成功之后进行跳转。

## 公共方法

由于本地存储十分重要，这也是项目中存储数据的一种方式，固简单的封装了一下，当然后续可以优化为自定义 `Hook` ，这里我就先封装为类的静态方法好了

> 完整的代码 见 `src/utils/comLocalStorage.js`

```js
/*
 * @Author: yayxs
 * @Date:
 * @Description: 封装本地存储
 */
const localStore = window.localStorage;
class ComLocalStorage {
  // 设置数据 如果value是obj 调用JSON.stringify转换为字符串
  static set(key, value) {
    if (!localStore) {
      return;
    }
    let v = value;
    try {
      if (typeof value === "object") {
        v = JSON.stringify(v);
      }
      localStore.setItem(key, v);
    } catch (error) {
      // error
    }
  }
  // 直接读取
  static get(key) {
    if (!localStore) {
      return;
    }
    return localStore.getItem(key);
  }
  // 读取转Obj
  static get2Json(key) {
    if (!localStore) {
      return;
    }
    const data = localStore.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        // todo error
      }
    }

    return null;
  }
  // 直接移除
  static remove(key) {
    if (!localStore) {
      return;
    }
    try {
      localStore.removeItem(key);
    } catch (error) {
      // todo error
    }
  }
}
export default ComLocalStorage;
```

## 路由鉴权

关于路由相关的配置以及`API` 最好的方式是查阅官方文档，当然了你也可以看 [https://github.com/yayxs/react-cra-admin/tree/master/docs/ReactRouterDoc](https://github.com/yayxs/react-cra-admin/tree/master/docs/ReactRouterDoc) 会一直整理更新，目前才刚刚开始。所以你就不要看了暂时

不过值的一提的我们获取动态参数的是要，要通过 `useParams`

类似于我们在配置路由表的时候，

```js
 {
    path: "/admin/lists/edit/:id?",
    component: Edit,
    isShow: false
  },
```

获取的时候要通过 `useParams` ,通过这种方式是获取不到滴 `props.match.params.id`。好了我们开始重点分析，路由这块在没登录的情况下直接跳转到登录页

### 命中 index.js

我们知道 `react` 一上来就着急忙慌的找 `index.js`,至于为什么，`内定`。直接渲染跟页面

```jsx
ReactDOM.render(<RootPage />, document.getElementById("root"));
```

### 命中 RootPage

首先要说几点

- react 的路由出口 要用 `<Router>` 组件包裹着，我们暂且这样称之
- 当访问 `/` 直接重定向 <Redirect to="/admin/dashboard" push />
- 但是 当所有的路径 `/admin` 开头我们真正访问的其实是 `<App />` 组件，这也是 `basicLayout` 视图渲染的出口位置
- 当是一般的路由 比如 login 或者 404 这些页面是裸的，不带外边的框（绿色部分），就直接渲染就好

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/182d81133a1d4e82926c738831cb8909~tplv-k3u1fbpfcp-zoom-1.image)

```jsx
<Router>
  <Switch>
    {/* 当访问根据经定位到dashboard*/}
    <Route
      path="/"
      exact
      render={() => <Redirect to="/admin/dashboard" push />}
    ></Route>
    {/* 访问/admin  渲染APP 是需要登录才能访问*/}
    <Route path="/admin" render={(props) => <App {...props} />}></Route>
    {routesConfig["other"].map((item) => (
      <Route
        key={item.path}
        path={item.path}
        component={item.component}
      ></Route>
    ))}
    {/* 访问跟路径直接重定向到admin */}
    {/* <Redirect to="/admin" from="/" /> */}
    {/* 404 页面 */}
    <Redirect to="/404" />
  </Switch>
</Router>
```

### 命中 `<App />`

如果登录就直接渲染视图，不然就重定向到 登录页

```js
<DocumentTitle title={title}>
  {isLogined() ? (
    <>
      <BaseLayout>
        <RenderRoutes />
      </BaseLayout>
    </>
  ) : (
    <Redirect to="/login" />
  )}
</DocumentTitle>
```

### 命中`<RenderRoutes />`

```jsx
<Switch>
  {routesConfig["menus"].map((route) => {
    const renderComp = (route) => {
      return (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          render={(props) => <route.component {...props} />}
        ></Route>
      );
    };

    return route.component
      ? renderComp(route)
      : route.subs.map((r) => renderComp(r));
  })}

  <Redirect to={routesConfig["menus"][0].path} from="/admin" />
  {/* 都未命中 */}
  <Redirect to="/404" />
</Switch>
```

## LayOut 布局

这种基本的布局，类似于一个架子，我们知道一般的后台管理系统都是有

- 404
- login
- 还有就是有头部、侧边栏、和主要内容区域的 admin 主体

所以我们就需要若干个布局，比如带侧边栏以及顶部的 `basicLayOut` 以及 `LoginLayOut` 我们也是这样处理的。

侧边栏是直接由我们事先配置好的路由表动态循环生成

```js
{
  routesConfig["menus"].map((item) => {
    return (
      <SubMenu
        key={item.path}
        title={
          <span>
            <MailOutlined />
            <span>{item.title}</span>
          </span>
        }
      >
        {item.subs &&
          item.subs.map((sub) => {
            return (
              <Menu.Item onClick={(p) => handleClickMenuItem(p)} key={sub.path}>
                {sub.title}
              </Menu.Item>
            );
          })}
      </SubMenu>
    );
  });
}
```

没错，细心的朋友可能发现了，我们的路由表是个 `MAP` 这个看你而定

## 组件封装

由于每个页面都需要定位当前的位置，所以暂且封装了面包屑导航，完整的代码请参阅 `src/components/breadcrumb/index`

```jsx
<Breadcrumb style={{ margin: "12px 0" }}>
  <Breadcrumb.Item>
    <Link to={"/admin/dashboard"}></Link>
  </Breadcrumb.Item>
  {FirstComp}
  {SecondComp}
</Breadcrumb>
```

## 富文本编辑器

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7c4fc8f72a1425aa9e0367253253704~tplv-k3u1fbpfcp-zoom-1.image)

### form 表单的数据回传

```js
useEffect(() => {
  if (form) {
    form.resetFields();
    if (addOrEdit === "编辑") {
      if (curr) {
        let par = {
          content: BraftEditor.createEditorState(curr.content),
        };
        if (curr.timerTask) {
          par["timerTask"] = moment(curr.timerTask);
        }
        form.setFieldsValue({
          ...curr,
          ...par,
        });
      }
    }
  }
}, [addOrEdit, curr, form, location]);
```

我们要把内容处理一下 `BraftEditor.createEditorState(curr.content)`

### form-item 的异步验证

这里要注意我们采用 `async` 然后可以在其中异步请求接口

```jsx
// 校验标题
const validateTittleRule = ({ getFieldValue }) => ({
  async validator(_, value) {
    if (value) {
      if (value.length >= 3 && value.length < 50) {
      } else {
        return Promise.reject("长度在xx到xx个字符");
      }
    }
    return Promise.reject();

    // end
  },
});
```

## 数据流管理

截止目前，项目中没有涉及`redux`相关的配置以及流程，持续关注，后续会跟进 `Redux Toolkit` [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/) 的配置流程，包括异步操作流，这样我们就不用配置繁琐的 `redux-thunk` `redux-saga`
默认集成调试工具，感兴趣的可以看看官网，这也是官网教程的第一部分，
虽然说有 `dva` `mobx`等等。假如项目中用最原始的`redux`方案，那么把这个工具搞来绝对是不错的选择

## 部署上线

暂时没有部署，有很多种方案，基本每个框架都会告诉我们怎么部署，这不是重点，还请 clone 下项目，然后本地运行，看效果，

有什么问题请 [issues](https://github.com/yayxs/react-cra-admin/issues) 留言，或者添加 QQ 交流群 713593204
