## 背景

### 思路

整体思路是依着`TypeScript` 的基础上 然后构建一个 `React` 应用，这里参考 ts 以及 webpack

## 使用

## 文件的导入

```
import * as React from "react";
```

## 属性的传值

### old

```jsx
import React from "react";
import PropTypes from "prop-types";

export function StandardComponent({ children, title = "Dr." }) {
  return (
    <div>
      {title}: {children}
    </div>
  );
}

StandardComponent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
```

### new

```jsx

import * as React from 'react'

export interface StandardComponentProps {
  title?: string
  children: React.ReactNode
}

export function StandardComponent({
  children,
  title = 'Dr.',
}: StandardComponentProps) {
  return (
    <div>
      {title}: {children}
    </div>
  )
}
```

## 组件

### 函数组件

```jsx
export interface ITitleProps {
  title?: string; // 传递的参数 是可选的
}

const Header = ({ title }: ITitleProps) => {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

const App = () => {
  return (
    <>
      <hr />
      <Header title="欢迎你" />
    </>
  );
};
```

```jsx





export interface ITitleProps {
  title?:string
}

const MyText = ()=>{
  return (
    <>副标题</>
  )
}


/**
 * 此时我们的函数参数  是从泛型  FunctionComponent 推断出来的  
 * 虽然看起来和第一个相似 但是 我们可以使用可选的 子组件 children
 * @param 
 */
const Header:FunctionComponent<ITitleProps> = ({ title ,children})=>{
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  )
}

const App = () =>{
  return (
    <>
    <hr/>
    <Header  title="欢迎你" >
      ceshi 
    </Header>
    </>
  )
}

```
### 类组件

#### 一个简单的时钟 显示时间

```jsx

import React, { Component } from 'react'; // 导入函数组件

import * as ReactDOM from "react-dom";

/**
 * 当前时间
 */

export interface ClockState {
  time:Date;
}

/**
 * 通用参数允许我们传入 属性和状态
 */
class App extends Component<{},{time:Date }> {

  /**
   * 设置当前时间
   */
  setNow(){
    this.setState({
      time:new Date() 
    })
  }
  /**
   * 转换时间
   */
  time2Str(time:Date){
    return time.toLocaleTimeString()
  }
  // 在组件挂在之前 我们去设置一下时间
  componentWillMount() {
    this.setNow();
  }
  // 在组件挂在后呢 我们需要每一秒更改一下状态
  componentDidMount(){
    setInterval(() => this.setNow(), 1000);
  }
  // 然后 就是渲染 至页面
  render(){
    return (
      <>
        <p>{this.time2Str(this.state.time)}</p>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("example")
);

```
#### 构造函数

```jsx

export interface ISimpleProps {

}


class Simple extends Component<ISimpleProps,{}>{
  constructor(props:ISimpleProps){
    super(props)
  }
}
```

## 默认属性

```jsx
  static defaultProps = {
    msg: 'Hello everyone!'
  }

```
## 子组件

```jsx

class Simple extends Component {
  render() {
    return <>123</>;
  }
}

class App extends Component {
  render() {
    return <>{this.props.children}</>;
  }
}

ReactDOM.render(
  <App>
    {" "}
    <Simple />{" "}
  </App>,
  document.getElementById("example")
);
```

## 事件 
事件是关键

```jsx

import React, { Component ,MouseEvent } from "react"; // 导入函数组件

import * as ReactDOM from "react-dom";


export class Button extends Component {
  handleClick(event: MouseEvent) {
    console.log(event)
    event.preventDefault();
  }
  
  render() {
    return <button onClick={this.handleClick}>
      {this.props.children}
    </button>
  }
}
ReactDOM.render(
  <Button >点击啊</Button>,
  document.getElementById("example")
);

```
### 限制性事件处理 
可以使用泛型

```jsx

import React, { Component ,MouseEvent } from "react"; // 导入函数组件

import * as ReactDOM from "react-dom";



export class Button extends Component {
  /*
    点击事件限定为  HTMLButton 元素类型
  */
  handleClick(event: MouseEvent<HTMLButtonElement>) {
    console.log(`按钮点击了`)
    event.preventDefault();
  }

  /* 
    泛型可以让我 联合类型 是HTMLButtonElement 或者是 HTMLAnchorElement
  */
  handleAnotherClick(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    event.preventDefault();
    alert('Yeah!');
  }

  render() {
    return <button onClick={this.handleClick}>
      {this.props.children}
    </button>
  }
}


ReactDOM.render(
  <Button >点击啊</Button>,
  document.getElementById("example")
);

```

## 类型校验

```jsx

/**
 * prop-types 中有个 InferProps
 * @param
 */
function Article({ title, id }: InferProps<typeof Article.propTypes>) {
  return (
    <div className="article">
      <h1>{title}</h1>
      <span>{id}</span>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
/**
 * 在ts 的环境中  id 是可选的
 */
Article.defaultProps = {
  id: 20
};

class App extends Component {
  render() {
    return (
      <>
        <Article title="文章" id = {1}  />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("example"));
```

**重心是放在处理属性上**

```jsx

function ArticleList({ children }: InferProps<typeof ArticleList.propTypes>) {
  return <div className="list">{children}</div>;
}

ArticleList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
```

## hooks 用法

```jsx

import React, { FunctionComponent, useState, FC } from "react";
import * as ReactDOM from "react-dom";

// 组件作为数字初始值 
const Counter: FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
  // 我们传递了一个数字
  const [clicks, setClicks] = useState(initial);
  return (
    <>
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </>
  );
};

const App: FC = () => {
  return (
    <>
      <Counter />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("example"));

```

### useState & useEffect

```jsx

import React, { FunctionComponent, useState, FC ,useEffect} from "react";
import * as ReactDOM from "react-dom";



const Simple:FC=()=>{
  

  const [name,setName] =  useState('yayxs')
  const [width,setWidth] = useState(0)
  useEffect(() => {
    
    return () => {
      document.title = `Hello ${name}`;
    }
  }, [name])

  // 事件的派发监听
  useEffect(() => {
    const eventHandler = ()=>{
     setWidth(Number(window.innerWidth))
    }
    window.addEventListener('resize', eventHandler);
    return () => {
      window.removeEventListener('resize', eventHandler);
    }
  }, [name])
  return (
    <>
    <h4>{width}</h4>
    </>
  )
}


const App: FC = () => {
  return (
    <>
      <Simple />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("example"));

```