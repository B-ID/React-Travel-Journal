import React, { Component } from "react";

export default class State2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      styles: {
        backgroundColor: 'skyblue',
        color: ''
      },
      backgroundColor: 'pink'
    }
  }
 
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return `${month} ${date}, ${year}`;
  }

  addOne = () => this.setState({ count: this.state.count + 1 })
  subtractOne = () => this.setState({ count: this.state.count - 1 })
  handleTime = () => alert(this.showDate(new Date()))
  greetPeople = () => alert('Welcome to 30 Days of React Challenge, 2022')
  changeBackground = (e) => {
    console.log('i got clicked')
    // The only place where you can assign this.state is the constructor

    // Find out how to change the background color
    // console.log(backgroundColor)
    const colors = ['red', 'skyblue', 'yellow', 'pink', 'magenta', 'maroon', 'indigo']
    const randomNumber = Math.floor((Math.random() * colors.length))
    let randomColor = colors[randomNumber]
    console.log(randomColor)
    this.setState({ backgroundColor: randomColor })
    // this.setState({ styles: {...this.state.styles, [backgroundColor]: 'red'} })
  }

  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
    const user = { ...data.author, image: "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg"}

    return (
      <div style={{backgroundColor: this.state.backgroundColor}} className="state2">
        <Header data={data} />
        <Main 
        user={user}
        techs={techs}
        handleTime={this.handleTime}
        greetPeople={this.greetPeople}
        changeBackground={this.changeBackground}
        addOne={this.addOne}
        subtractOne={this.subtractOne}
        count={this.state.count}
        />
        <Footer date={date}/>
      </div>

    );
  }
}

// Function to show month date year


// UserCard Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header style={this.props.styles}>
        <div className="header-wrapper">
          <h1>Checking the props in the class constructor</h1>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <h4>
            {firstName} {lastName}
          </h4>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

const Count = ({ count, addOne, subtractOne }) => (
  <div>
    <h1>{count}</h1>
    <Button text='-1' onClick={subtractOne} style={buttonStyles} />
    <Button text='+1' onClick={addOne} style={buttonStyles} />
  </div>
);


// Techlist class based component
class TechList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { techs } = this.props
    const techsFormatted = techs.map(tech => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main ClassBased Component
class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      subtractOne
    } = this.props
    return (
      <div className="main-wrapper">
        <p>Prequisite to get started React JS:</p>
        <ul>
          <TechList techs ={techs } />
        </ul>
        <UserCard user={user} />
        <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
        <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
        <Button text='Change Background' onClick={changeBackground} style={buttonStyles} />
        <Count count={count} addOne={addOne} subtractOne={subtractOne}/>
      </div>
    )
  }
}

// Footer ClassBased component
class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { date } = this.props
    return (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright {date.getFullYear()}</p>
      </div>
    </footer>
    )
  }
}

// AFTER WATCHING THROUGH YOUR REACT COURSE, REVISIT THE REACT DOCS FOR BETTER UNDERSTANDING.