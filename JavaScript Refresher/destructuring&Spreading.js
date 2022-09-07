// ***************** DESTRUCTURING & SPREADING *****************
// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable. 
// Destructuring allows us to write clean and readable code.

/*
What we can destrucutre?
1. Arrays
2. Objects
*/

// Accessing array items using destructuring
const numbers = [1, 2, 3]
const [num1, num2, num3] = numbers
console.log(num1, num2, num3)


const constants = [2.72, 3.14, 9.81, 37, 100]
const [e, pi, gravity, bodyTemp, boilingTemp] = constants
console.log(e, pi, gravity, bodyTemp, boilingTemp)
// 2.72, 3.14, 9.81, 37,100
const countries = ['Finland', 'Sweden', 'Norway']
const [fin, swe, nor] = countries
console.log(fin, swe, nor) // Finland, Sweden, Norway

/*
During destructuring, each variable should match with the index
of the desired item in the array.
*/


// Destructuring Nested arrays
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

const [frontEnd, backEnd] = fullStack
console.log(frontEnd, backEnd)

const fruitsAndVegetables = [['banana', 'orange', 'mango', 'lemon'], ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']]

const [fruits, vegetables] = fruitsAndVegetables
console.log(fruits, vegetables)

// Skipping an item during destructuring

// During destructuring if we are not interested in every item, we can
// omit a certain item by putting a comma at that index.

const country = ['Finland', 'Sweden', 'Iceland', 'Norway', 'Denmark']
const [finl, , ice, , den] = country
console.log(finl, ice, den) // Finland, Iceland, Denmark

// Getting the rest of the array using the spread operator We use three dots(...) to spread or get the rest of an array during destructuring

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [numb1, numb2, numb3, ...rest] = nums
console.log(numb1, numb2, numb3, rest) //1, 2, 3, [4, 5, 6, 7, 8, 9, 10]

// 1. Destructuring when we loop through arrays
const places = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]

for (const [country, city] of places) {
    console.log(country, city)
}


for (const [first, second, third, fourth] of fullStack) {
    console.log(first, second, third, fourth)
}

// What does this do?
const [x, y] = [2, (value) => value ** 2]

// Destructuring Objects
const rectangle = {
    width: 20,
    height: 10
}

let { width, height, perimeter = 200 } = rectangle
console.log(width, height, perimeter)

// Renaming variable names

let { width: w, height: h } = rectangle
console.log(w, h)

// Destructuring nested objects.


const props = {
    user: {
        firstName: 'Bukola',
        lastName: 'Idowu',
        age: 15
    },
    post: {
        title: 'Destructuring and Spreading',
        subtitle: 'ES6',
        year: 2020
    },
    skills: ['JS', 'React', 'Redux', 'Node', 'Python']
}



// 1. Destructuring Step-by-step

// const { user, post, skills } = props
// const { firstName, lastName, age } = user
// const { title, subtitle, year} = post
// const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills

// console.log(user, post, skills)


// 2. Destructuring in one step
const { user: { firstName, lastName, age },
    post: { title, subtitle, year },
    skills: [skillOne, skillTwo, skillThree, skillFour, skillFive] } = props



// Destructuring during loop through an array
const languages = [
    { lang: 'English', count: 91 },
    { lang: 'French', count: 45 },
    { lang: 'Arabic', count: 25 },
    { lang: 'Spanish', count: 24 },
    { lang: 'Russian', count: 9 },
    { lang: 'Portuguese', count: 9 },
    { lang: 'Dutch', count: 8 },
    { lang: 'German', count: 7 },
    { lang: 'Chinese', count: 5 },
    { lang: 'Swahili', count: 4 },
    { lang: 'Serbian', count: 4 },
]

for (const { lang, count } of languages) {
    console.log(`The ${lang} is spoken in ${count} countries`)
}
languages.forEach(({ lang, count }) => {
    console.log(`${lang} ${count}`)
})



// Destructuring function parameter
const square = { width: 20, height: 10 }
const calculateArea = (width, height) => width * height
const calculatePerimeter = ({ width, height } = 2 * (width + height))


console.log(calculateArea(10, 10))
const freeCodeCamp = {
    frontEnd: 'react',
    backEnd: 'Node',
    database: 'MongoDB'
}

const { frontEnd: front, backEnd: back, database } = freeCodeCamp
console.log(front, back)

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    language: ['Amharic', 'English', 'Suomi(Finnish)'],
}
const { firstName: first, lastName: last, age: ages, country: countryy, job, skills, language } = person
// console.log(`${first} ${last} lives in ${countryy}. He is ${ages} years old. He is an ${job}. He teaches ${formattedSkills}. He speaks`)

const formattedSkills = skills.slice(0, skills.length - 1).join(', ') + ` and ${skills[skills.length - 1]}`
const formattedLanguages = language.slice(0, language.length - 1).join(', ') + ` and ${language[language.length - 1]}`

console.log(`${first} ${last} lives in ${countryy}. He is ${ages} years old. He is an ${job}. He teaches ${formattedSkills}. He speaks ${formattedLanguages}`)


// ********** SPREAD OR REST OPERATOR***********

/*
When we destructure an array, we use the spread operator(...) to get the rest elements as an array. In addition we use spread operator to spread array elements to another array.
*/

// Spread operator to get the rest of array elements
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums
// ​
// console.log(num1, num2, num3)
// console.log(rest)

const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4, 5))