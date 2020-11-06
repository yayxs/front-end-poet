---
title: Flutter 指南手册
---# Flutter 指南手册

## 工具

- 框架 :Widget 库 所见即是 Widget())
- SDK ：软件开发工具包
- Dart 编程语言

## 安装环境

### JAVA 环境

[JAVA JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
**需要一个**欧瑞口的账号
直接下一步下一步，配置系统环境变量

#### 测试

终端输入` java``javac `

### 安装 AS

这里推荐梯子

### 下载 flutter SDK

依旧是配置环境变量

### 检测是不是完事

```
flutter doctor
```

## 新建一个项目

### 安装个插件 flutter

一路 next **再次推荐使用梯子**

## 调试

可以使用真实的手机，也可以使用虚拟机

- 真实的手机通过开启调试模式，用数据线链接
- 虚拟机，开启一个虚拟机

### 真机调试

- 手机
- 数据线
- USB
- 调试模式

### 虚拟机调试 模拟器

推荐第三方模拟器（夜神。。）还是点击 Run 'app'

### 在 VScode

- 安装插件 Flutter 、 Flutter Widget Snippets 、Dart
- Vscode 链接模拟器
  cd 到夜神模拟器安装 bin 目录 然后执行

```
nox_adb.exe connet 127.0.0.1:62001
```

## 运行项目

```

flutter run

```

- R 热加载
- P 显示网格
- O IOS 模式、安卓模式切换

## main.dart

```dart
import 'package:flutter/material.dart'; // 引入UI库

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'hello',
        home: Scaffold(
          appBar: AppBar(
            title: Text('洋小洋同学'),
          ),
          body: Center(
            child: Text('hello world'),
          ),
        ));
  }
}

```

## Text()

```dart
 child: Text(
              '了欧式的大家都懂披萨酱撒娇地煞电竞盛典阿萨德撒键盘的骄傲搜刀剑三大家的萨达静安寺睡觉打卡精神上的家阿斯顿',
              textAlign: TextAlign.center,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                  fontSize: 25.0,
                  color: Color.fromARGB(255, 255, 125, 125),
                  decoration: TextDecoration.underline,
                  decorationStyle: TextDecorationStyle.solid),
            ),
```

## Container()

```dart
Container(
              child: new Text(
                'hello',
                style: TextStyle(fontSize: 40.0),
              ),
              alignment: Alignment.center,
              width: 500.0,
              height: 400.0,
              color: Colors.blue,
            ),
```

## Image()

```dart
 child: new Image.network(
                'https://yayxs.github.io/head.jpg',
                fit: BoxFit.scaleDown,
                // repeat: ImageRepeat.repeatY,
                // color: Colors.lightBlueAccent,
                // colorBlendMode: BlendMode.src
              ),
```

## ListView

```dart
new ListView(
          children: <Widget>[
            new ListTile(
              leading: new Icon(Icons.ac_unit),
              title: new Text('djklslajdksajdsa'),
            ),
            new ListTile(
              leading: new Icon(Icons.ac_unit),
              title: new Text('djklslajdksajdsa'),
            ),
          ],
        ),
```

## 组件拆分

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'yaxys',
      home: Scaffold(
          appBar: new AppBar(
            title: new Text('list'),
          ),
          body: Center(
            child: Container(height: 200.0, child: MyList()),
          )),
    );
  }
}

class MyList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      new ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          new Container(
            width: 100.0,
            color: Colors.lightBlue,
          ),
          new Container(
            width: 300.0,
            color: Colors.green,
          ),
          new Container(
            width: 100.0,
            color: Colors.red,
          )
        ],
      ),
    );
  }
}

```

## 网格

```dart
 GridView.count(
          padding: const EdgeInsets.all(20.0),
          crossAxisSpacing: 10.0,
          crossAxisCount: 3,
          children: <Widget>[const Text('dasdsad'), const Text('dasdsad')],
        ),
```

## 水平布局

```dart
    body: new Row(
          children: <Widget>[
            Expanded(
              child: new RaisedButton(
                onPressed: () {},
                color: Colors.black12,
                child: new Text('anniu'),
              ),
            ),
            Expanded(
              child: new RaisedButton(
                onPressed: () {},
                color: Colors.black12,
                child: new Text('anniu'),
              ),
            ),
            Expanded(
              child: new RaisedButton(
                onPressed: () {},
                color: Colors.black12,
                child: new Text('anniu'),
              ),
            ),
          ],
        ),
```

## 垂直布局

```dart
  appBar: new AppBar(
            title: new Text('垂直方向布局'),
          ),
          body: Center(
              child: new Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text('asdasdsada'),
              Expanded(
                child: Text('asdasdsadsdasdadasdasdasa'),
              ),
              Text('asdasdsada'),
            ],
          )),
```

## 层级布局

```dart
 var stack = new Stack(
      alignment: const FractionalOffset(0.5, 0.8),
      children: <Widget>[
        new CircleAvatar(
          backgroundImage: new NetworkImage('https://yayxs.github.io/head.jpg'),
          radius: 100.0,
        ),
        new Container(
          decoration: new BoxDecoration(color: Colors.black38),
          padding: EdgeInsets.all(5.0),
          child: Text('sdasdasdds'),
        )
      ],
    );
```

## 定位布局

```dart
  new CircleAvatar(
          backgroundImage: new NetworkImage('https://yayxs.github.io/head.jpg'),
          radius: 100.0,
        ),
        new Positioned(
          top: 10.0,
          left: 10.0,
          child: new Text('sadsadasdasdsa'),
        ),
        new Positioned(
          bottom: 10.0,
          right: 10.0,
          child: new Text('dsadsadsadas'),
        )
```

## 卡片布局

```dart
 var card = new Card(
      child: Column(
        children: <Widget>[
          ListTile(
            title: new Text(
              'dasdsadsds',
              style: TextStyle(fontWeight: FontWeight.w900),
            ),
            subtitle: new Text('dsadsadsa'),
            leading: new Icon(
              Icons.access_alarm,
              color: Colors.black38,
            ),
          ),
          ListTile(
            title: new Text(
              'dasdsadsds',
              style: TextStyle(fontWeight: FontWeight.w900),
            ),
            subtitle: new Text('dsadsadsa'),
            leading: new Icon(
              Icons.access_alarm,
              color: Colors.black38,
            ),
          ),
          ListTile(
            title: new Text(
              'dasdsadsds',
              style: TextStyle(fontWeight: FontWeight.w900),
            ),
            subtitle: new Text('dsadsadsa'),
            leading: new Icon(
              Icons.access_alarm,
              color: Colors.black38,
            ),
          )
        ],
      ),
    );
```

## 导航组件

```cart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(title: 'sdasdsa', home: new FirstScreen()));
}

class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('sadsadada'),
        ),
        body: Center(
          child: RaisedButton(
            child: Text('这是一个按钮'),
            onPressed: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => new SecondScreen()));
            },
          ),
        ));
  }
}

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('sdasdsa'),
        ),
        body: Center(
          child: RaisedButton(
            child: Text('sdasd'),
            onPressed: () {
              Navigator.pop(context);
            },
          ),
        ));
  }
}

```

## 显示详情

```dart
import 'package:flutter/material.dart';

class Product {
  final String title;
  final String desc;
  Product(this.title, this.desc);
}

void main() {
  runApp(MaterialApp(
      title: 'sdasdad',
      home: ProductList(
          products: List.generate(20, (i) => Product('商品 $i', '编号 $i')))));
}

class ProductList extends StatelessWidget {
  final List<Product> products;
  ProductList({Key key, @required this.products}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('sdasds'),
      ),
      body: ListView.builder(
        itemCount: products.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(products[index].title),
            onTap: () {
              Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) =>
                          ProductDel(product: products[index])));
            },
          );
        },
      ),
    );
  }
}

class ProductDel extends StatelessWidget {
  final Product product;
  ProductDel({Key key, @required this.product}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('${product.title}'),
      ),
      body: Center(
        child: Text('${product.desc}'),
      ),
    );
  }
}

```

## 子组件回传

```dart
import 'package:flutter/material.dart';

void main(){
  runApp(
    MaterialApp(
      title:'sdsadsa',
      home:FirstPage()
    )
  );
}


class FirstPage  extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('sdsdsd'),

      ),
      body: Center(
        child: Button(),
      ),
    );
  }
}

class Button extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      onPressed: (){
        _navi()
      },
      child: Text('sdasdad'),
    );
  }

  _navi(BuildContext context) async {
    final res  = await Navigator.push(context, MaterialPageRoute(
      builder: ((context)=>Page())
    ));
    Scaffold.of(context).showSnackBar(SnackBar(content:Text('$res')));

  }
}

class Page extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(';sdasdsad'),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            RaisedButton(
              child: Text('sdasdsad'),
              onPressed: (){
                Navigator.pop(context,'dsadasddsadsa');
              },
            ),
                RaisedButton(
              child: Text('sdasdsad'),
              onPressed: (){
                Navigator.pop(context,'dsadasddsadsa');

              },
            ),
                RaisedButton(
              child: Text('sdasdsad'),
              onPressed: (){
                Navigator.pop(context,'dsadasddsadsa');

              },
            )
          ],
        ),
      ),
    );
  }
}
```
