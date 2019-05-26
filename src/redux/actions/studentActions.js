import axios from "axios";

export const getStudentNotifications = data => dispatch => {
  axios
    .post("http://localhost:5000/student/studentNotifications", data)
    .then(res =>
      dispatch({
        type: "GET-STUDENT-NOTIFICATIONS",
        payload: res.data
      })
    );
};
