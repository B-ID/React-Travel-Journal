/**
 An event is an action or occurrence recognized by a software
 */

import React, { Component } from "react";

export default class Events extends Component {
  state = {
    firstName: "",
    message: "",
    key: "",
  };
  handleClick = (e) => {
    // e gives an event object
    // check the value of e using console.log(e)
    this.setState({
      message: "Welcome to the world of events",
    });
  };
  // triggered whenever the mouse moves
  handleMouseMove = (e) => {
    this.setState({ message: "mouse is moving" });
  };
  // to get the value when an input field changes a value
  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      lastName: e.target.value,
    });
  };
  // to get keyboard key code when an input field is pressed
  // it works with input and textarea
  handleKeyPress = (e) => {
    this.setState({
      message:
        `${e.target.value}, has been preessed and the keycode is` + e.charCode,
    });
  };
  // Blurring happens when a mouse leave an input field
  handleBlur = (e) => {
    this.setState({ message: "Input field has been blurred" });
  };
  // This event triggers during a text copy
  handleCopy = (e) => {
    this.setState({
      message: "Using 30 Days of React for commercial purpose is not allowed",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>
          Check copyright permission by copying this text
        </p>
        <p>{this.state.message}</p>
        <label htmlFor="">Test for onKeyPress Event: </label>
        <input type="text" onKeyPress={this.handleKeyPress} />
        <br />

        <label htmlFor="">Test for onBlur Event</label>
        <input type="text" onBlur={this.handleBlur} />

        <form onSubmit={this.handleSubmit}>
          <>
            <label htmlFor="firstName">First Name:</label>
            <input
              onChange={this.handleChange}
              name="firstName"
              value={this.state.value}
            />
          </>
        </form>
      </div>
    );
  }
}