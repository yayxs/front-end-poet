const info = {
  name: "yayxs",
};

const infoReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_INFO":
      return {
        ...info,
      };

    default:
      return state;
  }
};

export {
  infoReducer
}