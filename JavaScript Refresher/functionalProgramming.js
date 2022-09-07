//  ****************** FUNCTIONAL PROGRAMMING *********************
// Functional programming allows you to write shorter code, clean code and also to solve complicated problems which might be difficult to solve in a traditional way.
// Examples of JS functional programming methods: forEach, map, filter, reduce, find, findIndex, some, every..


// 1. ********** forEach ************
// We use forEach when we like to iterate through an array of items. The forEach is a higher-order function and it takes a call-back function as a parameter. The forEach method is used only with array and we use forEach if your are interested in each item or index or both.

// syntax in a normal function declaration
/*
function callback(item, index, arr) {}
array.forEach(callback)
*/

// syntax in an arrow function
/*
const callback = (item, index, arr) => {}
array.forEach(callback)
*/



const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
countries.forEach((country, index, array) => {
    console.log(index, country.toUpperCase())
})


const newCountries = []
countries.forEach((country) => newCountries.push(country))

console.log(newCountries)

const numbers = [1, 2, 3, 4, 5]
let sum = 0
numbers.forEach(n => sum += n)


console.log(sum)

const newCountry = countries.forEach((country) => {
    console.log(country.toUpperCase())
})

console.log(newCountry)

// ********** 2. MAP ***********
// We use the map method whenever we like to modify an array. We use the map method only with arrays and it always returns an array.

const newCountry1 = countries.map(country => country.toUpperCase())

console.log(newCountry1)

// country length
const countriesLength = countries.map(country => country.length)

console.log(countriesLength)

// Square of numbers
const number = [1, 2, 3, 4, 5]
const squaredNum = number.map(num => num ** 2)

console.log(squaredNum)

// ********** 3. FILTER ***********
// It filters out items based on some criteria and returns an array of the filtered items
// The filter method iterates through an array and returns the items that satisfies the true boolean condition.

// const callback = (item) => {
//     return // boolean
//   }
//   const filteredArray = array.filter(callback)

// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
const countriesWithLand = countries.filter(country => country.includes('land'))

console.log(countriesWithLand)

// Flitering odd and even numbers
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = digits.filter(x => x % 2 === 0)
const odds = digits.filter(x => x % 2 !== 0)

console.log(evens, odds)

// ********** 4. REDUCE ***********
// Reduce is also used with an array and it returns a single value. We use the reudce method to sum all numbers in an array together, or to multiply items in an array or to concatenate items in an array.

// const reduced = callback((acc, cur) => {
//     return // code goes here
// })

// const reduced = array.reduce(callback)

// from digits array above
const total = digits.reduce(adder)
console.log(total)

function adder(a, b) {
    return a + b
}
// Reduce has a default initial value which is zero. Let us use a different initial value which is 5 in this case.

const totals = digits.reduce((a, b) => a + b, 5)
console.log(totals)

// Using Reduce method to concatenate strings
const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((a, b) => `${a} ${b}`)
console.log(helloWorld)

// Multiplying items of an array using Reduce method
const value = digits.reduce((acc, cur) => acc * cur)
console.log(value)

// with an initial value
const values = digits.reduce((acc, cur) => acc * cur, 10)
console.log(values)

// ********** 5. FIND ***********
// The find method is used to find the first occurrence of a certain item or element in an array.

// syntax
// const item = array.find(callback)

const firstEvenNum = digits.find(n => n % 2 === 0)
const firstOddNum = digits.find(n => n % 2 !== 0)

console.log(firstEvenNum)
console.log(firstOddNum)

// Finding the first country which contains a substring way

const countriesWithWay = countries.find(country => country.includes('way'))

console.log(countriesWithWay)

// Country with only six characters
const sixCharsCountry = countries.find(country => country.length === 6)
console.log(sixCharsCountry)

//Country which has letter O
const index = countries.find(country => country.includes('o'))
console.log(index)

// ********** 6. SOME ***********
// The some method is used with an array and return a BOOLEAN. if one or some of the items satisfy the criteria the result will be true else it will be false.

const someAreEvens = digits.some(n => n % 2 === 0)
const someAreOdds = numbers.some(n => n % 2 !== 0)

console.log(someAreEvens)
console.log(someAreOdds)

const even = [0, 2, 4, 6, 8, 10]
const someEven = even.some(n => n % 2 === 0)
const someOdd = even.some(n => n % 2 !== 0)

console.log(someEven)
console.log(someOdd)

// ********** 7. EVERY ***********
// This method EVERY is similar to some but every item must satisfy the criteria. This method also returns a boolean.

const allAreEvens = numbers.every(n => n % 2 === 0)
const allAreOdds = digits.every(n => n % 2 !== 0)

console.log(allAreEvens)
console.log(allAreOdds)

// Exercises
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

console.log(products)

// products.forEach(x => console.log(x))


// for (let value of products) {
//     console.log(value)
// }

// check out the use of underscore(_) in arrays and objects destructuring

// Object.entries(products).forEach(([_, value]) =>  console.log(value))

// for (const [_, value] of Object.entries(products)) {
//     console.log(value)
// }

// Object.keys(products).forEach(key => console.log(products[key]))

// Object.values(products).forEach(value => console.log(value))

let totalPrice = 0
Object.values(products).forEach(value => {
    console.log(`The price of ${value['product']} is ${value['price']}`)
    
    // sum of all prices in products
    totalPrice += value.price
})

console.log(totalPrice)

// Array of prices using map
const prices = Object.values(products).map(item => item.price)

console.log(prices)
 
// Filter product with prices
const [pricedProducts] = Object.values(products).filter(x => x.price !== '' &&  x.price !== ' ' )

console.log(pricedProducts)

// Method Chaining
const priceSum = Object.values(products).map(item => item.price).filter(x => x !== '' && x !== " ").reduce((a, b) => a + b, 0)


console.log(priceSum)

// const filteredPrice = priceSum.filter(x => x !== '' &&  x !== ' ' )
// console.log(filteredPrice)

// Find the first product which doesn't have a price value
const noPriceVal = Object.values(products).find(x => typeof x.price !== 'number')

console.log(noPriceVal)

const notNum = Object.values(products).map(item => typeof item.price == 'number')

console.log(notNum)