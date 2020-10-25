import React, {
  FunctionComponent,
  useState,
  FC,
  useEffect,
  useContext,
  useRef,
  useReducer,
  Component,
  MouseEvent,
  ReactNode,
  SFC,
  Fragment, PureComponent
} from "react";
import * as ReactDOM from "react-dom";


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

ReactDOM.render(<App />, document.getElementById("example"));
