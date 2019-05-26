import React, { Component } from "react";
import "./ExistingAnnouncements.css";
import { connect } from "react-redux";
import Spinner from "./../spinner/Spinner";
import {
  getTeacherAnnouncements,
  onDeleteAnnouncement,
  postNewAnnouncement
} from "../../redux/actions/teacherActions";

class ExistingAnnouncements extends Component {
  state = {
    currentEdit: null,
    editText: null
  };

  componentWillMount() {
    const { _id } = this.props.loginReducer.userData;
    const data = { teacherId: _id };
    this.props.getTeacherAnnouncements(data);
  }

  onDelAnnouncement = id => {
    const { _id } = this.props.loginReducer.userData;
    const data = { announcementId: id };
    this.props.onDeleteAnnouncement(data);
    this.props.getTeacherAnnouncements({ teacherId: _id });
  };

  onEditAnnouncement = id => {
    this.setState({ currentEdit: id });
  };

  onEditText = event => {
    this.setState({ editText: event.target.value });
  };

  onEditCancel = () => {
    this.setState({ currentEdit: null });
  };

  onEdit = id => {
    const { _id } = this.props.loginReducer.userData;
    const data = {
      teacherId: _id,
      text: this.state.editText,
      announcementId: id
    };
    this.props.postNewAnnouncement(data);
    this.props.getTeacherAnnouncements({ teacherId: _id });
    this.setState({ currentEdit: null });
  };

  getAllExistingAnnouncements = () => {
    const { teacherReducer } = this.props;
    if (teacherReducer.announcements === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }
    if (teacherReducer.announcements.length) {
      return teacherReducer.announcements.map((data, i) => {
        if (!(this.state.currentEdit === data._id)) {
          return (
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
                          <p className="text-center">{data.name}</p>
                        </div>
                        <div className="col-md-10">
                          <p className="lead">{data.text}</p>
                          <div>
                            <p
                              className="btn btn-danger row"
                              onClick={() => this.onDelAnnouncement(data._id)}
                            >
                              delete
                            </p>
                          </div>
                          <div>
                            <p
                              className="btn btn-danger row"
                              onClick={() => this.onEditAnnouncement(data._id)}
                            >
                              edit
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={i} className="post">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card card-body mb-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input onChange={this.onEditText} type="text" />
                          <p
                            className="btn btn-primary"
                            onClick={() => this.onEdit(data._id)}
                          >
                            save
                          </p>
                          <p
                            onClick={this.onEditCancel}
                            className="btn btn-danger"
                          >
                            cancel
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });
    } else {
      return (
        <h1 className="zero-ann-msg">No Announcements made by you yet...!</h1>
      );
    }
  };

  render() {
    return <div>{this.getAllExistingAnnouncements()}</div>;
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  teacherReducer: state.teacherReducer
});

export default connect(
  mapStateToProps,
  { getTeacherAnnouncements, postNewAnnouncement, onDeleteAnnouncement }
)(ExistingAnnouncements);
