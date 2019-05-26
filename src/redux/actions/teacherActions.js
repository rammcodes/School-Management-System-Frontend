import axios from "axios";

export const getAllStudents = () => dispatch => {
  axios
    .get("http://localhost:5000/teacher/allStudents")
    .then(res =>
      dispatch({
        type: "GET-ALL-STUDENTS",
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getTeacherAnnouncements = data => dispatch => {
  axios
    .post("http://localhost:5000/teacher/announcements", data)
    .then(res =>
      dispatch({
        type: "GET-TEACHER-ANNOUNCEMENTS",
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const postNewAnnouncement = data => dispatch => {
  axios.post("http://localhost:5000/teacher/announcement", data);
};

export const onStudentAdd = data => dispatch => {
  axios.post("http://localhost:5000/teacher/add-student", data).then(res =>
    dispatch({
      type: "ON-PROFILE-UPDATION",
      payload: res.data
    })
  );
};

export const onStudentRemove = data => dispatch => {
  axios.post("http://localhost:5000/teacher/remove-student", data).then(res =>
    dispatch({
      type: "ON-PROFILE-UPDATION",
      payload: res.data
    })
  );
};

export const getTeacherStudents = data => dispatch => {
  axios.post("http://localhost:5000/teacher/my-students", data).then(res =>
    dispatch({
      type: "GET-MY-STUDENTS",
      payload: res.data
    })
  );
};

export const getTeacherCommWithPar = data => dispatch => {
  axios.post("http://localhost:5000/teacher/getTeacherComm", data).then(res =>
    dispatch({
      type: "GET-TEACHER-COMM",
      payload: res.data
    })
  );
};

export const notifiToParent = data => dispatch => {
  axios.post("http://localhost:5000/teacher/notifiToPar", data).then(res =>
    dispatch({
      type: "GET-TEACHER-COMM",
      payload: res.data
    })
  );
};

export const setCurrStudParCommId = data => {
  return {
    type: "SET-CURR-STUD-PAR-COMM-ID",
    payload: data
  };
};

export const onCommUnmount = () => {
  return {
    type: "ON-COMM-UNMOUNT"
  };
};

export const setMyStudentsToNull = () => {
  return {
    type: "SET-MYSTUDENTS-TO-NULL"
  };
};

export const onDeleteAnnouncement = data => dispatch => {
  axios.post("http://localhost:5000/teacher/del-announcement", data);
};
