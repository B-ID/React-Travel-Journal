// *********************** CLASS BASED COMPONENTS ***************************************
/*
Only class based components usd to have state and life cycle methods. However,
after React version 16.8.0, functional components can have state and life cycle
using React Hooks. 
*/

// class Component {
//     constructor(props) {}
// }

// // This is how we make class based components by inheriting from the parent
//
// class Child extends Component {
//     constructor(props) {
//         super(props)
//     }
//



import React, { Component } from 'react'

 /*
 class based react component is a child of React.Component and it has a
 built-in render method and it may have a constructor
 */
 
export default class Header extends Component {

    constructor(props) {
        super(props)
        // the code inside the constructor runs before any other code
    }

    greetPeople = () => {
        alert('Welcome to 30 Days of React Challenge, 2022')
    }

  render() {
    return (
        <header>
        <div className="header-wrapper">
            <h1>Welcome to 30 Days of React</h1>
            <h2>Getting started with React</h2>
            <h3>JavaScript Library</h3>
            <p>Bukola Idowu</p>
            <small>Oct 1, 1986</small>
            <h3>Find out what super(props) does</h3>
            <button onClick={this.greetPeople}>Greet</button>
            
            {/* The invoking or calling of the method triggers when the event occurs. 
            Therefore, wherever you pass a method to an event listener,
             do not invoke the method. (i.e just this.greetPeople and not this.greetPeople with
             the parenthesis ) */}
             
            <Main />
            <Footer date={new Date()}/>
        </div>
    </header>
    )
  }
}

// TechList classBased Component
class TechList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { techs } = this.props
        const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
        return techsFormatted
    }
}

// Main ClassBased Component 
class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const techs = ['HTML', 'CSS', 'JavaScript', 'Tailwind']
        return (
            <main>
                <div className="main-wrapper">
                    <p>Prerequisite to get started with React.js</p>
                    <ul>
                        <TechList techs={techs} />
                    </ul>
                </div>
            </main>
        )
    }

}

// Footer ClassBased Component
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


// Methods in Class based Component
/*
We access methods in class based component. Most of the time, we
write diffferent methods of the parent component and we pass them to 
child components.
*/