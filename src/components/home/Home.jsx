import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1
                  className="display-3 mb-4"
                  style={{ fontFamily: "cursive" }}
                >
                  School-Time
                </h1>
                <p className="lead">
                  Your school is your 2nd Home. Always stay connected with
                  it...!
                </p>
                <hr />
                <Link to="/rootRegister" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/rootLogin" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
