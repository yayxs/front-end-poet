---
title: JS的客户端存储
---

# Js 中的本地存储方案

- **首发** 20201029
- **仓库** [https://github.com/yayxs/frontend-thick-talk](https://github.com/yayxs/frontend-thick-talk)
- **线上阅读更丝滑** [https://fett.netlify.app/guides/books/js_advanced4_25.html](https://fett.netlify.app/guides/books/js_advanced4_25.html)

> 所谓客户端存储就是前端在本地存储数据，说白了就是本地存储，在浏览器存数据 ，在浏览器存数据，在浏览器存数据 ，也是面试 interview 常见的笔试或者面试题，直接开始

其实大致分为三类

1. cookie
2. 浏览器存储 Api 又称 Web Storage
3. IndexDB

|            | cookie                                                | sessionStorage               | LocalStorage                                       | IndexedDB |
| ---------- | ----------------------------------------------------- | ---------------------------- | -------------------------------------------------- | --------- |
| 存储大小   | 大小不能超过 4kb                                      |                              | 存储大小限制为 5MB+                                |           |
| 服务器通信 | 浏览器会使用 `Cookie` HTTP-header 通过网络发送 cookie | 不会随每个请求被发送到服务器 |                                                    |           |
| 生命周期   |                                                       |                              | 数据不会过期。它在浏览器重启甚至系统重启后仍然存在 |           |

<hr />

## 一、cookie

存储的是会话信息，为什么是会话信息

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9cb657f0572242659bba67b4b75fe16b~tplv-k3u1fbpfcp-zoom-1.image)

```javascript
console.log(document.cookie)
VM180:1 _ga=GA1.2.230961981.1582299221; gr_user_id=2b19e35b-61c1-4c7b-9d8a-8fa4931d5062; Hm_lvt_93bbd335a208870aa1f296bcd6842e5e=1595134136,1595646309,1595646491,1595646491; SLARDAR_WEB_ID=328bb014-aa4d-4289-8e53-bfefd69b90f8; MONITOR_WEB_ID=5dcc4651-518b-4563-8588-1b31b51cce5d; passport_csrf_token=a946b8ccf8b8468827903d94e298987e; _gid=GA1.2.1733432858.1603978283
```

不难发现`cookie` 的组成就是有图片中展示的 几种参数构成的![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abd5b6d7797e4850a41807197fbf1f4d~tplv-k3u1fbpfcp-zoom-1.image)

### 缺点

1. 特定域限制
2. 浏览器会限制
3. 不会占用太多磁盘空间
4. 总数大多有限制，超出的话删除之前的，或者随机删除
5. 大小限制 4096 字节
6. 数据不是保存在安全的环境中

## 二、sessionStorage

> Web Storage 第 2 版定义了两个对象
>
> - localStorage 永久存储
> - sessionStorage 跨回话存储

### 缺点

1. 数据存储到浏览器关闭
2. 等等

一般情况下我们是直接存储一个大的对象

```javascript
const bigObj = {
  name: "info",
  data: {
    list: [
      {
        id: 1,
        detail: {
          arr: [1, 32, 45],
        },
      },
    ],
  },
};
console.log(123);
sessionStorage.infoKey = bigObj;
console.log(456);
```

这时候会有问题，因为要求我们是 字符串，取而代之

```javascript
const bigObj = {
  name: "info",
  data: {
    list: [
      {
        id: 1,
        detail: {
          arr: [1, 32, 45],
        },
      },
    ],
  },
};
console.log(123);
sessionStorage.infoKey = JSON.stringify(bigObj); // 请注意，键和值都必须是字符串。
console.log(456);
```

## 三、localStorage

就说说与上者的差异

- 存活到手动清除
- 不会因浏览器窗口的关闭、标签页关闭或者浏览器重启丢失

相同点

- 大多数空间限制为 **5MB** 不是 `5RMB`

## 四、IndexDB

说实话没有使用过**可以理解为有点像数据库**

- 信息不能够跨域共享

## 五、工程化

在实际的项目工程中，我们可以封装一个简单 的本地存储小方法，这十分有必要

```javascript
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

### vuex-persistedstate

既然提到了数据的持久化存储就谈谈真实项目中结合`vuex`使用的场景吧

```javascript
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  plugins: [createPersistedState()],
  state: {
    num: 0,
    isLogin: false,
    list: [
      {
        name: "zhangsan",
        age: 12,
      },
      {
        name: "lisi",
        age: "17",
      },
      {
        name: "lisi",
        age: 20,
      },
    ],
    obj: {
      name: "subs",
    },
    res: null,
  },
  modules: {
    asyncModule,
  },
  getters,
  mutations: {
    numMuta(state) {
      // console.log(state);
      state.num++;
      // console.log(state);
    },
    toogleMuta(state, payload) {
      state.isLogin = payload.newFlag;
    },
    [CHANGE_NAME_MUTATION](state, payload) {
      console.log(payload);
      // 不建议这样搞
      // state.obj.name = payload.newName;
      state.obj = { ...state.obj, name: payload.newName };
    },
    changeRes(state, payload) {
      console.log(state);
      console.log(payload);
      state.res = { ...payload.data };
    },
  },
  actions: {
    fetchList({ commit }) {
      return new Promise((reso, rej) => {
        axios(`https://jsonplaceholder.typicode.com/todos/1`)
          .then((res) => {
            commit("changeRes", res);
            reso(res);
          })
          .catch((err) => {
            rej(err);
          });
      });
    },
  },
});
```

核心就是在插件的地方使用
![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ba5329e439847ca946ec51abd4aacb2~tplv-k3u1fbpfcp-zoom-1.image)

可以看到我们的本地存储就多了`vuex` 的数据，这样我们在刷新页面的时候，数据就不会丢失，也算是一种方案吧（tips:详细的 vuex 使用想必大家都 ok 了具体不细说了）

## 六、开放性

从 `存储大小` `生命周期` `优缺点` `服务器通信` 等维度谈谈前端的客户端（本地存储）存储吧

<span style="color:red">一段时间没有更新了，不要怕，不用扫码回复，没有公众号链接，没有扫码关注，，感兴趣的可以直接访问 github 好了，写文不易，有帮助最好，没帮助划走吧，有缘再见</span>
