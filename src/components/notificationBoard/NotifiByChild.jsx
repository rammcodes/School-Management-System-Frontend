import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMyChildrens,
  setCurrentChildNotifi,
  currChildNotifiUnmount
} from "../../redux/actions/parentActions";
import Spinner from "../spinner/Spinner";
import "./NotifiByChild.css";

class NotifiByChild extends Component {
  componentWillMount() {
    const { _id } = this.props.loginReducer.userData;
    this.props.getMyChildrens({ parentId: _id });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.parentReducer.currentChildNotifi) {
      nextProps.history.push("/notifiBoard");
    }
  }

  onChildNotifiClick = id => {
    this.props.setCurrentChildNotifi(id);
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

    if (!myChildrens.length) {
      return (
        <h1 className="faint">You Don't Have Any Children Selected Yet...!</h1>
      );
    }

    return (
      <ul className="list-group">
        {myChildrens.map((c, i) => (
          <li
            key={i}
            onClick={() => this.onChildNotifiClick(c.studentId)}
            className="list-group-item clickable"
          >
            Notification's for {c.studentName}
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
  parentReducer: state.parentReducer
});

export default connect(
  mapStateToProps,
  { getMyChildrens, setCurrentChildNotifi, currChildNotifiUnmount }
)(NotifiByChild);
