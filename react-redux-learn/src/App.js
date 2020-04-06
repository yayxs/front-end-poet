import React from "react";
import Home from "./pages/Home";
import List from "./pages/List";
import Detail from "./pages/Detail";
import ComA from "./pages/ComA";
import ComB from "./pages/ComB";
import store from "./store/index";
import SagaCom from "./pages/SagaCom";
// 导入provider组件 统一维护
import { Provider } from "react-redux";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <SagaCom />
      </Provider>
    </>
  );
};
export default App;
