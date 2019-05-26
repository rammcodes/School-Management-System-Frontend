import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getChildrenSubjects,
  setChildSubjForResult,
  setChildSubjsToNull
} from "../../redux/actions/parentSubjects";
import Spinner from "./../spinner/Spinner";
import { Link } from "react-router-dom";

class ChildrenSubjects extends Component {
  componentWillUnmount() {
    this.props.setChildSubjsToNull();
  }

  componentWillMount() {
    const { currentChildrenForSubjects } = this.props.parentSubRed;
    this.props.getChildrenSubjects({ childrenId: currentChildrenForSubjects });
  }

  onSubjResultClick = subjId => {
    this.props.setChildSubjForResult(subjId);
    this.props.history.push("/childrenResult");
  };

  getChildrenSubjects = () => {
    const { childrenSubjects } = this.props.parentSubRed;

    if (childrenSubjects === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    if (childrenSubjects === false) {
      return (
        <h1 className="faint">
          Children Subject's Not Available Because Your Children Has Not
          Submitted His Details Yet...!
        </h1>
      );
    }

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
          </tr>
        </thead>
        <tbody>
          {childrenSubjects.map((subj, i) => (
            <tr key={subj._id}>
              <th scope="row">{i}</th>
              <td>{subj.subjName}</td>
              <td>{subj.field}</td>
              <td>{subj.sem}</td>
              <td>{subj.teacherName}</td>

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
    return (
      <div>
        <Link to="/childrenListForSubjs" className="btn btn-primary back">
          go back
        </Link>
        {this.getChildrenSubjects()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parentSubRed: state.parentSubRed
});

export default connect(
  mapStateToProps,
  { getChildrenSubjects, setChildSubjForResult, setChildSubjsToNull }
)(ChildrenSubjects);
