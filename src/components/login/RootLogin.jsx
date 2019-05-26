import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RootLogin.css";

class RootLogin extends Component {
  render() {
    return (
      <div className="full">
        <ul className="list-group">
          <Link to="/studentLogin">
            <li className="list-group-item">Login as Student</li>
          </Link>
          <Link to="/teacherLogin">
            <li className="list-group-item">Login as Teacher</li>
          </Link>
          <Link to="/parentLogin">
            <li className="list-group-item">Login as Parent</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default RootLogin;
