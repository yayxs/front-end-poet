### 创建项目

```sh
npx react-native init 这个是自己的app的名字
```

### 启动

```sh
yarn android // 安卓
```

### 目录结构

```sh
 tree -C -L 3 -I node_modules
```

```sh
.
|-- App.js
|-- __tests__
|   `-- App-test.js
|-- android
|   |-- AwesomeReactNative.iml
|   |-- app
|   |   |-- BUCK
|   |   |-- app.iml
|   |   |-- build
|   |   |-- build.gradle
|   |   |-- build_defs.bzl
|   |   |-- debug.keystore
|   |   |-- proguard-rules.pro
|   |   `-- src
|   |-- build.gradle
|   |-- gradle
|   |   `-- wrapper
|   |-- gradle.properties
|   |-- gradlew
|   |-- gradlew.bat
|   |-- local.properties
|   `-- settings.gradle
|-- app.json
|-- babel.config.js
|-- index.js
|-- ios
|   |-- AwesomeReactNative
|   |   |-- AppDelegate.h
|   |   |-- AppDelegate.m
|   |   |-- Base.lproj
|   |   |-- Images.xcassets
|   |   |-- Info.plist
|   |   `-- main.m
|   |-- AwesomeReactNative-tvOS
|   |   `-- Info.plist
|   |-- AwesomeReactNative-tvOSTests
|   |   `-- Info.plist
|   |-- AwesomeReactNative.xcodeproj
|   |   |-- project.pbxproj
|   |   `-- xcshareddata
|   |-- AwesomeReactNativeTests
|   |   |-- AwesomeReactNativeTests.m
|   |   `-- Info.plist
|   `-- Podfile
|-- metro.config.js
|-- package-lock.json
|-- package.json
|-- yarn-error.log
`-- yarn.lock

```

### hello

```react
import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
const App = () => {
  return (
    <>
      <View style={styles.hello}>
        <Text> hell212121o</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  hello: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f',
  },
});

export default App;

```

#### 编辑器

- Vscode
- 插件 
  - React Native Tools
  - React Native Snippet

#### 调试

```json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug Android",
            "cwd": "${workspaceFolder}",
            "type": "reactnative",
            "request": "launch",
            "platform": "android"
        }
    ]
}
```

### 样式

### 组件

#### Text

### 状态



### 问题

#### 调试

>
>
>[Warning] Error: 包生成工具仍在运行。如果包生成工具已在 VS Code 外部启动，请使用任务管理器退出该包生成工具进程。
>
>
>
>[Info] 包生成工具已在运行。
>
>
>
>[Warning] Error: React Native 包生成工具在 VS Code 外部运行。如果想要调试，请使用“附加到包生成工具”选项



### 参考阅读

- [使用tree生成目录树结构](https://juejin.im/post/5cf322b2f265da1b6720f67d)
- 