import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getChildrenSubjResult,
  setChildrenExamResultToNull
} from "../../redux/actions/parentSubjects";
import Spinner from "./../spinner/Spinner";
import { Link } from "react-router-dom";

class ChildrenResult extends Component {
  componentWillUnmount() {
    this.props.setChildrenExamResultToNull();
  }

  componentWillMount() {
    const {
      currentChildrenForSubjects,
      currentSubjForResult
    } = this.props.parentSubRed;

    this.props.getChildrenSubjResult({
      studentId: currentChildrenForSubjects,
      subjId: currentSubjForResult
    });
  }

  getChildrenResult = () => {
    const { childrenExamResult } = this.props.parentSubRed;

    if (childrenExamResult === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    if (childrenExamResult.length) {
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
            {childrenExamResult.map((res, i) => (
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
        <Link to="/childrenSubjects" className="btn btn-primary back">
          go back
        </Link>
        {this.getChildrenResult()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  parentSubRed: state.parentSubRed
});

export default connect(
  mapStateToProps,
  { getChildrenSubjResult, setChildrenExamResultToNull }
)(ChildrenResult);
