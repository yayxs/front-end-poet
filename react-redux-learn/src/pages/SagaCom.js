import React, { Component } from "react";
import { connect } from "react-redux";
class SagaCom extends Component {
  handleClick = (type) => {
    switch (type) {
      
      case "takeEvery":
        this.props.dispatch({
          type: "takeEvery",
          payload: {
            username: "admin",
            password: "123456",
          },
        });
        break;
      case "takeLatest":
        this.props.dispatch({
          type: "takeLatest",
        });
        break;

      case "throttle":
        this.props.dispatch({
          type: "throttle",
        });
        break;

      default:
        break;
    }
  };
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick("takeEvery")}>
          点击发送takeEvery
        </button>
        <button onClick={() => this.handleClick("takeLatest")}>
          点击发送takeLatest
        </button>
        <button onClick={() => this.handleClick("throttle")}>
          点击发送throttle
        </button>
      </div>
    );
  }
}

export default connect()(SagaCom);
