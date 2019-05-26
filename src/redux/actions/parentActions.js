import axios from "axios";

export const getAllChildrens = () => dispatch => {
  axios.post("http://localhost:5000/parent/getAllChilds").then(res =>
    dispatch({
      type: "GET-ALL-CHILDS",
      payload: res.data
    })
  );
};

export const getMyChildrens = data => dispatch => {
  axios.post("http://localhost:5000/parent/my-childs", data).then(res =>
    dispatch({
      type: "GET-PARENT-CHILDS",
      payload: res.data
    })
  );
};

export const setCurrentChildNotifi = data => {
  return {
    type: "SET-CURRENT-CHILD-NOTIFI",
    payload: data
  };
};

export const onChildrenAdd = data => dispatch => {
  axios.post("http://localhost:5000/parent/add-child", data).then(res =>
    dispatch({
      type: "ON-PROFILE-UPDATION",
      payload: res.data
    })
  );
};

export const onChildrenRemove = data => dispatch => {
  axios.post("http://localhost:5000/parent/remove-child", data).then(res =>
    dispatch({
      type: "ON-PROFILE-UPDATION",
      payload: res.data
    })
  );
};

export const getAllTeacherNotifis = data => dispatch => {
  axios.post("http://localhost:5000/parent/allTeacherNotifis", data).then(res =>
    dispatch({
      type: "GET-ALL-TEACHER-NOTIFIS",
      payload: res.data
    })
  );
};

export const getTeacherNotifis = data => dispatch => {
  console.log("acc", data);
  axios.post("http://localhost:5000/parent/getTeacherNotifis", data).then(res =>
    dispatch({
      type: "GET-INDI-TEACHER-NOTIFIS",
      payload: res.data
    })
  );
};

export const replyToTeacherNotifi = data => dispatch => {
  axios.post("http://localhost:5000/parent/replyToNotifi", data).then(res =>
    dispatch({
      type: "GET-INDI-TEACHER-NOTIFIS",
      payload: res.data
    })
  );
};

export const setCurrentTeacherComm = data => {
  return {
    type: "SET-CURR-TEACHER-COMM",
    payload: data
  };
};

export const currTeachNotifiUnMount = () => {
  return {
    type: "CURR-TEACH-NOTIFI-UNMOUNT"
  };
};

export const setAllTeacherNotifisToNull = () => {
  return { type: "TEACHER-NOTIFIS-TO-NULL" };
};

export const currChildNotifiUnmount = () => {
  return {
    type: "CURR-CHILD-NOTIFI-UNMOUNT"
  };
};
