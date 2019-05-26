import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getIndiExam,
  onStudentExamSubmission
} from "../../redux/actions/studentSubjects";
import Spinner from "./../spinner/Spinner";
import "./StudentExam.css";

class StudentExam extends Component {
  state = {
    solutions: []
  };

  componentWillMount() {
    const { selectedSubject, selectedExam } = this.props.studentSubRed;
    this.props.getIndiExam({ subjId: selectedSubject, examId: selectedExam });
  }

  onOptionClick = (index, optNum) => {
    console.log("state", this.state.solutions);
    console.log("par", index, optNum);
    let solutions = [...this.state.solutions];
    solutions[index] = { queNo: index + 1, solution: optNum };

    this.setState({ solutions });
  };

  onExamSubmit = () => {
    const {
      currExam,
      selectedSubject,
      selectedExam
    } = this.props.studentSubRed;
    const { _id } = this.props.loginReducer.userData;
    if (this.state.solutions.length === currExam.examQues.length) {
      let data = {
        subjId: selectedSubject,
        examId: selectedExam,
        studentId: _id,
        solutions: this.state.solutions
      };

      this.props.onStudentExamSubmission(data);
      alert("Submitted Successfully :)");
      this.props.history.push("/studentSubjects");
    } else {
      alert("Provide Solution For Each Question :(");
    }
  };

  getExam = () => {
    const { currExam } = this.props.studentSubRed;

    if (currExam === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    return (
      <div>
        <h1 className="faint">{currExam.examName}</h1>
        {currExam.examQues.map((que, index) => (
          <div key={index}>
            <div className="que">
              <h1>{que.que}</h1>
              {que.options.map(opt => (
                <div className="input-group mb-3 opt">
                  <span>
                    <input
                      name={index}
                      value={opt.val}
                      type="radio"
                      onClick={() => this.onOptionClick(index, opt.optionNum)}
                      className="form-control"
                    />
                    <p>{opt.val}</p>
                  </span>{" "}
                </div>
              ))}
            </div>
          </div>
        ))}
        <p onClick={this.onExamSubmit} className="btn btn-primary clickable">
          submit
        </p>
      </div>
    );
  };

  render() {
    return <div>{this.getExam()}</div>;
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  studentSubRed: state.studentSubRed
});

export default connect(
  mapStateToProps,
  { getIndiExam, onStudentExamSubmission }
)(StudentExam);
