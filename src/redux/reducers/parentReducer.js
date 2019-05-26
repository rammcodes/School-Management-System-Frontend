const initialState = {
  allChildrens: null,
  allTeacherNotifisList: null,
  indiTeacherNotifis: null,
  myChildrens: null,
  currentChildNotifi: null,
  currentTeachNotifi: null
};

const parentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-ALL-CHILDS":
      return {
        ...state,
        allChildrens: action.payload
      };

    case "GET-PARENT-CHILDS":
      return {
        ...state,
        myChildrens: action.payload
      };

    case "GET-ALL-TEACHER-NOTIFIS":
      return {
        ...state,
        allTeacherNotifisList: action.payload
      };

    case "GET-INDI-TEACHER-NOTIFIS":
      return {
        ...state,
        indiTeacherNotifis: action.payload
      };

    case "SET-CURR-TEACHER-COMM":
      return {
        ...state,
        currentTeachNotifi: action.payload
      };

    case "SET-CURRENT-CHILD-NOTIFI":
      return {
        ...state,
        currentChildNotifi: action.payload
      };

    case "CURR-CHILD-NOTIFI-UNMOUNT":
      return {
        ...state,
        currentChildNotifi: null
      };

    case "CURR-TEACH-NOTIFI-UNMOUNT":
      return {
        ...state,
        currentTeachNotifi: null,
        indiTeacherNotifis: null
      };

    case "TEACHER-NOTIFIS-TO-NULL":
      return {
        ...state,
        allTeacherNotifisList: null
      };

    case "ON-PARENT-LOGOUT":
      return {
        ...state,
        allChildrens: null,
        allTeacherNotifisList: null,
        indiTeacherNotifis: null,
        myChildrens: null,
        currentChildNotifi: null,
        currentTeachNotifi: null
      };

    default:
      return state;
  }
};

export default parentReducer;
