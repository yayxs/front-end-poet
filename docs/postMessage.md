window.postMessage() 方法可以安全地实现跨源通信。

 - message 将要发送到其他 window 的数据
 - targetOrigin 通过窗口的`origin` 属性来指定哪些窗口能接收到消息事件
 - transfer 是一串和message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。

> otherWindow.postMessage(message, targetOrigin, [transfer]);

 - otherWindow 其他窗口的一个引用，比如iframe的contentWindow属性、执行`window.open` 返回的窗口对象或者是命名过或数值索引的`window.frames`