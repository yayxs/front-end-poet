```javascript
 function foo() {
        console.log(window.screenLeft);
        console.log(window.screenTop);
        window.moveTo(200, 200);
      }
      function bar() {
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        console.log(window.outerWidth);
        console.log(window.outerHeight);
      }
      function baz() {
        // 页面视口的宽度
        console.log(document.documentElement.clientWidth);
        // 页面视口的高度
        console.log(document.documentElement.clientHeight);
      }
      bar();
      baz();
      let dom = document.getElementById("btn");
      dom.addEventListener("click", () => {
          // 回到顶部
        window.scrollTo({
          left: 0,
          top: 0,
        });
      });
```

## window.open

```javascript
      window.open("https://yayxs.github.io", "yayxs", "height=400,width=400");
```

## 定时器

第二个参数咋：z在指定的毫秒数过后把这个任务添加 到队列，

- 队列是空的立即执行过
- 不是空的还得等

```javascript
 // 字符串或者函数
      // 参数二 从现在到添加队列的时间
      setInterval(() => {
        
      }, interval);
```

## location

> console.log(JSON.stringify(window.location));

```javascript
{
	"ancestorOrigins": {},
	"href": "http://127.0.0.1:5500/docs/guides/books/index.html", // 完整的url
	"origin": "http://127.0.0.1:5500",
	"protocol": "http:",
	"host": "127.0.0.1:5500", // 服务器+端口
	"hostname": "127.0.0.1", // 服务器
	"port": "5500",
	"pathname": "/docs/guides/books/index.html", // 路径
	"search": "",
	"hash": "" //URL散列
}
```

```javascript
 function getQueryStrArgs() {
        let qs = `?name=12&age=18`.substring(1),
          args = {};
        for (let ele of qs.split("&").map((it) => it.split("="))) {
          let k = decodeURIComponent(ele[0]),
            v = decodeURIComponent(ele[1]);
          if (k.length) {
            args[k] = v;
          }
        }

        return args;
      }
      console.log(getQueryStrArgs());
```

```javascript
 let qs = `?name=yayxs&age=18`;
      // 1. 给构造函数传入查询字符串,从而创建实例
      let searchParams = new URLSearchParams(qs);
      console.log(searchParams.toString());
      console.log(searchParams.has("name"));
      console.log(searchParams.get("name"));
```

## 检测插件

```javascript
  function hasPlugin(name) {
        name = name.toLowerCase();
        for (let plugin of window.navigator.plugins) {
          if (plugin.name.toLowerCase().indexOf(name) > -1) {
            return true;
          }
          return false;
        }
      }

      console.log(hasPlugin("Flash"));
```

