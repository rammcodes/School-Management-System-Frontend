import React, { Component } from "react";
import { connect } from "react-redux";
import "./AllMessages.css";
import {
  notifiToParent,
  onCommUnmount
} from "../../redux/actions/teacherActions";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";

class AllMessages extends Component {
  state = {
    text: ""
  };

  componentWillUnmount() {
    this.props.onCommUnmount();
  }

  onText = e => {
    this.setState({ text: e.target.value });
  };

  onSend = () => {
    const { _id } = this.props.loginReducer.userData;
    const { currStudParCommId } = this.props.teacherReducer;
    let data = {
      teacherId: _id,
      studentId: currStudParCommId,
      msg: this.state.text
    };
    this.props.notifiToParent(data);
    this.setState({ text: "" });
  };

  getCommList = () => {
    const { _id } = this.props.loginReducer.userData;
    const { commWithPar } = this.props.teacherReducer;

    if (commWithPar === null) {
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
          {commWithPar.messages.length ? (
            <div>
              {commWithPar.messages.map(m => {
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
          className="input-group mb-3"
        >
          <input
            style={{ width: "95%" }}
            value={this.state.text}
            onChange={this.onText}
            type="text"
            className="form-control"
            placeholder="type your message here..."
          />
          <div class="input-group-append">
            <button
              onClick={this.onSend}
              className="btn btn-warning"
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
        <Link to="teacherStudents" className="btn btn-primary back">
          go back
        </Link>
        {this.getCommList()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  teacherReducer: state.teacherReducer
});

export default connect(
  mapStateToProps,
  { notifiToParent, onCommUnmount }
)(AllMessages);
