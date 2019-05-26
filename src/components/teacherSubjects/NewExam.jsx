import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewExam } from "../../redux/actions/teacherSubjects";
import { Link } from "react-router-dom";
import "./NewExam.css";

class NewExam extends Component {
  state = {
    examName: "",
    questions: [],
    question: "",
    options: [],
    optionText: "",
    addQue: false,
    addOpt: false
  };

  onQuestionAllow = () => {
    this.setState({ addQue: true });
  };

  onExamNameInput = e => {
    this.setState({ examName: e.target.value });
  };

  onQuestionText = e => {
    this.setState({ question: e.target.value });
  };

  onQuestionAdd = () => {
    let questions = [...this.state.questions];
    let que = this.state.question;
    let options = this.state.options;
    let queData = { que, options };
    questions.push(queData);
    this.setState({ questions, question: "", options: [] });
  };

  onOptionAllow = () => {
    this.setState({ addOpt: true });
  };

  onOptionText = e => {
    this.setState({ optionText: e.target.value });
  };

  onOptionSubmit = () => {
    let options = [...this.state.options];

    let optData = {
      optionNum: options.length + 1,
      val: this.state.optionText
    };

    options.push(optData);
    this.setState({ options, optionText: "", addOpt: false });
  };

  onMainSubmit = () => {
    const { currentSubjForExam } = this.props.teacherSubRed;
    const { _id } = this.props.loginReducer.userData;
    let data = {
      teacherId: _id,
      subjId: currentSubjForExam,
      examName: this.state.examName,
      examQues: this.state.questions
    };
    this.props.addNewExam(data);
    alert("Exam Created Successfully :)");
    this.props.history.push("/teacherSubjects");
  };

  getQuestionInput = () => {
    if (this.state.addQue) {
      return (
        <div style={{ margin: "50px 600px" }}>
          <h1 className="faint">Exam Name</h1>
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="text"
              value={this.state.examName}
              onChange={this.onExamNameInput}
              placeholder="enter exam name here..."
            />
          </div>
          <h1 className="faint">Enter Your Question</h1>
          <div className="input-group mb-3">
            <input
              className="form-control"
              placeholder="enter your question here..."
              type="text"
              onChange={this.onQuestionText}
              value={this.state.question}
            />
          </div>
          {this.state.options.length ? (
            <div>
              <p
                style={{
                  fontSize: "10px",
                  marginBottom: "10px",
                  border: "1px solid black",
                  borderRadius: "5px"
                }}
              >
                options to these question
              </p>
              {this.state.options.map((opt, i) => (
                <div key={i}>
                  <span>
                    <p className="btn btn-warning">{i + 1}</p>
                    <p className="btn btn-success">{opt.val}</p>
                  </span>
                </div>
              ))}
            </div>
          ) : null}
          {this.state.addOpt ? (
            <div>
              <h1 className="faint">
                Enter option {this.state.options.length + 1}
              </h1>
              <div className="input-group mb-3">
                <input
                  placeholder="enter your option here..."
                  className="form-control"
                  type="text"
                  onChange={this.onOptionText}
                  value={this.state.optionText}
                />
                <p onClick={this.onOptionSubmit} className="btn btn-success">
                  add option
                </p>
              </div>
            </div>
          ) : (
            <p
              style={{ marginRight: "20px" }}
              onClick={this.onOptionAllow}
              className="btn btn-success"
            >
              new option
            </p>
          )}

          <span>
            <p
              style={{ marginRight: "20px" }}
              onClick={this.onQuestionAdd}
              className="btn btn-primary clickable"
            >
              add question
            </p>
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <p
            style={{ margin: "200px 600px" }}
            onClick={this.onQuestionAllow}
            className="btn btn-primary"
          >
            add questions for the exam
          </p>
        </div>
      );
    }
  };

  getCreatedQuestions = () => {
    const { questions } = this.state;

    if (!questions.length) return null;

    return (
      <div>
        <h1 className="faint">Your current questions here !</h1>
        {questions.map((que, i) => {
          return (
            <div className="indi-que" key={i}>
              <h4 className="que">
                {i + 1}. {que.que}
              </h4>
              {que.options.map((opt, i) => {
                return (
                  <div style={{ marginRight: "20px" }}>
                    <p
                      style={{ marginRight: "3px" }}
                      className="btn btn-warning"
                    >
                      {i + 1}
                    </p>
                    <p className="btn btn-success">{opt.val}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <Link className="btn btn-primary back" to="/teacherSubjects">
          go back
        </Link>
        <div>{this.getQuestionInput()}</div>
        <div>{this.getCreatedQuestions()}</div>
        {this.state.questions.length >= 1 ? (
          <div>
            <p
              onClick={this.onMainSubmit}
              style={{ marginRight: "20px" }}
              className="btn btn-success"
            >
              submit my questions
            </p>
          </div>
        ) : null}
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
  { addNewExam }
)(NewExam);
