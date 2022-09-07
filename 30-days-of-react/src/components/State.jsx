// State: the condition or stage of something at a particular time

// State is an object in react which lets the component re-render when state data changes

// We set an initial state inside the constructor or outside the constructor of a class baased component. We do not direcltly change or mutate the state but we use the setState() method to reset a new state. We can access the state object using this.state and the property name.

import React, { Component } from "react";

export default class State extends Component {
  // declaring state
  state = {
    count: 0,
    image: "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg",
  };

  // Method which add & subtract one to the state
  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };
  subtractOne = () => {
    this.setState({ count: this.state.count - 1 });
  };
  changeAnimal = () => {
    let dogURL =
      "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
    let catURL =
      "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";
    let image = this.state.image === catURL ? dogURL : catURL;
    this.setState({ image });
  };

  render() {
    // accessing the state value
    // const count = this.state.count
    const { count } = this.state;
    return (
      <>
        <div className="state">
          <h1>count: {count}</h1>
          <button onClick={this.addOne}>Add One</button>{" "}
          <button onClick={this.subtractOne}>Subtract One</button>
        </div>
        <div className="animal">
          <img src={this.state.image} alt="animal" />
        </div>
        <button onClick={this.changeAnimal}>change</button>
      </>
    );
  }
}
