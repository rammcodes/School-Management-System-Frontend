import React, { Component } from "react";
import { connect } from "react-redux";
import "./IndiTeacherMsg.css";
import {
  replyToTeacherNotifi,
  currTeachNotifiUnMount
} from "../../redux/actions/parentActions";
import Spinner from "./../spinner/Spinner";
import { Link } from "react-router-dom";

class IndiTeacherMsg extends Component {
  state = {
    text: ""
  };

  onText = e => {
    this.setState({ text: e.target.value });
  };

  componentWillUnmount() {
    this.props.currTeachNotifiUnMount();
  }

  onSend = () => {
    const { _id } = this.props.loginReducer.userData;
    const { currentChildNotifi, currentTeachNotifi } = this.props.parentReducer;
    const data = {
      parentId: _id,
      childId: currentChildNotifi,
      teacherId: currentTeachNotifi,
      msg: this.state.text
    };
    this.props.replyToTeacherNotifi(data);
    this.setState({ text: "" });
  };

  getCommList = () => {
    const { _id } = this.props.loginReducer.userData;
    const { indiTeacherNotifis } = this.props.parentReducer;

    if (indiTeacherNotifis === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    return (
      <div>
        <ul
          style={{
            overflow: "scroll",
            height: "500px",
            width: "1000px",
            margin: "100px auto"
          }}
          className="list-group"
        >
          {indiTeacherNotifis.messages.length ? (
            <div>
              {indiTeacherNotifis.messages.map(m => {
                if (m.senderId === _id) {
                  return <li className="list-group-item myMsg">{m.msg}</li>;
                } else {
                  return <li className="list-group-item">{m.msg}</li>;
                }
              })}
            </div>
          ) : (
            <div className="zero-comm-msg">
              <h1>No Communication Yet...!</h1>
            </div>
          )}
        </ul>

        <div
          style={{ width: "1000px", margin: "0px auto" }}
          class="input-group mb-3"
        >
          <input
            style={{ width: "95%" }}
            value={this.state.text}
            onChange={this.onText}
            type="text"
            class="form-control"
            placeholder="type your message here..."
          />
          <div class="input-group-append">
            <button
              onClick={this.onSend}
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              send
            </button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Link to="/notifiBoard" className="btn btn-primary back">
          go back
        </Link>
        {this.getCommList()}
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
  { replyToTeacherNotifi, currTeachNotifiUnMount }
)(IndiTeacherMsg);
