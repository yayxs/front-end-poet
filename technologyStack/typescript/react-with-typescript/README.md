## 前言

> 本篇参考 [TypeScript and React](https://fettblog.eu/typescript-react/)

我们写`react`项目的打开方式有多种，那本篇我们将站在`TypeScript` 的角度逆向分析，我们该怎么去优雅的用**ts** 描述`React`，想必你一定会有所收获

### 版本

开篇我们是需要告知我们的`package.json` 中一些核心依赖的版本（这在不同的版本也许是不同的效果）

### 思路

整体思路是依着`TypeScript` 的基础上 然后构建一个 `React` 应用，这里参考 ts 以及 webpack 的 **官方官方官方**文档

## 准备开始

为了节约大家的时间，首先在阅读下方的文章之前需要 打开几个网站

- [https://www.typescriptlang.org/](https://www.typescriptlang.org/) 注意是 ORG ORG
- [https://webpack.js.org/](https://webpack.js.org/) 注意是 ORG

然后你需要自己跟着 ts 的官网描述搭建一个 `webpack` + `TypeScript` + `React.js` 的初始化项目，也许[https://www.typescriptlang.org/docs/handbook/react-&-webpack.html](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) 能帮到你，简陋的 `tsconfig.json` 文件大致是这样的。不得不提的是

- 我们可以安装 `webpack-cli`
- 可以通过 `npx webpack -w` 来监听`index.html` 文件的修改

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "jsx": "react",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "lib": ["dom", "es2015"]
  },
  "include": ["./src/**/*"]
}
```

## 文件的导入方式

这里我们可以不使用之前的方式,如下

```jsx
import * as React from "react";
```

## 组件 Components

### 无状态组件（函数式）

在`js` 环境下，一个简单的`Button` 组件，

```jsx
// 绑定元素“children”隐式具有“any”类型。
// 绑定元素“handleClick”隐式具有“any”类型
const Button = ({ onClick: handleClick, children }) => (
  <button onClick={handleClick}>{children}</button>
);
```

这就需要我们对其进行描述，

```jsx
type Props = {
  onClick(e: MouseEvent<HTMLElement>): void  // 这里是点击事件的类型 HTMLElement泛型是个ele元素
  children?: ReactNode // 而接收的children 是个react中的 node节点（也就是所谓的Dom或者组件等）
 }

const Button = ({ onClick: handleClick, children }:Props) => (
  <button onClick={handleClick}>{children}</button>
)

```

还记不记得，在本文的开篇我们一起说了，一些依赖包，那么`@types/react` 中就替我们声明了一些优雅的描述,比如说`SFC` 这里就已经预设了 `children` 我们每次不用再去指定 `children` 的类型

```jsx
type Props = { onClick(e: MouseEvent<HTMLElement>): void };

const Button: SFC<Props> = ({ onClick: handleClick, children }) => (
  <button onClick={handleClick}>{children}</button>
);
```

也就是说我们可以通过 `import React, { SFC} from "react";` 其中 `SFC` 以及有我们的 `传入的组件`（这里指 children）

或者是这样的，你也可以看下下面的代码（这里我们讨论下最常见的组件属性传值）

```jsx
import React from "react";
import PropTypes from "prop-types"; // 引入类型的描述

export function ChildCom({ children, title = "我将从父组件传过来" }) {
  return (
    <div>
      {title}: {children}
    </div>
  );
}

ChildCom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
```

```jsx

import * as React from 'react'

// 定义一个接口用来描述我们即将接收到的属性也好或者是组件节点也好
export interface ChildComProps {
  title?: string // 传递的参数 是可选的
  children: React.ReactNode // ReactNode 这里我们上边提到了
}

export function ChildCom({
  children,
  title = '我将从父组件传过来',
}: ChildComProps) {
  return (
    <div>
      {title}: {children}
    </div>
  )
}
```

我们接着看

```jsx
export interface ITitleProps {
  title?: string;
}

const MyText = () => {
  return <>副标题</>;
};

/**
 * 此时我们的函数参数  是从泛型  FunctionComponent 推断出来的
 * 虽然看起来和第一个相似 但是 我们可以使用可选的 子组件 children
 * @param
 */
const Header: FunctionComponent<ITitleProps> = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

const App = () => {
  return (
    <>
      <hr />
      <Header title="欢迎你">ceshi</Header>
    </>
  );
};
```

或者我们可以使用`React.FC`

```jsx
interface AppProps {
  value?: string;
}
// React.FC 的意思是说 FunctionComponent 如果使用`React.FC` 的话，内含有 children ,
// 这样我们可以直接使用 children
const App:React.FC<AppProps> = ({ value = '' , children}) => {
  return <></>;
};
```

### 有状态组件（calss 类）

既然是有状态的组件，或者一个开始，我们会想到`计数器` `时钟` ，因为案例虽小，但是足以说明我们的问题

#### 一个计数器（此处如此美观代码参见[https://juejin.im/post/5b07caf16fb9a07aa83f2977](https://juejin.im/post/5b07caf16fb9a07aa83f2977)）

```jsx
// 为了防止 state被修改 所以我们可以通过如下的方式设置为只读的
const initialState = { clicksCount: 0 }; // 初始化
type State = Readonly<typeof initialState>; // 这里我们的state是不可直接进行修改，不是吗

/**
 * 这里我们注意：<object,State>
 * 泛型的第一个参数 一般是指的 props （props是对象类型所以咱们可以暂时 object）
 *      第二参数 一般是  状态 state
 */
class Counter extends Component<object, State> {
  readonly state: State = initialState; // 这里是状态
  // 不要忘了 render 方法 用来渲染视图
  render() {
    const { clicksCount } = this.state;

    return (
      <>
        <button onClick={this.handleIncrement}>加加加</button>
        <button onClick={this.handleDecrement}>减减减</button>
        <p>你点击了我{clicksCount}</p>
      </>
    );
  }
  private handleIncrement = () => this.setState(incrementClicksCount);
  private handleDecrement = () => this.setState(decrementClicksCount);

}

const incrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount + 1,
});
const decrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount - 1,
});
```
#### 一个简单的时钟，用来显示时间

```jsx
import React, { Component } from "react"; // 导入函数组件

import * as ReactDOM from "react-dom";

/**
 * 当前时间
 */

export interface ClockState {
  time: Date;
}

/**
 * 通用参数允许我们传入 属性和状态
 */
class App extends Component<{}, { time: Date }> {
  /**
   * 设置当前时间
   */
  setNow() {
    this.setState({
      time: new Date(),
    });
  }
  /**
   * 转换时间
   */
  time2Str(time: Date) {
    return time.toLocaleTimeString();
  }
  // 在组件挂在之前 我们去设置一下时间
  componentWillMount() {
    this.setNow();
  }
  // 在组件挂在后呢 我们需要每一秒更改一下状态
  componentDidMount() {
    setInterval(() => this.setNow(), 1000);
  }
  // 然后 就是渲染 至页面
  render() {
    return (
      <>
        <p>{this.time2Str(this.state.time)}</p>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("example"));
```

我们通过上述的方式，去设置只读的`state` ，那如果有自己定义的复杂类型的话，就需要我们换种方式了
```jsx
export default interface IUser {
  name: string;
  id: number;
  age: number;
}

interface IState {
  list: IUser[];
  total: number;
}

class Simple extends Component{
  
}
```

#### 构造函数

```jsx
export interface ISimpleProps {}

class Simple extends Component<ISimpleProps, {}> {
  constructor(props: ISimpleProps) {
    super(props);
  }
}
```


### 泛型组件


## 默认属性 defaultProps
我们可以通过 defaultProps 来定义一个组件的默认属性
```jsx
  static defaultProps = {
    msg: 'Hello everyone!'
  }

```


## 事件处理

我们无时无刻都在与事件打交道

```jsx
import React, { Component, MouseEvent } from "react"; // 导入函数组件

import * as ReactDOM from "react-dom";

export class Button extends Component {
  handleClick(event: MouseEvent) {
    console.log(event);
    event.preventDefault();
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>;
  }
}
ReactDOM.render(<Button>点击啊</Button>, document.getElementById("example"));
```


### 常见事件

```jsx
const App = () => {
  // 指的是鼠标点击的事件
  const onClick: React.MouseEventHandler<HTMLInputElement> = (e) => {
    console.log(e.currentTarget.value);
  };
  // React.ChangeEventHandler
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.currentTarget.value);
  };
  // React.FocusEventHandler
  const onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    console.log(e.currentTarget.value);
  };
  return <input onClick={onClick} onChange={onChange} onFocus={onFocus} />;
};

```
### 限制性事件处理

可以使用泛型

```jsx
import React, { Component, MouseEvent } from "react"; // 导入函数组件

import * as ReactDOM from "react-dom";

export class Button extends Component {
  /*
    点击事件限定为  HTMLButton 元素类型
  */
  handleClick(event: MouseEvent<HTMLButtonElement>) {
    console.log(`按钮点击了`);
    event.preventDefault();
  }

  /* 
    泛型可以让我 联合类型 是HTMLButtonElement 或者是 HTMLAnchorElement
  */
  handleAnotherClick(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    event.preventDefault();
    alert("Yeah!");
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>;
  }
}

ReactDOM.render(<Button>点击啊</Button>, document.getElementById("example"));
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
  id: 20,
};

class App extends Component {
  render() {
    return (
      <>
        <Article title="文章" id={1} />
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

## hooks声明用法

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
关于 `useState` 我们可以通过
 - 泛型传参
 - 自动推断

```jsx
import React, { FunctionComponent, useState, FC, useEffect } from "react";
import * as ReactDOM from "react-dom";

const Simple: FC = () => {
  const [name, setName] = useState("yayxs"); // state的类型string 自动推断出来是 字符串类型
  const [sex,SetSex ] = useState<string>() // 类型 为 string | undefined
  const [width, setWidth] = useState(0);
  const [state,setState ] = useState<string | null >() // state的类型为 string | null
  useEffect(() => {
    return () => {
      document.title = `Hello ${name}`;
    };
  }, [name]);

  // 事件的派发监听
  useEffect(() => {
    const eventHandler = () => {
      setWidth(Number(window.innerWidth));
    };
    window.addEventListener("resize", eventHandler);
    return () => {
      window.removeEventListener("resize", eventHandler);
    };
  }, [name]);
  return (
    <>
      <h4>{width}</h4>
    </>
  );
};

const App: FC = () => {
  return (
    <>
      <Simple />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("example"));
```

### useContext

```jsx
// 上下文中有个字符串类型的 属性
export const lanContext = React.createContext({ lan: "en" });

const Simple: FC = () => {
  const { lan } = useContext(lanContext);
  return (
    <>
      <h4>{lan}</h4>
    </>
  );
};
```

### useRef

```jsx
type Value = { value:string }
const App = ()=>{
    // 其中 ref 是 存值的作用
  // const ref = useRef<Value>({ value: "" })
  // ref 是html 元素
  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <div ref={ref} ></div>
    </>
  )
}
```

```jsx
function Simple() {
  // 用null 初始化 虽然初始化 是 null 但是 尝试去寻找 HTMLInputElement 类型的元素
  const inputEl = useRef < HTMLInputElement > null;
  const ref = useRef(""); // ref.current的类型为 string
  // 使用泛型
  const handleClick = () => {
    // 如果存在的话，才使聚焦
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };
  return (
    <>
      {/* inputEl也只可与输入元素一起使用 */}
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

### useMemo

```jsx
/**
 * 我们可以通过使用useEffect 然后传入一些参数来影响函数的执行
 * useMemo做类似的事情。
 * 假设我们有计算量大的方法，并且只想在它们的参数更改时运行它们，
 * 而不是每次组件更新时都运行它们。useMemo返回记忆的结果，并且仅在参数更改时才执行回调函数。
 */
```

### useCallback

### useReducer

```jsx
// 首先是类型定义

type ActionType = {
  type: "reset" | "decrement" | "increment", // 联合类型
};

type StateType = {
  count: number,
};
const initialState = { count: 0 };

function reducer(state: StateType, action: ActionType) {
  // 确保我们正确的设置相关的情况
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter({ initialCount = 0 }) {
  /**
   * 参数一 reducer函数
   * 参数二 初始状态
   */
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

## Render props and child render props

## Context

```jsx
/**
 * 上下文API 允许在全局级别共享数据
 *  - provider 一个提供者 提供数据传入到子级
 *  - Consumer 消费者 使用传递来的数据
 */

// 1 上下文 定义类型
type ContextProps = {
  flag: boolean,
  lan: string,
  theme: string,
};

// 1 创建上下文
// export const AppContext =  React.createContext({
//   flag:true,
//   lan:'cn',
//   theme:'dark'
// })
export const AppContext = React.createContext < Partial < ContextProps >> {};
// 2 Provide context

const App = () => {
  return (
    <AppContext.Provider
      value={{
        lan: "de",
        flag: true,
        theme: "light",
      }}
    >
      <Header />
    </AppContext.Provider>
  );
};

// 3 Consume context

const Header = () => {
  return (
    <AppContext.Consumer>
      {({ flag }) => {
        if (flag) {
          return <h1>Logged in!</h1>;
        }
        return <h1>You need to sign in</h1>;
      }}
    </AppContext.Consumer>
  );
};
```
