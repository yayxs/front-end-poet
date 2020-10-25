const sagaReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SUCCESS':

      console.log(action)
      return action
  
    default:
      break;
  }
  return Object.assign(state,{},action);
};

export { sagaReducer };
