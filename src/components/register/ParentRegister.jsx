import React, { Component } from "react";
import { connect } from "react-redux";
import { onParentRegister } from "../../redux/actions/registerActions";

class ParentRegister extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  onNameInput = event => {
    this.setState({ name: event.target.value });
  };

  onEmailInput = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordInput = event => {
    this.setState({ password: event.target.value });
  };

  onSubmit = () => {
    const { name, email, password } = this.state;
    const data = { name, email, password };
    this.props.onParentRegister(data, this.props.history);
  };

  render() {
    const { name, email, password } = this.state;
    const { onNameInput, onEmailInput, onPasswordInput, onSubmit } = this;
    return (
      <div>
        <div className="app-form">
          <h1 style={{ marginBottom: "30px" }}>Parent Registeration</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="name"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="emailHelp"
              placeholder="enter name here..."
              value={name}
              onChange={onNameInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
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
              value={password}
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

export default connect(
  null,
  { onParentRegister }
)(ParentRegister);
