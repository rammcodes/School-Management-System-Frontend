import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewSubject } from "../../redux/actions/teacherSubjects";
import "./NewSubject.css";

class NewExam extends Component {
  state = {
    subjName: "",
    field: "btech",
    semester: "1"
  };

  onSubjNameInput = e => {
    this.setState({ subjName: e.target.value });
  };

  onFieldSelect = e => {
    this.setState({ field: e.target.value });
  };

  onSemesterSelect = e => {
    this.setState({ semester: e.target.value });
  };

  onAdd = () => {
    const { _id } = this.props.loginReducer.userData;
    const { subjName, field, semester } = this.state;
    let subjData = {
      teacherId: _id,
      subjName,
      field,
      sem: semester
    };
    let history = this.props.history;
    this.props.addNewSubject(subjData, history);
  };

  getNewSubjTemp = () => {
    return (
      <div style={{ margin: "200px 600px" }} clasName="per-form">
        <h1 style={{ margin: "50px auto", width: "600px" }} className="head">
          Create a New Subject
        </h1>
        <span>
          Subject Name :
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="text"
              value={this.state.subjName}
              onChange={this.onSubjNameInput}
            />
          </div>
        </span>
        <span>
          Choose Field :
          <div className="input-group mb-3">
            <select
              className="form-control"
              value={this.state.field}
              onChange={this.onFieldSelect}
            >
              <option value="btech">btech</option>
              <option value="pharmacy">pharmacy</option>
              <option value="biotech">biotech</option>
            </select>
          </div>
        </span>
        <span>
          Choose Semester :
          <div className="input-group mb-3">
            <select
              className="form-control"
              value={this.state.semester}
              onChange={this.onSemesterSelect}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
        </span>
        <p onClick={this.onAdd} className="btn btn-primary clickable">
          add
        </p>
      </div>
    );
  };

  render() {
    return <div>{this.getNewSubjTemp()}</div>;
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  teacherSubRed: state.teacherSubRed
});

export default connect(
  mapStateToProps,
  { addNewSubject }
)(NewExam);
