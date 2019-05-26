import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudentNotifications } from "../../redux/actions/studentActions";
import Spinner from "./../spinner/Spinner";
import "./StudentNotifications.css";

class StudentNotifications extends Component {
  componentWillMount() {
    const { _id } = this.props.loginReducer.userData;
    const data = { studentId: _id };
    this.props.getStudentNotifications(data);
  }

  getAllNotifications = () => {
    const { studentReducer } = this.props;
    if (studentReducer.allNotifications === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    if (studentReducer.allNotifications.length) {
      return studentReducer.allNotifications.map((n, i) => (
        <div key={i} className="post">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-body mb-3">
                  <div className="row">
                    <div className="col-md-2">
                      <a href="profile.html">
                        <img
                          className="rounded-circle d-none d-md-block"
                          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                          alt=""
                        />
                      </a>
                      <br />
                      <p className="text-center">{n.name}</p>
                    </div>
                    <div className="col-md-10">
                      <p className="lead">{n.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
    } else {
      return <h1 className="zero-n-msg">No Teacher Announcements Yet...!</h1>;
    }
  };

  render() {
    return <div>{this.getAllNotifications()}</div>;
  }
}

const mapStateToProps = state => ({
  studentReducer: state.studentReducer,
  loginReducer: state.loginReducer
});

export default connect(
  mapStateToProps,
  { getStudentNotifications }
)(StudentNotifications);
