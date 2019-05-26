const initialState = {
  childrenSubjects: null,
  childrenExamResult: null,
  currentChildrenForSubjects: null,
  currentSubjForResult: null
};

const parentSubRed = (state = initialState, action) => {
  switch (action.type) {
    case "SET-CURR-CHILD-FOR-SUBJECTS":
      return {
        ...state,
        currentChildrenForSubjects: action.payload
      };

    case "SET-CHILD-SUBJ-FOR-RESULT":
      return {
        ...state,
        currentSubjForResult: action.payload
      };

    case "GET-CHILDREN-SUBJECTS":
      return {
        ...state,
        childrenSubjects: action.payload
      };

    case "GET-CHILDREN-RESULT":
      return {
        ...state,
        childrenExamResult: action.payload
      };

    case "SET-CHILD-SUBJS-TO-NULL":
      return {
        ...state,
        childrenSubjects: null
      };

    case "SET-CHILD-EXAM-RESULT-TO-NULL":
      return {
        ...state,
        childrenExamResult: null
      };

    case "ON-PARENT-LOGOUT":
      return {
        ...state,
        childrenSubjects: null,
        childrenExamResult: null,
        currentChildrenForSubjects: null,
        currentSubjForResult: null
      };

    default:
      return state;
  }
};

export default parentSubRed;
