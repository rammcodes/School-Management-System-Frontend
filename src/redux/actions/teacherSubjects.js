import axios from "axios";

export const getTeacherSubjects = data => dispatch => {
  axios.post("http://localhost:5000/teacher/teacherSubjects", data).then(res =>
    dispatch({
      type: "GET-TEACHER-SUBJECTS",
      payload: res.data
    })
  );
};

export const addNewSubject = (data, history) => dispatch => {
  axios
    .post("http://localhost:5000/teacher/new-subject", data)
    .then(res => history.push("/teacherSubjects"));
};

export const onRemoveSubject = data => dispatch => {
  axios.post("http://localhost:5000/teacher/remove-subject", data).then(res =>
    dispatch({
      type: "GET-TEACHER-SUBJECTS",
      payload: res.data
    })
  );
};

export const setSubjForExam = data => {
  return {
    type: "SET-SUBJ-FOR-EXAM",
    payload: data
  };
};

export const getTeacherSubjExams = data => dispatch => {
  axios.post("http://localhost:5000/teacher/getSubjExamLists", data).then(res =>
    dispatch({
      type: "GET-SUBJECT-EXAMS",
      payload: res.data
    })
  );
};

export const addNewExam = data => dispatch => {
  axios.post("http://localhost:5000/teacher/new-exam", data);
};

export const setExamForSubmissions = data => {
  return {
    type: "SET-EXAM-FOR-SUBMISSIONS",
    payload: data
  };
};

export const getExamSubmissions = data => dispatch => {
  axios
    .post("http://localhost:5000/teacher/getStudExamSubmissions", data)
    .then(res =>
      dispatch({
        type: "GET-EXAM-SUBMISSIONS",
        payload: res.data
      })
    );
};

export const postResultForStudent = data => dispatch => {
  axios.post("http://localhost:5000/teacher/post-result", data).then(res =>
    dispatch({
      type: "GET-EXAM-SUBMISSIONS",
      payload: res.data
    })
  );
};

export const setMySubjectsToNull = () => {
  return {
    type: "SET-MY-SUBJ-TO-NULL"
  };
};

export const setSubExamsToNull = () => {
  return {
    type: "SUB-EXAMS-TO-NULL"
  };
};

export const setAllSubmissionsToNull = () => {
  return {
    type: "SET-ALL-SUBM-TO-NULL"
  };
};
