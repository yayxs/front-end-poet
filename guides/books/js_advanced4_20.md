---
title: JavaScript API
---

## keywords

- atomics
- sharedArrayBuffer

## 实现跨源通信

跨文档的通信（不同的线程或者直接是不同源的页面）

### postMessage

window.postMessage() 方法可以安全地实现跨源通信。

- 参数一消息  message 将要发送到其他 window 的数据
- 参数二  targetOrigin 通过窗口的`origin` 属性来指定哪些窗口能接收到消息事件
  - 或者直接传 * 不推荐
- transfer 是一串和 message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。



> otherWindow.postMessage(message, targetOrigin, [transfer]);

- otherWindow 其他窗口的一个引用，比如 iframe 的 contentWindow 属性、执行`window.open` 返回的窗口对象或者是命名过或数值索引的`window.frames`

#### 父页面

```html
// parent.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>跨域消息发送</title>
  </head>
  <body>
    <textarea name="" id="message" cols="30" rows="10"></textarea>
    <input type="button" value="发送" onclick="sendHandleClick()" />
    <iframe src="./child.html" id="childPage" style="display: none;"></iframe>
    <script>
      function sendHandleClick() {
        // 点击获取窗口对象
        let iframeWin = document.querySelector("#childPage");
        console.log(iframeWin.contentWindow);
        let iframeConWin = iframeWin.contentWindow;
        // 向窗口发讯息
        iframeConWin.postMessage(
          document.querySelector("#message").value,
          "http://127.0.0.1:5500/"
        );
      }
      window.addEventListener(
        "message",
        function(event) {
          console.log(event, event.data);
        },
        false
      );
    </script>
  </body>
</html>
```

#### 子页面

```html


// child.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>child页面</title>
  </head>
  <body>
    <script>
      window.addEventListener(
        "message",
        (event) => {
          // 监听父窗口发送过来的数据向服务器发送post请求
          let data = event.data;
          //   console.log(data)
          // 将 data 数据返回
          window.parent.postMessage(data, "*");
          //   $.ajax({
          //     // 注意这里的url只是一个示例.实际练习的时候你需要自己想办法提供一个后台接口
          //     type: "POST",
          //     url: "http://moweide.gitcafe.io/getData",
          //     data: "info=" + data,
          //     dataType: "json",
          //   })
          //     .done(function (res) {
          //       //将请求成功返回的数据通过postMessage发送给父窗口
          //       window.parent.postMessage(res, "*");
          //     })
          //     .fail(function (res) {
          //       //将请求失败返回的数据通过postMessage发送给父窗口
          //       window.parent.postMessage(res, "*");
          //     });
        },
        false
      );
    </script>
  </body>
</html>
```
