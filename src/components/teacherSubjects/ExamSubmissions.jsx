import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "./../spinner/Spinner";
import {
  postResultForStudent,
  getExamSubmissions,
  setAllSubmissionsToNull
} from "../../redux/actions/teacherSubjects";
import "./ExamSubmissions.css";
import { Link } from "react-router-dom";

class ExamSubmissions extends Component {
  state = {
    val: {
      index: null,
      percent: ""
    }
  };

  componentWillMount() {
    const { currentSubjForExam, currentExam } = this.props.teacherSubRed;
    this.props.getExamSubmissions({
      subjId: currentSubjForExam,
      examId: currentExam
    });
  }

  componentWillUnmount() {
    this.props.setAllSubmissionsToNull();
  }

  onPercentInput = e => {
    let val = { ...this.state.val };

    val.index = e.target.name;
    val.percent = e.target.value;

    this.setState({ val });
  };

  onPercentSubmit = (i, studentId) => {
    if (this.state.val.index == i) {
      const { currentSubjForExam, currentExam } = this.props.teacherSubRed;
      let data = {
        subjId: currentSubjForExam,
        examId: currentExam,
        studentId,
        percent: this.state.val.percent
      };
      this.props.postResultForStudent(data);
    } else {
      alert("Please Enter Value For The Student Percentage :)");
    }
  };

  getAllSubmissions = () => {
    const { allSubmissions } = this.props.teacherSubRed;

    if (allSubmissions === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    if (allSubmissions.length) {
      return (
        <div>
          {allSubmissions.map((subm, i) => (
            <div className="individual-sub" key={i}>
              <p style={{ fontSize: "25px" }} className="faint">
                Submission from {subm.studentName}
              </p>
              <table
                style={{ margin: "20px auto" }}
                className="table table-dark"
              >
                <thead>
                  <tr>
                    <th scope="col">Sr.</th>
                    <th scope="col">Question Number</th>
                    <th scope="col">Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {subm.solutions.map(soln => (
                    <tr key={soln._id}>
                      <td>1</td>
                      <td>Question Number {soln.queNo}</td>
                      <td>Student Solution : {soln.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                style={{ width: "1500px", margin: "0px auto" }}
                className="input-group mb-3"
              >
                <input
                  placeholder="enter student percentage here..."
                  value={this.state.val.percent}
                  name={i}
                  type="text"
                  className="form-control"
                  onChange={this.onPercentInput}
                />
                <p
                  onClick={() => this.onPercentSubmit(i, subm.studentId)}
                  className="btn btn-success"
                >
                  submit
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="faint">No New Submissions found...!</h1>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Link className="btn btn-primary back" to="/teacherSubjectExams">
          go back
        </Link>
        {this.getAllSubmissions()}
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
  { postResultForStudent, getExamSubmissions, setAllSubmissionsToNull }
)(ExamSubmissions);
