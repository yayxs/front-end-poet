import React, { Component } from "react";
import { connect } from "react-redux";
class List extends Component {
  handleClick = () => {
    console.log(this.props);
    this.props.sendAction()
  };
  render() {
    return (
      <div>
        列表页
        <button onClick={this.handleClick}>++++++</button>
      </div>
    );
  }
}

/**
 * 
 * @param {*} dispatch 
 * @param {*} ownProps 
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendAction: () => {
      dispatch({
        type: "ADD_TYPE",
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(List);
