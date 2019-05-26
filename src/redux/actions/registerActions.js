import axios from "axios";

export const onStudentRegister = (data, history) => dispatch => {
  axios
    .post("http://localhost:5000/register/student", data)
    .then(res => history.push("/studentLogin"));
};

export const onTeacherRegister = (data, history) => dispatch => {
  axios
    .post("http://localhost:5000/register/teacher", data)
    .then(res => history.push("/teacherLogin"));
};

export const onParentRegister = (data, history) => dispatch => {
  axios
    .post("http://localhost:5000/register/parent", data)
    .then(res => history.push("/parentLogin"));
};
