const initialState = {
  authToken: null, // Stores the user's authentication token
  loader: false,   // Loading state
  user: {},        // User details
  schools: [],     // List of schools
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authToken: action.payload, // Store token in state
      };
    case "USER":
      return {
        ...state,
        user: action.payload, // Update user details
      };
    case "SCHOOLS":
      return {
        ...state,
        schools: action.payload, // Update schools list
      };
    case "LOADER":
      return {
        ...state,
        loader: action.payload, // Toggle loader state
      };
    case "LOGOUT":
      return {
        ...initialState, // Reset state on logout
        schools: state.schools, // Persist schools
      };
    default:
      return state;
  }
};
