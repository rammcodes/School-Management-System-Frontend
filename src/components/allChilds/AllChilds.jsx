import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllChildrens,
  onChildrenAdd
} from "../../redux/actions/parentActions";
import Spinner from "../spinner/Spinner";

class AllChilds extends Component {
  componentWillMount() {
    this.props.getAllChildrens();
  }

  isMyChildren = id => {
    const { userProfile } = this.props.loginReducer;
    let isMyChild = userProfile.myChilds.filter(c => c.childId === id);
    if (isMyChild.length) return true;
    return false;
  };

  onAddClick = id => {
    const { _id } = this.props.loginReducer.userData;
    const data = { parentId: _id, childId: id };
    this.props.onChildrenAdd(data);
  };

  getAllChilds = () => {
    const { allChildrens } = this.props.parentReducer;

    if (allChildrens === null) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }

    if (!allChildrens.length) return null;
    let count = 1;
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">First</th>
            <th scope="col">email</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {allChildrens.map((child, i) => {
            if (!this.isMyChildren(child._id)) {
              return (
                <tr key={i}>
                  <th scope="row">{count++}</th>
                  <td>{child.name}</td>
                  <td>{child.email}</td>
                  <td>
                    <button
                      onClick={() => this.onAddClick(child._id)}
                      className="btn btn-success"
                    >
                      add
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    );
  };

  render() {
    return <div>{this.getAllChilds()}</div>;
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
  parentReducer: state.parentReducer
});

export default connect(
  mapStateToProps,
  { getAllChildrens, onChildrenAdd }
)(AllChilds);
