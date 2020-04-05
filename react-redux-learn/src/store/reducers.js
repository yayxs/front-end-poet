import { addAction } from "./actions";

// reducer
const counterReducer = (state = { num: 123 }, action) => {
  // console.log(state);
  console.log(action.type);
  // 判断传入的动作是什么类型
  switch (action.type) {
    case "ADD_TYPE":
      console.log(111111);
      // return Object.assign({}, state, action);
      return {
        num: state.num + 1,
      };
    default:
      return state;
  }

  // 啥也不干，返回传进来的state(此时默认的initData)
  //   return state;
};

export { counterReducer };
