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
