const INITIAL_STATE = {
  username: "",
  token: null,
  errMessage: null,
};

export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
      };
    case "AUTH_FAILURE":
      return {
        ...state,
        errMessage: action.payload,
      };
    case "AUTH_LOGOUT":
      return {
        username: "",
        token: null,
        errMessage: null,
      };
    default:
      return state;
  }
};
