const initialState = {
  userCategory: null,
  userData: null,
  userProfile: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON-STUDENT-LOGIN":
      return {
        ...initialState,
        userCategory: "student",
        userData: action.payload.data,
        userProfile: action.payload.profile
      };
    case "ON-TEACHER-LOGIN":
      return {
        ...initialState,
        userCategory: "teacher",
        userData: action.payload.data,
        userProfile: action.payload.profile
      };
    case "ON-PARENT-LOGIN":
      return {
        ...initialState,
        userCategory: "parent",
        userData: action.payload.data,
        userProfile: action.payload.profile
      };
    case "ON-PROFILE-UPDATION":
      return {
        ...state,
        userProfile: action.payload
      };
    case "ON-STUDENT-LOGOUT":
      return {
        ...state,
        userCategory: null,
        userData: null,
        userProfile: {}
      };
    case "ON-TEACHER-LOGOUT":
      return {
        ...state,
        userCategory: null,
        userData: null,
        userProfile: {}
      };
    case "ON-PARENT-LOGOUT":
      return {
        ...state,
        userCategory: null,
        userData: null,
        userProfile: {}
      };
    default:
      return state;
  }
};

export default loginReducer;
