// ********** CONDITIONAL RENDERING ***********
/*
Conditional rendering is a way to render different JSX or Component at
different conditions. WE can implement conditional rendering using regular if and
else statement, tenary operator and &&.
*/
import React, { Component } from "react";

// Button Component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: "3px auto",
  cursor: "pointer",
  fontSize: 22,
  color: "white",
};

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    loggedIn: false,
    techs: ['HTML', 'CSS', 'JavaScript'],
    message: 'Click show time or Greet people to change me',
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };
  greetPeople = () => {
    let message = 'Welcome to 30 Days or React challenge'
    this.setState({ message })
  }

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 9, 2020",
    };

    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    // conditional rendering using if and else statement

    // let status
    // let text

    // if(this.state.loggedIn) {
    //     status = <h3>Welcome to 30 Days of React</h3>
    //     text = 'Logout'
    // } else {
    //     status = <h3>Please Login</h3>
    //     text = "Login"
    // }

    // Conditional Rendering using Tenary Operator
    // let status = this.state.loggedIn ? (
    //     <h1>Wecome to 30 Days of React</h1>
    // ) : (
    //     <h3>Please Login</h3>
    // )

    let text;
    // In addition to JSX we can also conditionally render a component
    const Login = () => {
      return (
        <div>
          <h3>Please Login</h3>
        </div>
      );
    };
    const Welcome = () => (
      <div>
        <h3>Welcome to 30 Days of React</h3>
      </div>
    );

    const profile = {
      nickName: 'IceKay',
      age: 22,
      bio: 'Software Developer',
      city: 'Lagos'
    }
    const User = ({ profile: { nickName, age, bio, city } }) => (
      <>
        <h3>nickName: {nickName}</h3> 
        <h3>age: {age}</h3>
        <h3>bio: {bio}</h3>
        <h4>city: {city}</h4>
      </>
    )

   

 
    // Destructuring the state
    const { loggedIn, techs, message } = this.state

    const status = this.state.loggedIn ? <Welcome /> : <Login />;

    return (
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName}
          {lastName}
        </p>
        <small>{date}</small>
        <p>Select a country for your next holiday</p>
        {status}
        <Button text={loggedIn ? 'Logout' : 'Login'} onClick={this.handleLogin} style={buttonStyles} />
        {/* // Conditional rendering using && operator */}
        {techs.length === 3 && (
            <p>You have all the prequisite courses to get started with React</p>
        )}
        {!loggedIn && (
            <p>
                Please login to access more information about 30 Days of React 
                challenge
            </p>
        )}
        {this.state.message}
        <Button text={'greetPeople'} onClick={this.greetPeople} style={buttonStyles} />
       <User profile={profile} /> 

      </div>
    );
    
  }
}
