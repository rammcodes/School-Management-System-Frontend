import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../spinner/Spinner";
import {
  onStudentExamSet,
  getStudentSubjExams,
  setRemainingExamsToNull
} from "../../redux/actions/studentSubjects";
import { Link } from "react-router-dom";

class UncompletedExams extends Component {
  componentWillMount() {
    const { _id } = this.props.loginReducer.userData;
    const { selectedSubject } = this.props.studentSubRed;
    this.props.getStudentSubjExams({ studentId: _id, subjId: selectedSubject });
  }

  componentWillUnmount() {
    this.props.setRemainingExamsToNull();
  }

  onStartExamClick = id => {
    this.props.onStudentExamSet(id);
    this.props.history.push("/studentExam");
  };

  getUncompletedExamsList = () => {
    const { remainingExams } = this.props.studentSubRed;

    if (remainingExams === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    if (remainingExams.length) {
      return (
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Exam Name</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {remainingExams.map((ex, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ex.examName}</td>
                <td>
                  <p
                    onClick={() => this.onStartExamClick(ex._id)}
                    className="btn btn-warning"
                  >
                    start exam
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return <h1 className="faint">No New Exams Found</h1>;
    }
  };

  render() {
    return (
      <div>
        <Link className="btn btn-primary back" to="/studentSubjects">
          go back
        </Link>
        {this.getUncompletedExamsList()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  studentSubRed: state.studentSubRed
});

export default connect(
  mapStateToProps,
  {
    onStudentExamSet,
    getStudentSubjExams,
    setRemainingExamsToNull
  }
)(UncompletedExams);
