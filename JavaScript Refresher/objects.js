// creating an empty object
const persons = {}

/*
The value of propertis or keys could b e a string, number, boolean, an object, null, undefined of a (method)
*/
//NB: A method is a property with a function value

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+3584545454545',
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location)

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location'])

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])

// creating Object methods
/*
Now, the person object  has getFullName properties. The getFullName is function inside the person object ans we call it an object method. The THIS key word refers to the object itself. We can use the word THIS to access the values of different properties of the object. We CANNOT use an arrow function as an object method because the word this refers to the window inside an arrow function instead of the object itself.

*/

console.log(person.getFullName())

// SETTING NEW KEYS IN AN OBJECT
person.isMarried = true
person.skills.push('java')
person.title = 'teacher'

person.getPersonInfo = function () {
    let skillsWithoutlastSkill = this.skills.slice(0, this.skills.length - 1).join(', ')
    let lastSkill = this.skills[this.skills.length - 1]

    let skills = `${skillsWithoutlastSkill} and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\n He teaches ${skills}`

    return statement
}

console.log(person)
console.log(person.getPersonInfo())

//  OBJECT METHODS
// NB: the this keyword refers to the object itself and it can be used to access values of different properties of the object.

// Object methods: Object.assign, Object.keys, Object.values, Object.entries

// 1.  Object.assign: To copy an object without modifying the original object

const copyPerson = Object.assign({}, person)
console.log(copyPerson)

// 2. Object.keys: To get the keys or properties of an object as an array.


const keys = Object.keys(copyPerson)
console.log(keys)

// 3. Object.values: To get values of an object as an array
const values = Object.values(copyPerson)
console.log(values)

// 4. Object.entries: To get the keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)

// Checking properties using hasOwnProperty()

// hasOwnProperty: To check if a specific key or property exist in an object. It returns a boolean

console.log(copyPerson.hasOwnProperty('firstName'))
console.log(copyPerson.hasOwnProperty('score'))

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

const loggedIn = Object.values(users).forEach((value, index) => {
    // let count = 0
    // if (value[index].isLoggedIn === false) {
    //     count += 1
    // }
    // return count
})



const properties = Object.entries(users)
console.log(properties)

// Using for of loop
for (const [key, value] of properties) {
    // if (value.isLoggedIn === true) {
    //     console.log(key)
    // }
}
// using forEach method
properties.forEach(([key, value]) => {
    // if (value.isLoggedIn === true) {
    //     console.log(key)
    // }

    // if (value.points >= 50){
    //     console.log(key)
    // }
    
    if (value.skills.includes('MongoDB') && value.skills.includes('Express') && value.skills.includes('React') && value.skills.includes('Node') ) {
        console.log(key)
    }
})

