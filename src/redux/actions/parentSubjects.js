import axios from "axios";

export const setCurrChildForSubjects = data => {
  return {
    type: "SET-CURR-CHILD-FOR-SUBJECTS",
    payload: data
  };
};

export const getChildrenSubjects = data => dispatch => {
  axios
    .post("http://localhost:5000/parent/getChildrenSubjects", data)
    .then(res =>
      dispatch({
        type: "GET-CHILDREN-SUBJECTS",
        payload: res.data
      })
    );
};

export const setChildSubjForResult = data => {
  return {
    type: "SET-CHILD-SUBJ-FOR-RESULT",
    payload: data
  };
};

export const setChildSubjsToNull = () => {
  return {
    type: "SET-CHILD-SUBJS-TO-NULL"
  };
};

export const setChildrenExamResultToNull = () => {
  return {
    type: "SET-CHILD-EXAM-RESULT-TO-NULL"
  };
};

export const getChildrenSubjResult = data => dispatch => {
  axios
    .post("http://localhost:5000/parent/getChildrenSubjectResult", data)
    .then(res =>
      dispatch({
        type: "GET-CHILDREN-RESULT",
        payload: res.data
      })
    );
};
