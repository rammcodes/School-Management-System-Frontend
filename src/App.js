import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import StudentNotifications from "./components/studentNotifications/StudentNotifications";
import TeacherAnnouncements from "./components/teacherAnnouncements/TeacherAnnouncements";
import RootLogin from "./components/login/RootLogin";
import RootRegister from "./components/register/RootRegister";
import StudentRegister from "./components/register/StudentRegister";
import ParentRegister from "./components/register/ParentRegister";
import TeacherRegister from "./components/register/TeacherRegister";
import StudentLogin from "./components/login/StudentLogin";
import TeacherLogin from "./components/login/TeacherLogin";
import ParentLogin from "./components/login/ParentLogin";
import StudentsList from "./components/studentList/StudentsList";
import MyStudents from "./components/myStudents/MyStudents";
import TeacherComm from "./components/teacherComm/TeacherComm";
import AllChilds from "./components/allChilds/AllChilds";
import MyChilds from "./components/allChilds/MyChilds";
import NotifiByChild from "./components/notificationBoard/NotifiByChild";
import NotifiBoard from "./components/notificationBoard/NotifiBoard";
import IndiTeacherMsg from "./components/notificationBoard/IndiTeacherMsg";
import NewExam from "./components/teacherSubjects/NewExam";
import TeacherSubjects from "./components/teacherSubjects/TeacherSubjects";
import NewSubject from "./components/teacherSubjects/NewSubject";
import StudentSubjects from "./components/studentSubjects/StudentSubjects";
import UncompletedExams from "./components/studentSubjects/UncompletedExams";
import StudentExam from "./components/studentSubjects/StudentExam";
import TeacherSubjectExams from "./components/teacherSubjects/TeacherSubjectExams";
import ExamSubmissions from "./components/teacherSubjects/ExamSubmissions";
import StudentResult from "./components/studentSubjects/StudentResult";
import ChildrenListForSubjs from "./components/parentSubjects/ChildrenListForSubjs";
import ChildrenSubjects from "./components/parentSubjects/ChildrenSubjects";
import ChildrenResult from "./components/parentSubjects/ChildrenResult";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route path="/childrenResult" component={ChildrenResult} />
        <Route path="/childrenSubjects" component={ChildrenSubjects} />
        <Route path="/childrenListForSubjs" component={ChildrenListForSubjs} />
        <Route exact path="/studentResult" component={StudentResult} />
        <Route exact path="/examSubmissions" component={ExamSubmissions} />
        <Route
          exact
          path="/teacherSubjectExams"
          component={TeacherSubjectExams}
        />
        <Route exact path="/studentExam" component={StudentExam} />
        <Route exact path="/uncompletedExams" component={UncompletedExams} />
        <Route exact path="/studentSubjects" component={StudentSubjects} />
        <Route exact path="/newSubject" component={NewSubject} />
        <Route exact path="/newExam" component={NewExam} />
        <Route exact path="/teacherSubjects" component={TeacherSubjects} />
        <Route exact path="/IndiTeacherMsg" component={IndiTeacherMsg} />
        <Route exact path="/notifiBoard" component={NotifiBoard} />
        <Route exact path="/NotifiByChild" component={NotifiByChild} />
        <Route exact path="/allChilds" component={AllChilds} />
        <Route exact path="/myChilds" component={MyChilds} />
        <Route exact path="/TeacherComm" component={TeacherComm} />
        <Route exact path="/teacherStudents" component={MyStudents} />
        <Route
          exact
          path="/studentNotifications"
          component={StudentNotifications}
        />
        <Route
          exact
          path="/teacherAnnouncements"
          component={TeacherAnnouncements}
        />

        <Route exact path="/studentsList" component={StudentsList} />

        <Route exact path="/studentRegister" component={StudentRegister} />
        <Route exact path="/teacherRegister" component={TeacherRegister} />
        <Route exact path="/parentRegister" component={ParentRegister} />
        <Route exact path="/studentLogin" component={StudentLogin} />
        <Route exact path="/teacherLogin" component={TeacherLogin} />
        <Route exact path="/parentLogin" component={ParentLogin} />
        <Route exact path="/rootRegister" component={RootRegister} />
        <Route exact path="/rootLogin" component={RootLogin} />

        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
