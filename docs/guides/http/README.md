---
title: 图解HTTP
---

## 什么是HTTP

http:`hyperText Transfer Protocol ` 超文本传输协议

## URL与URI的区别

- `url`统一资源定位符 指定文档所在地址的URL **网页地址**
- `uri` 统一资源标识符
- url是uri的子集

```
http://localhost:8080/guides/http/#ip%E5%8D%8F%E8%AE%AE%E4%B8%8Eip%E5%9C%B0%E5%9D%80
```

- http:// 协议类型

## HTTP的版本

- http/0.9（1990）
- http/1.0（1996年5月）
- http/1.1（1997年1月）
- http/2.0

## 什么是TCP/IP协议族

分层管理：应用层、传输层、网络层、数据链路层

- 应用层决定向用户提供应用服务时的通信
- 传输层 网络俩你接种两台计算机之间的数据传输
- 网络层 处理网络上的数据包
- 数据链路层 链接网络的硬件部分

![](D:\gh-code\frontend-thick-talk\assets\images\http\Snipaste_2020-11-29_12-51-54.png)

## IP协议与IP地址

- ip 网络协议 是一种协议的名称
- ip地址和mac地址
- 位于网络层

## TCP协议

- 传输层
- 为了准确无误的将数据送达目标处：**tcp协议** 采用`三次握手` 策略

## http/1.1协议

本身是无状态的，后来引入cookie技术，用来管理状态。主要通过在**请求** 和 **响应**的报文中写入COOKIE

大体流程

1. ​	响应报文内有个叫 Set-Cookie 首部字段信息 通知客户端保存
2. 发送请求时在请求报文中加入Cookie值
3. 服务端检查是哪个客户端发的连接请求

## 三次握手

为了准确无误传送数据，TCP采用**三次握手** 

![](D:\gh-code\frontend-thick-talk\assets\images\http\Snipaste_2020-11-29_13-04-37.png)



## DNS 服务

处在应用层的协议：域名到IP地址的解析

dns解析：

## 输入URL

1. 网址通过`dns` 解析到ip地址 
2. http请求报文
3. tcp分割为报文段
4. ip搜索对方地址 传送

## 请求报文

## http方法

在http/1.0和http/1.1支持的方法不同

- GET
- POST 传输实体主体
- PUT 传输文件
- HEAD 获得报文首部
  - 和GET差不多不返回报文的主体内容
- DELETE 删除文件 和PUT 相反
- OPTIONS 询问支持的方法
  - 用来查询针对请求URI指定资源支持的方法
- TRACE 容易引发跨站追踪
- CONNECT 要求用隧道协议连接代理

