import React, { Component } from "react";
import { connect } from "react-redux";
class ComA extends Component {
  handleClick = () => {
    this.props.getInfo();
  };

  render() {
    return (
      <div>
        {/* <h3>{this.props.}</h3> */}
        <button onClick={this.handleClick}>获取信息</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.infoReducer);
  // return {
  //   prop: state.prop,
  // };
  // return state
  return {
    ...state.infoReducer,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getInfo: () => {
      const actionCreator = {
        type: "GET_INFO",
      };

      dispatch(actionCreator);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ComA);
