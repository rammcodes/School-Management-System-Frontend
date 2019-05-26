import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";
import "./MyStudents.css";
import {
  getTeacherStudents,
  onStudentRemove,
  getTeacherCommWithPar,
  setCurrStudParCommId,
  setMyStudentsToNull
} from "../../redux/actions/teacherActions";

class MyStudents extends Component {
  componentWillUnmount() {
    this.props.setMyStudentsToNull();
  }

  componentWillMount() {
    const { _id } = this.props.loginReducer.userData;
    this.props.getTeacherStudents({ teacherId: _id });
  }

  onRemoveClick = id => {
    const { _id } = this.props.loginReducer.userData;
    const data = { studentId: id, teacherId: _id };
    this.props.onStudentRemove(data);
    this.props.getTeacherStudents({ teacherId: _id });
  };

  getTeacherComm = id => {
    const { _id } = this.props.loginReducer.userData;
    this.props.getTeacherCommWithPar({ teacherId: _id, studentId: id });
    this.props.setCurrStudParCommId(id);
  };

  getMyStudents = () => {
    const { teacherReducer } = this.props;

    if (teacherReducer.myStudents === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    if (teacherReducer.myStudents.length) {
      return (
        <tbody>
          {teacherReducer.myStudents.map((student, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{student.studentName}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  onClick={() => this.getTeacherComm(student.studentId)}
                  to="/TeacherComm"
                >
                  message to parent
                </Link>
              </td>
              <td>
                <p
                  onClick={() => this.onRemoveClick(student.studentId)}
                  className="btn btn-danger"
                >
                  remove
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      );
    } else {
      return <h1 className="faint">No Student's Found...!</h1>;
    }
  };

  render() {
    const { teacherReducer } = this.props;

    if (teacherReducer.myStudents === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    if (!teacherReducer.myStudents.length) {
      return (
        <div className="zero-stud-msg">
          <h1>No Student's Found...!</h1>
        </div>
      );
    }

    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Name</th>
            <th scope="col" />
            <th scope="col" />
          </tr>
        </thead>
        {this.getMyStudents()}
      </table>
    );
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  teacherReducer: state.teacherReducer
});

export default connect(
  mapStateToProps,
  {
    getTeacherStudents,
    onStudentRemove,
    getTeacherCommWithPar,
    setCurrStudParCommId,
    setMyStudentsToNull
  }
)(MyStudents);
