---
title: 《Flutter 实战》
---

# 《Flutter 实战》- 作者 wendux

## Dart 语言 开发

- 开发效率高
- 高性能
- 快速分配内存
- 类型

## flutter Demo 注释

```dart

import 'package:flutter/material.dart'; // 引入UI库（Material：标准的移动端和web端设计语言）
/**
main 函数是入口

void main(){
  runApp(Widget)
}
Myapp（） 跟组件
*/
void main() => runApp(new MyApp());
/**
- MyApp 继承 StatelessWidget类
- widget 组件部件
- build()方法 描述构建一个UI
- MaterialApp 也是一个widget Material库中提供的Flutter APP框架
*/

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter Demo', // 应用的名称
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ), // 应用的主题
      home: new MyHomePage(title: 'Flutter Demo Home Page'), // 应用的首页
    );
  }
}
/**
首页部分，也是一个widget
- StatefulWidget 有状态的组件
- 有状态生命周期中可变；Stateless不可变
*/
class MyHomePage extends StatefulWidget { // StatefulWidget 一个类
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => new _MyHomePageState(); // _MyHomePageState 是MyHomePage 对应的状态类
}
/**
_MyHomePageState
setState（）通知flutter 框架--->执行build方法重新构建页面
*/
class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0; // 用于记录值得变化
  // 点击按钮的时候调用此方法
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }
/**
- Scaffold 页面脚手架
*/
/**
构建UI界面
当MyHomePage第一次创建时，_MyHomePageState类会被创建，当初始化完成后，Flutter框架会调用Widget的build方法来构建widget树，最终将widget树渲染到设备屏幕上
*/

/**
- Scaffold
- - AppBar
- - - Text
- - body
- - - Center
- - - - Column
*/
  @override
  Widget build(BuildContext context) {
    return new Scaffold( // 提供的一个组件
      appBar: new AppBar(
        title: new Text(widget.title),
      ), // 导航栏
      body: new Center(
        child: new Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            new Text(
              'You have pushed the button this many times:',
            ),
            new Text(
              '$_counter',
              style: Theme.of(context).textTheme.display1,
            ),
          ],
        ),
      ), // 主题部分
      /**
      页面右下角的带“+”的悬浮按钮
      */
      floatingActionButton: new FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: new Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
```

### build()方法放在 State 中

- 状态访问不便
- 继承 StatefulWidget 不便
- [详细见](https://book.flutterchina.club/chapter2/first_flutter_app.html)

## 路由|导航

在移动端 通常是指页面

- 安卓 Activity
- IOS ViewController

```dart
class newRoute extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar:AppBar(
        title:Text('hello')
      ),
      body:Center(
        child:Text(
          'newRoute'
        )
      )
    )
  }
}
```

跳转到如上的路由

```dart
/**
 - PageRoute 抽象类
 - MaterialPageRoute Material组件库提供的组件，它可以针对不同平台，实现与平台页面切换动画风格一致的路由切换动画：
*/
FlatButton(
  child:Text('跳转到新路由'),
  textColor:Colors.red,
  onpressed(){
    Navigator.push( // Navigator 组件通过栈来管理活动路由集合
      context,
      MaterialPageRoute(
              builder: (context) {
              return NewRoute();
           })
      )
    )
  }
)
```

```dart
          //导航到新路由
          Navigator.push(
             context,
             MaterialPageRoute(
               // 是一个WidgetBuilder类型的回调函数，它的作用是构建路由页面的具体内容，返回值是一个widget。我们通常要实现此回调，返回新路由的实例
              builder: (context) {
              return NewRoute();
              }
           ));
```

- Future push(BuildContext context, Route route)
  将给定的路由入栈（即打开新的页面），返回值是一个 Future 对象，用以接收新路由出栈（即关闭）时的返回数据。
- bool pop(BuildContext context, [ result ])

### 路由传值

```dart
class TipRoute extends StatelessWidget {
  TipRoute({
    Key key,
    @required this.text,  // 接收一个text参数
  }) : super(key: key);
  final String text;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("提示"),
      ),
      body: Padding(
        padding: EdgeInsets.all(18),
        child: Center(
          child: Column(
            children: <Widget>[
              Text(text),
              RaisedButton(
                onPressed: () => Navigator.pop(context, "我是返回值"),
                child: Text("返回"),
              )
            ],
          ),
        ),
      ),
    );
  }
}
```

```dart
class RouterTestRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: RaisedButton(
        onPressed: () async {
          // 打开`TipRoute`，并等待返回结果
          var result = await Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) {
                return TipRoute(
                  // 路由参数
                  text: "我是提示xxxx",
                );
              },
            ),
          );
          //输出`TipRoute`路由返回结果
          print("路由返回值: $result");
        },
        child: Text("打开提示页"),
      ),
    );
  }
}
```

## 包管理 yaml

```yaml
name: flutter_in_action
description: First Flutter application.

version: 1.0.0+1

dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^0.1.2

dev_dependencies: // 开发环境依赖的工具包（而不是flutter应用本身依赖的包）
  flutter_test:
    sdk: flutter

flutter:
  uses-material-design: true
```

## 功能型 Widget 简介

主要是指不影响 UI 布局的一些组件

- WillPopScope 导航返回拦截 防止用户误触
