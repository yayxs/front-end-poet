import { createStore, combineReducers, applyMiddleware } from "redux";
// import { counterReducer } from "./reducers";
// import rootReducer from './reducers/index'

// import { infoReducer } from "./reducers/infoReducer";
// import { listReducer } from "./reducers/listReducer";
import { sagaReducer } from "./reducers/sagaReducer";
// 导入saga
import { defaultSaga } from "./sagas/index";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

// const reducer = combineReducers({
//   infoReducer,
//   listReducer,
// });

// 构建store
// const store = createStore(reducer);
const store = createStore(sagaReducer, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(defaultSaga);
export default store;
