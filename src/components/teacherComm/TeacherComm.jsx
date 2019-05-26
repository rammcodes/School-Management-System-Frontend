import React, { Component } from "react";
import { connect } from "react-redux";
import AllMessages from "./AllMessages";
import "./TeacherComm.css";

class TeacherComm extends Component {
  state = {};
  render() {
    return (
      <div>
        <AllMessages />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(TeacherComm);
