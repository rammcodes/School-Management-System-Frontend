import axios from "axios";

export const getStudentSubjects = data => dispatch => {
  console.log("stuudd", data);
  axios
    .post("http://localhost:5000/student/getStudentSubjects", data)
    .then(res =>
      dispatch({
        type: "GET-STUDENT-SUBJECTS",
        payload: res.data
      })
    );
};

export const addStudEduDetails = data => dispatch => {
  axios
    .post("http://localhost:5000/student/addStudEduDetails", data)
    .then(res =>
      dispatch({
        type: "GET-STUDENT-SUBJECTS",
        payload: res.data
      })
    );
};

export const onStudentSubjectSelect = data => {
  return {
    type: "ON-SUBJECT-SET",
    payload: data
  };
};

export const getStudentSubjExams = data => dispatch => {
  axios.post("http://localhost:5000/student/getNewExams", data).then(res =>
    dispatch({
      type: "GET-STUDENT-EXAMS",
      payload: res.data
    })
  );
};

export const onStudentExamSet = data => {
  return {
    type: "ON-EXAM-SET",
    payload: data
  };
};

export const getIndiExam = data => dispatch => {
  axios.post("http://localhost:5000/student/getIndiExam", data).then(res =>
    dispatch({
      type: "GET-STUD-CURR-EXAM",
      payload: res.data
    })
  );
};

export const onStudentExamSubmission = data => dispatch => {
  axios.post("http://localhost:5000/teacher/exam-submission", data);
};

export const setStudSubjectsToNull = () => {
  return {
    type: "SET-STUD-SUBJECTS-TO-NULL"
  };
};

export const setRemainingExamsToNull = () => {
  return {
    type: "SET-REMAINING-EXAMS-TO-NULL"
  };
};

export const getStudentResult = data => dispatch => {
  axios.post("http://localhost:5000/student/getStudentResult", data).then(res =>
    dispatch({
      type: "GET-STUDENT-RESULT",
      payload: res.data
    })
  );
};

export const setExamsResultToNull = () => {
  return {
    type: "SET-EXAMS-RESULT-TO-NULL"
  };
};
