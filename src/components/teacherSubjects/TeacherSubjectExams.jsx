import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getTeacherSubjExams,
  setExamForSubmissions,
  setSubExamsToNull
} from "./../../redux/actions/teacherSubjects";
import Spinner from "./../spinner/Spinner";
import { Link } from "react-router-dom";

class TeacherSubjectExams extends Component {
  componentWillMount() {
    const { currentSubjForExam } = this.props.teacherSubRed;
    this.props.getTeacherSubjExams({ subjId: currentSubjForExam });
  }

  componentWillUnmount() {
    this.props.setSubExamsToNull();
  }

  studentSubmissionsClick = examId => {
    this.props.setExamForSubmissions(examId);
    this.props.history.push("/examSubmissions");
  };

  getExamsList = () => {
    const { subjectExams } = this.props.teacherSubRed;

    if (subjectExams === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Exam Name</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {subjectExams.map((ex, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{ex.examName}</td>
              <td>
                <p
                  onClick={() => this.studentSubmissionsClick(ex._id)}
                  className="btn btn-success clickable"
                >
                  student submissions
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  render() {
    return (
      <div>
        <Link className="btn btn-primary back" to="/teacherSubjects">
          go back
        </Link>
        {this.getExamsList()}
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
  { getTeacherSubjExams, setExamForSubmissions, setSubExamsToNull }
)(TeacherSubjectExams);
