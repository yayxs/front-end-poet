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
} from "react";
import * as ReactDOM from "react-dom";

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void;
  color?: string;
};

const Button: SFC<Props> = ({ onClick: handleClick, color, children }) => (
  <button style={{ color }} onClick={handleClick}>
    {children}
  </button>
);

const App = () => {
  const handleClick = ()=>{
    console.log(`点击了按钮`)
  }
  return (
    <>
      <Button onClick={handleClick }>按钮</Button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("example"));
