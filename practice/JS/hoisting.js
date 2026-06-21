//scoping & hoisting
//scope -Scope determines where a variable or function can be accessed.

//Global Scope
//Variables declared outside any function or block are globally accessible.

let name = "Alice";

function greet1() {
    console.log(name);
}

greet1(); // Alice


//Function Scope - Variables declared with var inside a function are accessible only within that function.

function test() {
    var age = 25;
    console.log(age);
}

test(); // 25
// console.log(age); // Error


// Block Scope - Variables declared with let and const are limited to the block ({}) where they are declared.

if (true) {
    let x = 10;
    const y = 20;
}

// console.log(x); // Error
// console.log(y); // Error

// var ignores block scope
if (true) {
    var z = 30;
}

console.log(z); // 30


//Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation.
// console.log(a) //error
var a=5;
console.log(a)

// console.log(b) //ReferenceError: Cannot access 'b' before initialization , it works  for const and let 
const  b = 4;
console.log(b)


//funstion hoisting
//fully hoisted
dance();
function dance(){
    console.log("dancing")
}

//Not hoisted
// abs();  //error - TypeError: abs is not a function
var abs = function(){
    console.log("absolute value")
}

abs();

// greet();   // error - ReferenceError: Cannot access 'greet' before initialization

// const greet = () => {
//     console.log("Hello");
// };



//callbacks - A callback is a function that is passed as an argument to another function and is executed later.
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    const name = "John";
    callback(name);
}

console.log(processUser(greet("john")))

//Destructuring in JavaScript is a syntax that allows you to extract values from arrays or objects and assign them to variables in a concise way.

//Array Destructuring
//Basic Example
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30