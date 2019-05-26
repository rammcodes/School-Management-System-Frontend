import React, { Component } from "react";
import { connect } from "react-redux";
import "./MyChilds.css";
import Spinner from "./../spinner/Spinner";
import {
  onChildrenRemove,
  getMyChildrens
} from "../../redux/actions/parentActions";

class MyChilds extends Component {
  componentWillMount() {
    const { _id } = this.props.loginReducer.userData;
    this.props.getMyChildrens({ parentId: _id });
  }

  onRemoveClick = id => {
    const { _id } = this.props.loginReducer.userData;
    const data = { parentId: _id, childId: id };
    this.props.onChildrenRemove(data);
    this.props.getMyChildrens({ parentId: _id });
  };

  getMyChilds = () => {
    const { myChildrens } = this.props.parentReducer;

    if (myChildrens.length) {
      return (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Name</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {myChildrens.map((child, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{child.studentName}</td>

                <td>
                  <p
                    onClick={() => this.onRemoveClick(child.studentId)}
                    className="btn btn-danger"
                  >
                    remove
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return (
        <h1 className="faint">You Don't Have Any Children Selected Yet...!</h1>
      );
    }
  };

  render() {
    if (this.props.parentReducer.myChildrens === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    return <div>{this.getMyChilds()}</div>;
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  parentReducer: state.parentReducer
});

export default connect(
  mapStateToProps,
  { onChildrenRemove, getMyChildrens }
)(MyChilds);
