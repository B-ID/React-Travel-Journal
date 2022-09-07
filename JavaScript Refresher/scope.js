/*
Variable is the fundamental part in programming. We declare variable to store different data types. To declare a variable we use the key word var, let and const. A variable can declared at different scope. In this section we will see the scope, scope of variables when we use var or let. Variables scopes can be:
1. Window scope
2. Global scope
3. Local scope

Variable can be declared globally or locally or window scope. We will see both global and local scope. Anything declared without let, var or const is scoped at window level.



*/

a = 'JavaScript' // is a window scope this is found anywhere
b = 10  // this is a window scope variable

function learnScope() {
    console.log(a, b)
    if (true) {
        let a = 'Python'
        let b = 100
        console.log(a, b)
    }
}

console.log(a, b) // accessible

// Global scope
// A globally declared variable can be accessed everywhere in the same file. But the term global is relative. It can b global to the file or it can be global relative to some block of codes.

learnScope()
console.log(a,b)

// Local scope
// A variable declared as local can be accessed only in certain block of code

// A vauabke declared with var is only scoped to a function but variable declared with let or const is block scope(function block, if block, loop, e.t.c). Blok in JavaScript is a code in between two curlly brackets {}