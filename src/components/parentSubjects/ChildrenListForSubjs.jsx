import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrChildForSubjects } from "../../redux/actions/parentSubjects";
import { getMyChildrens } from "../../redux/actions/parentActions";
import Spinner from "./../spinner/Spinner";

class ChildrenListForSubjs extends Component {
  componentWillMount() {
    const { _id } = this.props.loginReducer.userData;
    this.props.getMyChildrens({ parentId: _id });
  }
  onChildSubjClick = id => {
    this.props.setCurrChildForSubjects(id);
    this.props.history.push("/childrenSubjects");
  };

  getChildList = () => {
    const { myChildrens } = this.props.parentReducer;

    if (myChildrens === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    if (myChildrens.length === 0) {
      return (
        <div className="faint">
          <h1>You don't have any children yet...!</h1>
        </div>
      );
    }

    return (
      <ul className="list-group">
        {myChildrens.map((c, i) => (
          <li
            key={i}
            onClick={() => this.onChildSubjClick(c.studentId)}
            className="list-group-item clickable"
          >
            Subject's for {c.studentName}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return <div>{this.getChildList()}</div>;
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  parentSubRed: state.parentSubRed,
  parentReducer: state.parentReducer
});

export default connect(
  mapStateToProps,
  { setCurrChildForSubjects, getMyChildrens }
)(ChildrenListForSubjs);
