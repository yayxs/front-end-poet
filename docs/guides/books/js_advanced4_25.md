---
title: 客户端存储
---

> 所谓客户端存储就是前端在本地存储数据，说白了就是本地存储，在浏览器存数据 ，在浏览器存数据，在浏览器存数据 ，也是面试 interview 常见的笔试或者面试题，直接开始

其实大致分为三类

1. cookie
2. 浏览器存储 Api 又称 Web Storage
3. IndexDB

<hr />

|            | cookie                                                | sessionStorage               | LocalStorage                                       | IndexedDB |
| ---------- | ----------------------------------------------------- | ---------------------------- | -------------------------------------------------- | --------- |
| 存储大小   | 大小不能超过 4kb                                      |                              | 存储大小限制为 5MB+                                |           |
| 服务器通信 | 浏览器会使用 `Cookie` HTTP-header 通过网络发送 cookie | 不会随每个请求被发送到服务器 |                                                    |           |
| 生命周期   |                                                       |                              | 数据不会过期。它在浏览器重启甚至系统重启后仍然存在 |           |

<hr />

## 一、cookie

存储的是会话信息，为什么是会话信息

![](https://raw.githubusercontent.com/yayxs/Pics/master/cookie.png)

```javascript
console.log(document.cookie)
VM180:1 _ga=GA1.2.230961981.1582299221; gr_user_id=2b19e35b-61c1-4c7b-9d8a-8fa4931d5062; Hm_lvt_93bbd335a208870aa1f296bcd6842e5e=1595134136,1595646309,1595646491,1595646491; SLARDAR_WEB_ID=328bb014-aa4d-4289-8e53-bfefd69b90f8; MONITOR_WEB_ID=5dcc4651-518b-4563-8588-1b31b51cce5d; passport_csrf_token=a946b8ccf8b8468827903d94e298987e; _gid=GA1.2.1733432858.1603978283
```

不难发现`cookie` 的组成就是有图片中展示的 几种参数构成的![](https://raw.githubusercontent.com/yayxs/Pics/master/cookie_info.png)

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

## 六、开放性

从 `存储大小` `生命周期` `优缺点` `服务器通信` 等维度谈谈前端的客户端（本地存储）存储吧
