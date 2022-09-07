// JavaScript is an Object oriented programming language. Everything
// in JavaScript is an object, with properties and methods. We create a class to create an object. A class is the blueprint for creating an object. 

// when we instantiate a class, we create an object. the class defines properties and behavior of an object.

// Once we create a class we can create object from it whenever we want. Creating an object from a class is called INSTANTIATION. A class allows to create many objects. this helps to reduce amount of code and repetition of code


class Person {
    // code goes here
}

// class INSTANTIATION
const person = new Person()
console.log(person)

// Class Constructor
// The constructor is a builtin function which allows us to create a blueprint for our object. The constructor starts with a keyword constructor followed  by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use THIS keyword to attach the constructor parameter with the class

class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const persons = new Person1()
console.log(persons)

const personn1 = new Person1('Bukola', 'Idowu')
console.log(personn1)

// Creating many 

const person2 = new Person1('Bayo', 'Idowu')
const person3 = new Person1('Fade', 'Idowu')
const person4 = new Person1('Bolutife', 'Idowu')

class Profile {
    constructor(firstName, lastName, age, country, city) {
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}

const person5 = new Profile('Bukola', 'Idowu', 140, 'Nigeria', 'Lagos')

console.log(person5)

// Default values with constructor
class Profile2 {
    constructor(
        firstName = 'Asabeneh',
        lastName = 'Yetayeh',
        age = 250,
        country = 'Finland',
        city = 'Helsinki'
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        // Properties with initial value
        this.score = 0
        this.skills = []
    }
    getfullName() {
        const fullName = `${this.firstName} ${this.lastName}`
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getfullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''
        let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. He knows ${formattedSkills} `

        return info
    }
    // Static methods
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }

    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

const person6 = new Profile2() // it will take the default values
const person7 = new Profile2('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person6)
console.log(person7)

// Class Methods
console.log(person6.getfullName())
console.log(person7.getfullName())

// Properties with initial value
// Amethod could be a regular method or a getter or a setter

// GETTER
// The get method allow us to access value from the object. We write a get method using the keyword GET followed by a function. Instead of accessing properties directly from the object we use getter to get the value.
console.log(person6.getScore)
console.log(person6.getScore)

console.log(person7.getSkills)
console.log(person7.getSkills)

// SETTER
// The setter method allow us to modify the value of certain properties. We write a setter method using keyword set followed by a function.
person6.setScore = 1
person6.setSkill = 'HTML'
person6.setSkill = 'CSS'
person6.setSkill = 'JavaScript'

person7.setScore = 1
person7.setSkill = 'Planning'
person7.setSkill = 'Managing'
person7.setSkill = 'Organizing'

console.log(person6.score)
console.log(person7.score)

console.log(person6.skills)
console.log(person7.skills)


console.log(person7.getPersonInfo())


// STATIC METHOD
// The static keyword defines a static method for a class. Static methods are not called on instances of the class. Instead, they are called on the class itself. These are utility functions, such as functins to create or clone objects. An example of static method is Date.now() is called directly from the class.

console.log(Profile2.favoriteSkill())
console.log(Profile2.showDateTime())
// NB:  The static methods are methods which can be used as utility functions.

// INHERITANCE
// Using Inheritance we can access all the properties and methods of the parent class. This reduces repetition of code. If you remember, we have a Profile2 parent class and we will create children from it. Our children class could be student, teach etc.

// syntax
// class ChildClassName extends ParentClass {
//     // code goes here
// }

// class Student extends Profile2 {
//     saySomething() {
//         console.log('I am a child of the person class')
//     }
// }


// Overriding methods 
// if we want to ad additional properties and customize methods of the parent class, we need to use the constructor function in the child class too. Inside the constructor function we call the super() function to access all the properties from the parent class. The Profile2 class didn't have gender but now let us give gender property for the child class Student. If the same method name is used in the child class, the parent method will be overidden.

class Student extends Profile2 {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city)
        this.gender = gender
    }


    saySomething() {
        console.log('I am a child of the person class')
    }

    // getfullName() {
    //     const fullName = `${this.firstName} ${this.lastName}`
    //     return fullName
    // }

    getPersonInfo() {
        let fullName = this.getfullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`

        let formattedSkills = skills ? `${pronoun} knows ${skills}` : ''
        let pronoun = this.gender == 'Male' ? 'He' : 'She'
        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        
        return info
    }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 250, 'Finland',  'Helsinki', 'Male')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getfullName())
console.log(s1.getPersonInfo())

const s3 = new Student('Tobi', 'Agbana', 25, 'Nigeria', 'Lagos', 'Male')
console.log(s3.getPersonInfo())