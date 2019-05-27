import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "./../spinner/Spinner";
import {
  getStudentSubjects,
  addStudEduDetails,
  onStudentSubjectSelect,
  setStudSubjectsToNull
} from "../../redux/actions/studentSubjects";

class StudentSubjects extends Component {
  state = {
    field: "btech",
    sem: "1"
  };

  componentWillUnmount() {
    this.props.setStudSubjectsToNull();
  }

  componentWillMount() {
    const { _id } = this.props.loginReducer.userData;
    this.props.getStudentSubjects({ studentId: _id });
  }

  onFieldSelect = e => {
    this.setState({ field: e.target.value });
  };

  onSemesterSelect = e => {
    this.setState({ sem: e.target.value });
  };

  onSubmit = () => {
    const { _id } = this.props.loginReducer.userData;
    let data = {
      studentId: _id,
      field: this.state.field,
      sem: this.state.sem
    };

    this.props.addStudEduDetails(data);
  };

  addDetails = () => {
    return (
      <div style={{ margin: "200px 600px" }}>
        <h1 className="faint">Choose your field</h1>
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
        <h1 className="faint">Choose your Semester</h1>
        <div className="input-group mb-3">
          <select
            className="form-control"
            value={this.state.sem}
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
        <div>
          <p onClick={this.onSubmit} className="btn btn-primary clickable">
            submit
          </p>
        </div>
      </div>
    );
  };

  onSubjExamClick = id => {
    this.props.onStudentSubjectSelect(id);
    this.props.history.push("/uncompletedExams");
  };

  onSubjResultClick = id => {
    this.props.onStudentSubjectSelect(id);
    this.props.history.push("/studentResult");
  };

  getStudSubjs = () => {
    const { mySubjects } = this.props.studentSubRed;

    if (mySubjects === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    if (mySubjects === false) {
      return this.addDetails();
    }

    if (!mySubjects.length)
      return <h1 className="faint">No Subject's Available Yet...!</h1>;

    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Subject Name</th>
            <th scope="col">Field</th>
            <th scope="col">Semester</th>
            <th scope="col">Teacher</th>
            <th scope="col" />
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {mySubjects.map(subj => (
            <tr key={subj._id}>
              <th scope="row">1</th>
              <td>{subj.subjName}</td>
              <td>{subj.field}</td>
              <td>{subj.sem}</td>
              <td>{subj.teacherName}</td>
              <td>
                <p
                  onClick={() => this.onSubjExamClick(subj._id)}
                  className="btn btn-primary clickable"
                >
                  subject exams
                </p>
              </td>
              <td>
                <p
                  onClick={() => this.onSubjResultClick(subj._id)}
                  className="btn btn-success clickable"
                >
                  subject exam result
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  render() {
    return <div>{this.getStudSubjs()}</div>;
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  studentSubRed: state.studentSubRed
});

export default connect(
  mapStateToProps,
  {
    getStudentSubjects,
    addStudEduDetails,
    onStudentSubjectSelect,
    setStudSubjectsToNull
  }
)(StudentSubjects);
