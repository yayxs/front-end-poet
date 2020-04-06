const sagaReducer = (state, action) => {
  switch (action.type) {
    case "takeEvery":
      return {};
    default:
      return state;
  }
};

export {sagaReducer};
