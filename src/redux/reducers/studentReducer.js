const initialState = {
  allNotifications: null
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-STUDENT-NOTIFICATIONS":
      return {
        ...state,
        allNotifications: action.payload
      };
    case "ON-STUDENT-LOGOUT":
      return {
        ...state,
        allNotifications: null
      };
    default:
      return state;
  }
};

export default studentReducer;
