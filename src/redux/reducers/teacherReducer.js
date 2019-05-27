const initialState = {
  allStudents: null,
  announcements: null,
  myStudents: null,
  commWithPar: null,
  currStudParCommId: null
};

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-ALL-STUDENTS":
      return { ...state, allStudents: action.payload };
    case "GET-TEACHER-ANNOUNCEMENTS":
      return { ...state, announcements: action.payload };
    case "GET-MY-STUDENTS":
      return { ...state, myStudents: action.payload };
    case "GET-TEACHER-COMM":
      return {
        ...state,
        commWithPar: action.payload
      };
    case "SET-CURR-STUD-PAR-COMM-ID":
      return {
        ...state,
        currStudParCommId: action.payload
      };

    case "ON-COMM-UNMOUNT":
      return {
        ...state,
        currStudParCommId: null,
        commWithPar: null
      };

    case "SET-MYSTUDENTS-TO-NULL":
      return {
        ...state,
        myStudents: null
      };

    case "ON-TEACHER-LOGOUT":
      return {
        ...state,
        allStudents: null,
        announcements: null,
        myStudents: null,
        commWithPar: null,
        currStudParCommId: null
      };

    default:
      return state;
  }
};

export default teacherReducer;
