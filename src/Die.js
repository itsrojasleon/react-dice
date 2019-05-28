import React, { Component } from "react";

export default class Die extends Component {
  render() {
    return (
      <i
        className={`fas fa-dice-${this.props.face} ${
          this.props.rolling ? "shaking" : ""
        }`}
      />
    );
  }
}
