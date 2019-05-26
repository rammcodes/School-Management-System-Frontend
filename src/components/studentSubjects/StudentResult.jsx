import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../spinner/Spinner";
import {
  getStudentResult,
  setExamsResultToNull
} from "../../redux/actions/studentSubjects";
import { Link } from "react-router-dom";

class StudentResult extends Component {
  componentWillUnmount() {
    this.props.setExamsResultToNull();
  }

  componentWillMount() {
    const { _id } = this.props.loginReducer.userData;
    const { selectedSubject } = this.props.studentSubRed;
    let data = { studentId: _id, subjId: selectedSubject };
    this.props.getStudentResult(data);
  }

  getStudentResult = () => {
    const { examsResult } = this.props.studentSubRed;

    if (examsResult === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    if (examsResult.length) {
      return (
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Exam Name</th>
              <th>Exam Result</th>
            </tr>
          </thead>
          <tbody>
            {examsResult.map((res, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{res.examName}</td>
                <td>{res.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return (
        <h1 className="faint">No Result Available for this Subject...!</h1>
      );
    }
  };

  render() {
    return (
      <div>
        <Link className="btn btn-primary back" to="/studentSubjects">
          go back
        </Link>
        {this.getStudentResult()}
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
  { getStudentResult, setExamsResultToNull }
)(StudentResult);
