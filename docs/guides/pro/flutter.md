---
title: Flutter实际项目开发中踩坑合集
---

# Flutter 实际项目开发中踩坑大合集（持续更新..）

## 写在前面

- 面向读者：Web 前端开发工程师|IOS 开发工程师|安卓开发工程师|Flutter 开发工程师
- 更新维度：暂且以时间（Time）维度更新，后续会慢慢调整为坑的类型（Type）
- 核心内容：尊重原创|企业开发中实录|坑坑见血
- 更新时间：尽量以**日**为单位
- 共建精神：掘友在开发过程中所遇坑可在评论区留言，会更新在本篇之上
- 侵权联系：youngwanlia@gmail.com，牵扯到侵权的内容，请邮件联系（见核心内容）

## 传送门

- [Flutter 实战 从头撸一个「孤岛」APP（No.1、项目初始化、屏幕适配）][1]
- [Flutter 实战 从头撸一个「孤岛」APP（No.2、闪屏 Splash Page、引导页）][2]

## 活跃社群

### QQ 平台

- Flutter 交流群 **674639629**
  - 关键词： [前端届大佬技术胖][3]
  - 1 群
  - 活跃指数：5 颗星
- Flutter 交流群 2 **806799257**
  - 关键词： [前端届大佬技术胖][4]
  - 2 群
  - 活跃指数：5 颗星
- Flutter 中国开发者 **860708630**
  - 关键词： [贾鹏辉的技术博客官网][5]
  - 慕课网《Flutter 从入门到进阶-实战携程网 App》
  - 活跃指数：3 颗星
- OpenFlutter 交流群 **892398530**
  - 关键词： [Github 适用于 Flutter 的微信 SDK][6]
  - 开源 Fluwx 讨论群
  - 活跃指数：4 颗星
  - Fluwx 视频教程：[网易云课堂-来自作者][7]

### B 站平台

- [UP 主：马友发][8]
- [UP 主：HansYangBilibili][9]

### youtube 平台

**待更新..**

## 踩坑合集

> 2019-11-26
> | 坑类型(type) | 关键词 | 是否进度（0 坑已填/1 进行中/-1 坑待填） |
> | :--------: | :-----: | :----: |
> | 调试配置 | Vscode/Debug/launch.json/编辑器 | 0 |

- 坑描述：调试 Flutter 代码的时候用 Debug 模式，调试控制台，配置`launch.json`文件

```dart
{
    // 使用 IntelliSense 了解相关属性。
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Dart",
            "program": "bin/main.dart",
            "request": "launch",
            "type": "dart"
        }
    ]
}
```

- 坑截图
  ![此处输入图片的描述][10]

- 坑解决
  **删除** 生成的`.vscode`文件夹即可，然后重新 debug

---

| 坑类型(type) |               关键词               | 是否进度（0 坑已填/1 进行中/-1 坑待填） |
| :----------: | :--------------------------------: | :-------------------------------------: |
|  第三方插件  | Flutter 导入包/编辑器爆红/引入失败 |                    0                    |

- 坑描述：在引入第三方包后，已经正确在`pubspec.yaml`安装了依赖,依然报错误

- 坑截图
  ![此处输入图片的描述][11]

- 坑解决
  方式一：再次确认 pubspec.yaml 有没正确配置
  方式二：再次检查 `import` 导入包的使用方式
  方式三：重新`flutter pub get`
  方式四：更新 SDK 版本 `flutter upgrade`
  方式五：重启所用编辑器

---

| 坑类型(type) |                 关键词                 | 是否进度（0 坑已填/1 进行中/-1 坑待填） |
| :----------: | :------------------------------------: | :-------------------------------------: |
|  第三方插件  | Chart/图表/ charts_flutter/plot/散点图 |                    0                    |

- 坑描述：在引入 Google 官方库下的图表插件时，需要与后台数据结合，传值问题，SimpleScatterPlotChart.withRandomData(data)，创建数据地方后台`dataList`取不到

- 坑截图
  ![此处输入图片的描述][12]

- 坑解决
  SimpleScatterPlotChart.withSampleData()就得到了这个显示的图表
  这里需要一个参数 SimpleScatterPlotChart.withSampleData(orginData);
  ![此处输入图片的描述][13]

---

## 特别鸣谢

- [JS 瘦][14]
- [github 地址][15]
- Flutter 图表相关坑

## 写在最后

我是**洋小洋同学**，让我们一起 UP,这是我的个人站[大鹏一日同风起][16]，欢迎来玩~~

![此处输入图片的描述][17]
再见会再见

---

[1]: https://juejin.im/post/5dd0142be51d453fc01e8a25
[2]: https://juejin.im/post/5dd97d3fe51d45234f582cbe
[3]: http://jspang.com/
[4]: http://jspang.com/
[5]: https://www.devio.org/tags/#Flutter
[6]: https://github.com/OpenFlutter/fluwx/blob/master/README_CN.md
[7]: https://study.163.com/course/introduction.htm?share=2&shareId=480000001896427&courseId=1209174838&_trace_c_p_k2_=e72467dc0df540579287a8ea996344a4
[8]: https://space.bilibili.com/283403747?from=search&seid=9359173423398705432
[9]: https://space.bilibili.com/406327594?from=search&seid=14169614519032335174
[10]: https://ftp.bmp.ovh/imgs/2019/11/ced8d2eec7e9a934.png
[11]: https://ftp.bmp.ovh/imgs/2019/11/034c1d99720d6d89.png
[12]: https://ftp.bmp.ovh/imgs/2019/11/b607ea1bd9f40d08.png
[13]: https://ftp.bmp.ovh/imgs/2019/11/714c3539f6c4e995.png
[14]: http://jsshou.cn/blog/flutter/flutter_use_charts.html#%E6%94%AF%E6%8C%81%E7%9A%84%E5%9B%BE%E8%A1%A8%E7%B1%BB%E5%9E%8B
[15]: https://github.com/xuzhongpeng
[16]: https://yayxs.github.io/
[17]: https://ftp.bmp.ovh/imgs/2019/11/aa45fb7d13b96fe8.png
