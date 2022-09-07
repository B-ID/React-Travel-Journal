/*
Forms are used to collect data from a user. 

For input fields our focus is more of onChange event type which triggers whenever
an input field data changes. INput field has by default a memory to store input data
but in this section we control that using state and we implement a
controlled input
 */

import React, { Component } from "react";

export default class Forms extends Component {
  // GETTING DATA FROM AN INPUT FIELD
  state = {
    firstName: "",
    lastName: "",
    country: "",
    title: "",
  };
  handleChange = (e) => {
    // const value = e.target.value;
    // this.setState({ firstName: value });

    /*
    We can get the name and value like this: e.target.name, e.target.value
    but we can also destructure name and value from e.target  
    const name = e.target.name
    const value = e.target.value
    */
    console.log(e.target);
    const { name, value } = e.target;
    // [variablename] to use a variable name as a key in the object
    // name refers to the name attribute of the inpt elements
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    /*
    e.preventDefault() stops the default behavior of the form element
    specifically refreshing of page
    */
    e.preventDefault();

    /*
   this is the place where we connect backend api 
   to send the data to the database
   */

    console.log(this.state);
  };
  render() {
    /*
   accessing the state value and this value will be injected to the input in the value
   attribute. 
    */
   // const firstName = this.state.firstName;

    
    // accessing the state value by destructuring the state
    const { firstName, lastName, title, country } = this.state;
    return (
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="FirstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <h1>{firstName}</h1>
        {/* // We usually use form to handle user information.  */}

        {/* Getting multiple input data from form
       in this section we will develop a small form which collect user information.
       Our user is a student. We use a parent form element and certain number of input
       elements to collect user information. In addition to that we will add an event listener
       for the form (onSubmit) and for the inputs (onChange).  
        */}
        <div className="form">
          <h3>Add Student</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="last Name"
                value={lastName}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={this.handleChange}
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
