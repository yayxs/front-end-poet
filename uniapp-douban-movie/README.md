# Vue 生态 - 多端解决方案 uni-app

> 个人练手项目《某瓣电影 APP》

## 列表页上拉加载更多，下拉刷新效果
>轻松实现上拉加载、下拉刷新、返回顶部

**实现效果**

![demo.gif](https://raw.githubusercontent.com/yayxs/Pics/master/img/demo.gif)
### 前期准备

#### 后端接口

在这个小案例中，我们采用开源的`jsonplaceholder`，这也是我们前端常用的测试接口。**为了达到小 demo 的效果暂且使用这个，后续替换为 douban-api**

- [JSONPlaceholder 直接在浏览器就可以](https://jsonplaceholder.typicode.com/)

甚至我们都不用`mock`接口，同时最重要的一点是支持`分页`查询，查询的参数是

- offset
- limit

写过后台的应该对这两个`字段`不陌生，`offset` 是**偏移量**的意思，这个在`nest`官网也有提到

```bash
{
    "page":1,
    "limit":10
}
```

在请求的时候类似是这种，传的页面的信息，不过我们输入的参数

```bash
{
    "_offset":xx, // 其中xx 代表的是第几页
    "_limit":xx  // 其中xx 代表的是每页多少条数据
}
```

下面我们在浏览器地址栏输入（或者使用 postman|postwoman|Vscode 的插件都可）
`https://jsonplaceholder.typicode.com/posts`

返回的结果是：

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
]
……
```

那我们在做上拉加载更多最重要的是，页码 发生变化，每次

```js
_offset++;
```

#### uni-app 网络请求 API

- [uni-app 官网传送门](https://uniapp.dcloud.io/)

在官网上明确指出我们可以通过`uni.request(OBJECT)`,其中传入一个配置对象,值得一提的是默认是`GET`请求

```js
uni.request({
  url: "https://jsonplaceholder.typicode.com/posts", //请求的地址

  success: res => {
    console.log(res);
  }
});
```

#### Item 项

我们知道在前端的开发中，根据后台的`list`循环生成`item`项是十分常见的业务需求，那么随之而来的就是`上拉加载更多`和`下拉刷新`。那么在这个小的案例中，咱们采用`卡片`布局。推荐给大家官方在维护的`hello-uniapp`

- [github 传送](https://github.com/dcloudio/hello-uniapp)，其中维护了有很多常见的效果。这里我们尽量`clone`最新的代码，因为它还是更新很频繁的，主要是为了解决一些在不同设备的`bug`

![20200216125554.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200216125554.png)

#### Do it

- 异步获取数据

```js
	// 异步获取列表数据
getDataList() {
    uni.request({
        url: 'https://jsonplaceholder.typicode.com/posts', //仅为示例，并非真实接口地址。

        success: (res) => {
                console.log(res)
        }
    });
},
```

![20200216141516.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200216141516.png)

那这样的话是把所有的数据全部获取来，这在实际开发中是不符合规范的

- 引入插件

一般我们期待在列表数据循环的时候，会有一个`下拉刷新`以及`下拉加载`最好还能有回到顶部的效果，这个时候我们采取一个第三方的库，笔者觉得还是十分好用

[精致的下拉刷新和上拉加载 js 框架.支持 vue,完美运行于移动端和主流 PC 浏览器 ](https://github.com/mescroll/mescroll) star 数目前是**2.8K**

它也是可以使用在其他的开发方案中，当然了也是有`uniapp`的版本,在使用之前，我们先来看一段结构布局部分

```


	 <mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption" >
		 <view v-for="(item,index) in dataList" :key="`item${index}`">  </view>
	 </mescroll-body>

```

其中

|      属性或方法      |                   含义                    |
| :------------------: | :---------------------------------------: |
|  ref="mescrollRef"   | 字节跳动小程序 ref="mescrollRef" 必须配置 |
| @init="mescrollInit" |                 必须配置                  |
| @down="downCallback" |                 必须配置                  |
|   @up="upCallback"   |                 必须配置                  |
|  :down="downOption"  |            下拉刷新的常用配置             |
|    :up="upOption"    |            上拉加载的常用配置             |

由于我们在一个项目的很多地方都需要使用到这个效果，那么我们索性，全局引入，注册为全局组件

```js
// 在main.js注册全局组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
Vue.component("mescroll-body", MescrollBody);
Vue.component("mescroll-uni", MescrollUni);
```

- pages.json 配置

```json
{
		"path": "pages/findMovie/findMovie",
		"style": {
			"navigationBarTitleText": "找片",
			"enablePullDownRefresh": false,
			"app-plus": {
				"bounce": "none" //删除此项: mescroll-body支持iOS回弹
			}
		}
	},
```

其中有两个核心的方法
| 方法 | 含义 |
| :------------------: | :---------------------------------------: |
| upCallback(page) | 上拉加载的回调 |
| downCallback() | 下拉刷新的回调 |

在进行下边部分之前，我们需要知道接口返回的数据的`总页数`怎么算，也就是说，在接口返回的数据，一般情况下会返回一个`total`

```js
Math.ceil(5 / 2);
Math.ceil(26 / 10);
Math.ceil(100 / 10);
Math.ceil(20 / 4);
```

![20200216162252.png](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200216162252.png)

- 核心代码

```js
/*上拉加载的回调*/
upCallback({num,size}) {
// console.log(num,size) // 1,10
uni.request({
    url: `https://jsonplaceholder.typicode.com/posts`,
    data: {
        _offset: num,
        _limit: size
    },
    success: (data) => {
        // 接口返回的当前页数据列表 (数组)
        let curPageData = data.data;
        // 接口返回的当前页数据长度 (如列表有26个数据,当前页返回8个,则curPageLen=8)
        let curPageLen = data.data.length;
        // 接口返回的总页数 (如列表有26个数据,每页10条,共3页; 则totalPage=3)
        let totalPage = Math.ceil(100/size); // 向上取正
        // 接口返回的总数据量(如列表有26个数据,每页10条,共3页; 则totalSize=26)
        let totalSize = 100;
        // 接口返回的是否有下一页 (true/false)
        // let hasNext = data.xxx;

        //设置列表数据
        if (this.mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
        this.dataList = this.dataList.concat(curPageData); //追加新数据

        // 请求成功,隐藏加载状态
        //方法一(推荐): 后台接口有返回列表的总页数 totalPage
        this.mescroll.endByPage(curPageLen, totalPage);

        //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
        //this.mescroll.endBySize(curPageLen, totalSize);

        //方法三(推荐): 您有其他方式知道是否有下一页 hasNext
        //this.mescroll.endSuccess(curPageLen, hasNext);
    },
    fail: () => {
        //  请求失败,隐藏加载状态
        this.mescroll.endErr()
    }
})
},
```

## 写在最后

关于`uniapp-douban-movie` 这个项目是笔者持续更新维护的一份基于 Vue 生态的多终端解决方案`uniapp`的个人练手项目，一些在实际开发中遇到的需求会在这个小项目梳理
有几点特性

- 更新时间不确定
- 代码会同步 github
- 尽可能模仿`豆瓣电影的UI`

### 模块

|                 效果名字                 | 其他 |
| :--------------------------------------: | :--: |
| 项目中，列表页上拉加载更多，下拉刷新效果 |      |

如果感觉挺好玩，不妨给个`星星` [代码同步在这里](https://github.com/yayxs/day-up/tree/master/uniapp-douban-movie)

---

Although it is over, thank you
