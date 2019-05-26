const initialState = {
  mySubjects: null,
  remainingExams: null,
  selectedSubject: null,
  selectedExam: null,
  currExam: null,
  examsResult: null
};

const studentSubRed = (state = initialState, action) => {
  switch (action.type) {
    case "GET-STUDENT-SUBJECTS":
      return {
        ...state,
        mySubjects: action.payload
      };

    case "GET-STUDENT-EXAMS":
      return {
        ...state,
        remainingExams: action.payload
      };

    case "ON-SUBJECT-SET":
      return {
        ...state,
        selectedSubject: action.payload
      };

    case "ON-EXAM-SET":
      return {
        ...state,
        selectedExam: action.payload
      };

    case "GET-STUD-CURR-EXAM":
      return {
        ...state,
        currExam: action.payload
      };

    case "SET-STUD-SUBJECTS-TO-NULL":
      return {
        ...state,
        mySubjects: null
      };

    case "SET-REMAINING-EXAMS-TO-NULL":
      return {
        ...state,
        remainingExams: null
      };

    case "GET-STUDENT-RESULT":
      return {
        ...state,
        examsResult: action.payload
      };

    case "SET-EXAMS-RESULT-TO-NULL":
      return {
        ...state,
        examsResult: null
      };

    case "ON-STUDENT-LOGOUT":
      return {
        ...state,
        mySubjects: null,
        remainingExams: null,
        selectedSubject: null,
        selectedExam: null,
        currExam: null,
        examsResult: null
      };

    default:
      return state;
  }
};

export default studentSubRed;
