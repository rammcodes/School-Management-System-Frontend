import React, { Component } from "react";
import "./TeacherAnnouncements.css";
import ExistingAnnouncements from "./ExistingAnnouncements";
import { connect } from "react-redux";
import {
  postNewAnnouncement,
  getTeacherAnnouncements
} from "./../../redux/actions/teacherActions";

class TeacherAnnouncements extends Component {
  state = {
    announcementText: "",
    newPostSubmit: false
  };

  onAnnouncementText = event => {
    this.setState({ announcementText: event.target.value });
  };

  onSubmit = () => {
    const { _id } = this.props.loginReducer.userData;
    const data = { teacherId: _id, text: this.state.announcementText };
    this.props.postNewAnnouncement(data);
    this.props.getTeacherAnnouncements({ teacherId: _id });
    this.setState({ announcementText: "" });
  };

  render() {
    return (
      <div>
        <div className="post-form mb-3">
          <div className="card card-info">
            <div className="card-header bg-info text-white">
              Create a new announcement for all your existing students...!
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputText1"
                    aria-describedby="textHelp"
                    placeholder="enter announcement text here...!"
                    value={this.state.announcementText}
                    onChange={this.onAnnouncementText}
                  />
                </div>
                <h3
                  onClick={this.onSubmit}
                  type="submit"
                  className="btn btn-dark"
                >
                  create
                </h3>
              </form>
            </div>
          </div>
        </div>
        <ExistingAnnouncements />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer
});

export default connect(
  mapStateToProps,
  { postNewAnnouncement, getTeacherAnnouncements }
)(TeacherAnnouncements);
