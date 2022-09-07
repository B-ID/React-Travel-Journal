// Loops
// Loops help us to automate tedious and repetitive tasks
// Loops usually goes until the condition gets false. But sometimes, we like to interrupt the loop or skip an item during iteration. We us BREAK to interrupt the loop and CONTINUE to skip an item during iteration.

// Types of Loops
/*
1. for
2. while
3. do whild
4. for of
5. forEach
6. for in
*/

/*
SYNTAX
for (initialization, condition, increment/decrememt) {
    code goes here
}
*/

for (let i = 0; i < 6; i++) {
    console.log(i)
}

// The code below reverses an array
const nums = [1, 2, 3, 4, 5]
const lastIndex = nums.length - 1
const newArray = []

for (let i = lastIndex; i >= 0; i--) {
    newArray.push(nums[i])
}

console.log(newArray)

//***************** While loop *****************
// We use the while loop when we do not know how many iterations we'll perform in advance.

// let count = prompt('Enter a positive number')
// while (count > 0) {
//     console.log(count)
//     count--
// }

// ************ for of loop ************
/*
The for of loop is very handy to use with an array. If we are not interested in the index of the array, a for of loop is prefeable to regular loop or forEach loop*/

const numbers = [1, 2, 3, 4, 5]
for (const number of numbers) {
    console.log(number)
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
for (const country of countries) {
    console.log(country.toUpperCase())
}

// **************** forEach ************
/*
if we are interested in the index of the array forEach is peferable to for of loop. The forEach array method takes a callback function, the callback function takes three arguments: the item, the index and the array itself.
*/

numbers.forEach((number, i) => {
    console.log(number, i)
})

countries.forEach((country, i, arr) => {
    console.log(i, country.toUpperCase())
})

// ************** for in ********************
// The for in loop can be used with object literals to get the keys of the object.

const user = {
    firstName: 'Bukola',
    lastName: 'Idowu',
    age: 15,
    country: 'Nigeria',
    skills: ['HTML', 'CSS', 'JS', 'Python']
}

for (const key in user) {
    console.log(key, user[key])
}

// interrupting a loop an skipping an item
// ---- break
// break is used to interrupt a loop

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break
    }
    console.log(i)
}

// ---- continue
// we use the keyword continue to skip a certain iteration
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i)
}