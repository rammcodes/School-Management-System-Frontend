import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import teacherReducer from "./teacherReducer";
import studentReducer from "./studentReducer";
import parentReducer from "./parentReducer";
import teacherSubRed from "./teacherSubRed";
import studentSubRed from "./studentSubRed";
import parentSubRed from "./parentSubRed";

export default combineReducers({
  loginReducer,
  teacherReducer,
  studentReducer,
  parentReducer,
  teacherSubRed,
  studentSubRed,
  parentSubRed
});
