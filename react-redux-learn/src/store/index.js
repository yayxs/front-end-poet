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
