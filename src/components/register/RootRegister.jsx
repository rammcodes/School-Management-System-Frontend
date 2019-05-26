import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RootRegister.css";

class RouteRegister extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul className="list-group">
          <Link to="/studentRegister">
            <li className="list-group-item">Register as Student</li>
          </Link>
          <Link to="/teacherRegister">
            <li className="list-group-item">Register as Teacher</li>
          </Link>
          <Link to="/parentRegister">
            <li className="list-group-item">Register as Parent</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default RouteRegister;
