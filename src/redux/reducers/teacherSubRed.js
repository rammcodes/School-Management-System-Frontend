const initialState = {
  mySubjects: null,
  currentSubjForExam: null,
  subjectExams: null,
  currentExam: null,
  allSubmissions: null
};

const teacherSubRed = (state = initialState, action) => {
  switch (action.type) {
    case "GET-TEACHER-SUBJECTS":
      return {
        ...state,
        mySubjects: action.payload
      };

    case "SET-SUBJ-FOR-EXAM":
      return {
        ...state,
        currentSubjForExam: action.payload
      };

    case "GET-SUBJECT-EXAMS":
      return {
        ...state,
        subjectExams: action.payload
      };

    case "SET-EXAM-FOR-SUBMISSIONS":
      return {
        ...state,
        currentExam: action.payload
      };

    case "GET-EXAM-SUBMISSIONS":
      return {
        ...state,
        allSubmissions: action.payload
      };

    case "SET-MY-SUBJ-TO-NULL":
      return {
        ...state,
        mySubjects: null
      };

    case "SUB-EXAMS-TO-NULL":
      return {
        ...state,
        subjectExams: null
      };

    case "SET-ALL-SUBM-TO-NULL":
      return {
        ...state,
        allSubmissions: null
      };

    case "ON-TEACHER-LOGOUT":
      return {
        ...state,
        mySubjects: null,
        currentSubjForExam: null,
        subjectExams: null,
        currentExam: null,
        allSubmissions: null
      };

    default:
      return state;
  }
};

export default teacherSubRed;
