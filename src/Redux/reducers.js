const INITIAL_STATE = {
  username: "",
  errMsg: null,
};

export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        username: action.payload.username,
      };
    case "AUTH_FAILURE":
      return {
        ...state,
        errMsg: action.payload,
      };
    case "AUTH_LOGOUT":
      return {
        username: "",
        errMsg: null,
      };
    default:
      return state;
  }
};
