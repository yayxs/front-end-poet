const initState = {};

const info = {
  name: "yayxs",
};

const listArr = [
  {
    id: 1,
    con: "耳机",
  },
];
const rootReducer = (state = initState, action) => {
  // console.log(action)
  // return Object.assign({},state,action)

  switch (action.type) {
    case "GET_INFO":
      return {
        ...info,
      };
    case "GET_LIST":
      return {
        listArr: [...listArr],
      };
    default:
      return state;
  }
  // return state
};

export default rootReducer;
