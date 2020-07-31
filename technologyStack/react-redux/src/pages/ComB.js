import React, { Component } from "react";
import { connect } from "react-redux";

class ComB extends Component {
  handleClick = () => {
    this.props.getList();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>获取列表</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.listReducer)
  // return state
  return {
    ...state.listReducer
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getList: () => {
      const actionCreator = {
        type: "GET_LIST",
      };
      dispatch(actionCreator);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComB);
