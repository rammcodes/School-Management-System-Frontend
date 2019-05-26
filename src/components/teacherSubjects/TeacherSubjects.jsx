import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getTeacherSubjects,
  onRemoveSubject,
  setSubjForExam,
  setMySubjectsToNull
} from "../../redux/actions/teacherSubjects";
import Spinner from "./../spinner/Spinner";
import { Link } from "react-router-dom";

class TeacherSubjects extends Component {
  componentWillUnmount() {
    this.props.setMySubjectsToNull();
  }

  componentWillMount() {
    const { _id } = this.props.loginReducer.userData;
    this.props.getTeacherSubjects({ teacherId: _id });
  }

  onCreateExamClick = subId => {
    this.props.setSubjForExam(subId);
    this.props.history.push("/newExam");
  };

  onSubjtExamSubmissionsClick = subId => {
    this.props.setSubjForExam(subId);
    this.props.history.push("/teacherSubjectExams");
  };

  onSubjRemove = id => {
    const { _id } = this.props.loginReducer.userData;
    this.props.onRemoveSubject({ subjId: id, teacherId: _id });
  };

  getMySubjectsList = () => {
    const { mySubjects } = this.props.teacherSubRed;

    if (mySubjects === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    if (!mySubjects.length) {
      return (
        <div
          style={{
            margin: "200px auto",
            fontSize: "50px",
            color: "rgba(0,0,0,0.3)"
          }}
        >
          <h1>No Subject's found...!</h1>
        </div>
      );
    }

    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">subject-name</th>
            <th scope="col">semester</th>
            <th scope="col">field</th>
            <th scope="col" />
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {mySubjects.map(sub => {
            return (
              <tr key={sub._id}>
                <td>{1}</td>
                <td>{sub.subjName}</td>
                <td>{sub.sem}</td>
                <td>{sub.field}</td>
                <td>
                  <p
                    onClick={() => this.onCreateExamClick(sub._id)}
                    className="btn btn-primary clickable"
                  >
                    create new exam
                  </p>
                </td>
                <td>
                  <p
                    onClick={() => this.onSubjtExamSubmissionsClick(sub._id)}
                    className="btn btn-primary clickable"
                  >
                    subject exam submissions
                  </p>
                </td>
                <td>
                  <p
                    onClick={() => this.onSubjRemove(sub._id)}
                    className="btn btn-danger clickable"
                  >
                    remove
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  render() {
    return (
      <div>
        {this.getMySubjectsList()}
        <Link className="btn btn-primary" to="/newSubject">
          add new subject
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  teacherSubRed: state.teacherSubRed
});

export default connect(
  mapStateToProps,
  { getTeacherSubjects, setSubjForExam, onRemoveSubject, setMySubjectsToNull }
)(TeacherSubjects);
