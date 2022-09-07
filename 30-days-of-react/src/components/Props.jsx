// Accessing props in Class components.
// We can access props of a class based component using the keyword This.
import React, { Component } from "react";

export default class Props extends Component {
  constructor(props) {
    super(props);
    // the code inside the constructor runs before any other code
  }

  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>
            {firstName} {lastName}
          </h3>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

