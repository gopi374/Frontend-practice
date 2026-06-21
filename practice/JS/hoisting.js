//scoping & hoisting
//scope -Scope determines where a variable or function can be accessed.

//Global Scope
//Variables declared outside any function or block are globally accessible.

let name = "Alice";

function greet() {
    console.log(name);
}

greet(); // Alice


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