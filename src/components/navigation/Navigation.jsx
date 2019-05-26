import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { connect } from "react-redux";
import {
  onTeacherLogout,
  onStudentLogout,
  onParentLogout
} from "../../redux/actions/loginActions";

class Navigation extends Component {
  render() {
    const { loginReducer } = this.props;

    if (!loginReducer.userCategory) {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/rootRegister">
                  register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rootLogin">
                  login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }

    if (loginReducer.userCategory === "student") {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/studentNotifications">
            announcements
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/studentSubjects">
                  my-subject's
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={this.props.onStudentLogout}
                  className="nav-link"
                  to="/studentLogin"
                >
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }

    if (loginReducer.userCategory === "teacher") {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/teacherAnnouncements">
            announcements
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/teacherStudents">
                  my-students
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/studentsList">
                  add-students
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teacherSubjects">
                  my-subjects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={this.props.onTeacherLogout}
                  className="nav-link"
                  to="/teacherLogin"
                >
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }

    if (loginReducer.userCategory === "parent") {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link navbar-brand" to="/myChilds">
                  my-children's
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/allChilds">
                  add-children's
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NotifiByChild">
                  Notification
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/childrenListForSubjs">
                  children-subject's
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={this.props.onParentLogout}
                  className="nav-link"
                  to="/parentLogin"
                >
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer
});

export default connect(
  mapStateToProps,
  { onStudentLogout, onTeacherLogout, onParentLogout }
)(Navigation);
