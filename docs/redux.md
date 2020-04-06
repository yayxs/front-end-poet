## 概述

通用的状态管理辅助`工具`，习惯上我们可以结合`ReactJs` 来使用，在组件化开发过程中，组件的`数据状态`不得不集中化管理，这也是我们使用`Redux`的原因之一,是一个数据的容器

### 三大核心

- 单一数据源
- state是只读 （派发action）
- 纯函数执行修改 （编写 reducers）

### 组成部分

- state
  - 服务端的数据
  - UI数据
  - app state
- Action
- Reducer
- Store

#### Action

`action`顾名思义`动作`，`行动` `行为`，一言以蔽之，它是把数据从应用传到`仓库`的一个动作，也就是这个数据仓库

- JS对象

- 格式

  ```js
  {
      type:ADD, // type 字段是约定，大家的约定，表示动作的名字,
      index:1,
      content:'这是一点内容'
  }
  ```

  - 对象的`type`字段表示执行的动作;字符串常量
  - index 唯一的ID,主要是一个标识
  - content（或者其他）JS对象什么字段都可以啊，一个字段而已

**在实际的开发中我们习惯上是action创建函数**

```js
const addAction = (params)=>{
    return {
        type:ADD,
        ...params
    }
}
```

#### Reducer

现在我们依旧不说`store` 这个概念，现在`动作`有了，但是`action`它只是描述了一下这个动作，但并不知道咋更新数据，提到数据，我们假使

```js
{
    num:0
}
```

这个简单的`js对象 `就是数据

**ACTION是个普通的对象；REDUCER是个普通的函数**

- 说普通也不普通，js的函数而已

  - ```js
    function(a,b){
        console.log(a+b)
    }
    ```

  - 但是没那么简单

- 干净简单，

- ```js
  // 默认的数据
  const initData = {
      num:123
  }
  // reducer
  const counterReducer =(state=initData,action)=>{
      
    // 啥也不干，返回传进来的state(此时默认的initData)
     return state
  }
  
  ```

- 怎么可能啥也不干呢

```js
import { addAction } from "./actions";
// 默认的数据
const initData = {
  num: 123
};
// reducer
const counterReducer = (state = initData, action) => {
  // 判断传入的动作是什么类型
  switch (action.type) {
    case addAction:
      return Object.assign({}, state, {
        ...
      });
    default:
      return state;
  }

  // 啥也不干，返回传进来的state(此时默认的initData)
  //   return state;
};


```

**注意**

- 不能修改传进来的数据
- 在默认情况下，一定得返回旧的`state`

#### Store

- 这就是那个状态仓库，维持状态
- getState() 方法获取state
- 提供 dispatch ()方法发送action
- 通过subscribe()来注册监听

##### 获取状态

```js
getState()
```

##### 更新状态

```js
dispatch(action) 
```

也就是我们说的派发一个动作

##### 注册监听（订阅）

```js
subscribe(listener)
```

## 简单案例

在这个时候，有个问题，前边说的这一切，那我们该怎么来创建这个仓库呢

```sh
yarn add redux
```

这个库里就有方法，也就是我们常说的`redux`

### 构建action

```js

import { ADD_TYPE } from './actionTypes'
const addAction = (params)=>{
    return {
        type:ADD_TYPE,
        ...params
    }
}

export {
    addAction
}
```

### 构建reducer

```js
import { addAction } from "./actions";
// 默认的数据

// reducer
const counterReducer = (state = {num:123}, action) => {
  // 判断传入的动作是什么类型
  switch (action.type) {
    case addAction:
      return Object.assign({}, state, action);
    default:
      return state;
  }

  // 啥也不干，返回传进来的state(此时默认的initData)
  //   return state;
};

export {
    counterReducer
}
```

### 创建store

#### 引入文件

```js
import { createStore } from "redux";
import { counterReducer } from "./reducers";
```

#### createStore

```js
const store = createStore(counterReducer);
export default store
```



### 派发action

```js
const handleClick = ()=>{
    console.log(`点击了按钮`)
    const action = addAction({num:'456'})
    store.dispatch(action)
}
```

### 监听

```js
  useEffect(() => {
        store.subscribe(()=>{
            console.log('-----',store.getState())
        })
    }, [])
```

### 小结

通过一个简单的案例，我们知道一个简易的流程：

1. 首先构建一个`action` 返回一个对象**必须有type属性**
2. 构建`reducer` 响应action t通过return 把数据传回store 
3. 利用`redux`这个库来创建一个store 传递写好的`reducer`
4. 利用的`$store.subscribe()` 注册监听
5. 可以通过`store.getState()` 取值

## React-redux

那在如上我们使用的`redux` 这个库看起来是没有问题，**但是**

- 首先要导入store
- 然后注册监听
- 然后组件销毁的时候，我们取消监听

这一波流的操作在每个组件都要走一遍，显然是十分繁琐和重复的，这就需要看谁能不能帮帮我，这就是`react-redux`

### 什么是`react-redux`

- redux 官方出品

- 能够更好的结合`react` 来管理数据

### Provider 组件

- 包裹在最外层的组件之外，这样可以使所有的子组件都可以拿到`state`
- 接收`store` 作为`props` 通过`context` 传递

### connect 方法

- 组件内部获取`store` 中的`state` 
- 通过`connect` 加强



#### mapStateToProps(state,ownProps)

```js
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return state
    // return {
    //     prop: state.prop
    // }
}
```



#### mapDispathToProps(dispath,ownProps)

```js
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendAction: () => {
      dispatch({
        type: "ADD_TYPE",
      });
    },
  };
};
```



### 使用

- 安装相关的依赖

- 构建store 和readucer

- Provider组件实现

```jsx
 <>
      <Provider store = {store}>
        <List></List>
        <Detail></Detail>
      </Provider>
    </>
```

- connect

## combineReducers

- 函数，接收一个参数
- 拆分reducer

```js
import { createStore, combineReducers } from "redux";
// import { counterReducer } from "./reducers";
// import rootReducer from './reducers/index'

import { infoReducer } from "./reducers/infoReducer";
import { listReducer } from "./reducers/listReducer";

const reducer = combineReducers({
  infoReducer,
  listReducer,
});

// 构建store
const store = createStore(reducer);
export default store;

```

### 使用

- ComA A组件

  ```react
  import React, { Component } from "react";
  import { connect } from "react-redux";
  class ComA extends Component {
    handleClick = () => {
      this.props.getInfo();
    };
  
    render() {
      return (
        <div>
          {/* <h3>{this.props.}</h3> */}
          <button onClick={this.handleClick}>获取信息</button>
        </div>
      );
    }
  }
  
  const mapStateToProps = (state, ownProps) => {
    console.log(state.infoReducer);
    // return {
    //   prop: state.prop,
    // };
    // return state
    return {
      ...state.infoReducer,
    };
  };
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getInfo: () => {
        const actionCreator = {
          type: "GET_INFO",
        };
  
        dispatch(actionCreator);
      },
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ComA);
  
  ```

  

- ComB

  ```react
  import React, { Component } from "react";
  import { connect } from "react-redux";
  
  class ComB extends Component {
    handleClick = () => {
      this.props.getList();
    };
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>获取列表</button>
        </div>
      );
    }
  }
  
  const mapStateToProps = (state, ownProps) => {
    console.log(state.listReducer)
    // return state
    return {
      ...state.listReducer
    }
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getList: () => {
        const actionCreator = {
          type: "GET_LIST",
        };
        dispatch(actionCreator);
      },
    };
  };
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(ComB);
  
  ```

  ![](https://raw.githubusercontent.com/yayxs/Pics/master/20200405152929.png)





- infoReducer.js

  ```js
  const info = {
    name: "yayxs",
  };
  
  const infoReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_INFO":
        return {
          ...info,
        };
  
      default:
        return state;
    }
  };
  
  export {
    infoReducer
  }
  ```

  

- listReducer

  ```js
  const listArr = [
    {
      id: 1,
      con: "耳机",
    },
  ];
  
  const listReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_LIST":
        return {
          listArr: [...listArr],
        };
  
      default:
        return state;
    }
  };
  
  export {
    listReducer
  }
  ```



## Redux-Saga

- 副作用
- 异步操作
- redux 的中间件
- ES6的新语法

### API





## 思考

- hooks API 页面刷新