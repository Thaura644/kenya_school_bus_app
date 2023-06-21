const initialState = {
  authToken: null,
  loader: false,
  user: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state, //copy all previous states
        authToken: action.payload,
      };
    case "LOADER":
      return {
        ...state, //copy all previous states
        loader: action.payload,
      };
    case "USER":
      return {
        ...state, //copy all previous states
        user: action.payload,
      };
    case "LOGOUT":
      return {
        authToken: null,
      };
    default:
      return state;
  }
};
