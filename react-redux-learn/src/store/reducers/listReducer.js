const listArr = [
  {
    id: 1,
    con: "耳机",
  },
];

const listReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_LIST":
      return {
        listArr: [...listArr],
      };

    default:
      return state;
  }
};

export {
  listReducer
}