import React, { Component } from "react";
import { connect } from "react-redux";
import "./RootLogin.css";
import { onTeacherLogin } from "../../redux/actions/loginActions";

class TeacherLogin extends Component {
  state = {
    email: "",
    password: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginReducer.userData) {
      this.props.history.push("/teacherAnnouncements");
    }
  }

  onEmailInput = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordInput = event => {
    this.setState({ password: event.target.value });
  };

  onSubmit = () => {
    const { email, password } = this.state;
    const data = {
      email,
      password
    };
    this.props.onTeacherLogin(data);
  };

  render() {
    const { onEmailInput, onPasswordInput, onSubmit } = this;
    return (
      <div>
        <div className="app-form">
          <h1 style={{ marginBottom: "30px" }}>Teacher Login</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.state.email}
              onChange={onEmailInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={this.state.password}
              onChange={onPasswordInput}
            />
          </div>
          <button onClick={onSubmit} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer
});

export default connect(
  mapStateToProps,
  { onTeacherLogin }
)(TeacherLogin);
