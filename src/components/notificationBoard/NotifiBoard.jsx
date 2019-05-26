import React, { Component } from "react";
import {
  getAllTeacherNotifis,
  getTeacherNotifis,
  setCurrentTeacherComm,
  setAllTeacherNotifisToNull
} from "./../../redux/actions/parentActions";

import Spinner from "./../spinner/Spinner";
import { connect } from "react-redux";

class NotifiBoard extends Component {
  componentWillUnmount() {
    this.props.setAllTeacherNotifisToNull();
  }

  componentWillMount() {
    const { currentChildNotifi } = this.props.parentReducer;
    this.props.getAllTeacherNotifis({ childId: currentChildNotifi });
  }

  onListItemClick = id => {
    const { currentChildNotifi } = this.props.parentReducer;
    const data = { childId: currentChildNotifi, teacherId: id };
    this.props.getTeacherNotifis(data);
    this.props.setCurrentTeacherComm(id);
    this.props.history.push("/IndiTeacherMsg");
  };

  getAllNotifis = () => {
    const { allTeacherNotifisList } = this.props.parentReducer;

    return (
      <ul className="list-group">
        {allTeacherNotifisList.map((item, i) => (
          <p
            key={i}
            onClick={() => this.onListItemClick(item.teacherId)}
            className="list-group-item clickable"
          >
            Notifications by Teacher {item.teacherName}
          </p>
        ))}
      </ul>
    );
  };

  render() {
    if (this.props.parentReducer.allTeacherNotifisList === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    return (
      <div>
        <h1 className="faint">All Notification's</h1>
        {this.getAllNotifis()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  parentReducer: state.parentReducer
});

export default connect(
  mapStateToProps,
  {
    getAllTeacherNotifis,
    getTeacherNotifis,
    setCurrentTeacherComm,
    setAllTeacherNotifisToNull
  }
)(NotifiBoard);
