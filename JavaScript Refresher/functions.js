/*
-- Function with unlimited number of parameters

- Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a function which can take unlimited number of arguments. The way we do it has a significant difference between a function declaraton(regular function) and arrow function. Let us see examples both in function declaration and arrow function.


-- Unlimited number of parameters in regular function
- A function declaration provides a function scoped arguments array-like object. any thing we passed as argument in the function can be accessed from arguents object inside the funtions.
*/

// Accessing the arguments object
function sumAllNums() {
    console.log(arguments)
    let sum = 0
    for (let i of arguments) {
        sum += i
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4))

// Unlimited number of parameters in arrow function
// - Arrow funtion does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use the spread operator followed by the parameter name. Anything we passed as argument in the function can be accessed as an array in the arrow function.

// const sumAllNum = (...args) => {
//     console.log(args)
// }

// sumAllNum(1, 2, 3, 4)

// function declaration

const sumAllNum = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}

console.log(sumAllNum(1, 2, 3, 4, 5))

// Anonymous Function
// - A function without name

const anonymousFun = function () {
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
    )
}

console.log(typeof (anonymousFun))

    // Self Invoking Functions
    // - Self invoking functions are anonymous functions which do not need to be called to return a value.

    ; (function (n) {
        console.log(n * n)
    })(2)

let squardNum = (function (n) {
    return n * n
})(10)

console.log(squardNum)

// Arrow Function
const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Bukola', 'Idowu'))

// Function with default parameters
// - Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have default value(s)

function greetings(name = 'peter') {
    let message = `${name}, welcome to 30 days of JavaScript!`
    return message
}

console.log(greetings())
console.log(greetings('Bukola'))