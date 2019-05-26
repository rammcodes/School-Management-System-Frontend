import axios from "axios";

export const onStudentLogin = data => dispatch => {
  axios
    .post("http://localhost:5000/login/student", data)
    .then(res =>
      dispatch({
        type: "ON-STUDENT-LOGIN",
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const onTeacherLogin = data => dispatch => {
  axios
    .post("http://localhost:5000/login/teacher", data)
    .then(res =>
      dispatch({
        type: "ON-TEACHER-LOGIN",
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const onParentLogin = data => dispatch => {
  axios
    .post("http://localhost:5000/login/parent", data)
    .then(res =>
      dispatch({
        type: "ON-PARENT-LOGIN",
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const onStudentLogout = () => {
  return {
    type: "ON-STUDENT-LOGOUT"
  };
};

export const onTeacherLogout = () => {
  return {
    type: "ON-TEACHER-LOGOUT"
  };
};

export const onParentLogout = () => {
  return {
    type: "ON-PARENT-LOGOUT"
  };
};
