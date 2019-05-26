import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "./../spinner/Spinner";
import "./StudentsList.css";
import {
  getAllStudents,
  onStudentAdd
} from "./../../redux/actions/teacherActions";

class StudentsList extends Component {
  state = {
    isEmpty: true
  };

  componentWillMount() {
    this.props.getAllStudents();
  }

  isMyStudent = id => {
    const { userProfile } = this.props.loginReducer;
    let student = userProfile.students.filter(s => s.studentId === id);
    if (student.length) return true;
    return false;
  };

  onAddClick = id => {
    const { _id } = this.props.loginReducer.userData;
    const data = { studentId: id, teacherId: _id };
    this.props.onStudentAdd(data);
  };

  getTableBody = () => {
    const { allStudents } = this.props.teacherReducer;
    if (!allStudents.length) return null;
    let count = 1;
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">First</th>
            <th scope="col">email</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {allStudents.map((student, i) => {
            if (!this.isMyStudent(student._id)) {
              if (this.state.isEmpty) this.setState({ isEmpty: false });
              return (
                <tr key={i}>
                  <th scope="row">{count++}</th>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <button
                      onClick={() => this.onAddClick(student._id)}
                      className="btn btn-success"
                    >
                      add
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    );
  };

  render() {
    if (this.props.teacherReducer.allStudents === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    return <div> {this.getTableBody()}</div>;
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  teacherReducer: state.teacherReducer
});

export default connect(
  mapStateToProps,
  { getAllStudents, onStudentAdd }
)(StudentsList);
