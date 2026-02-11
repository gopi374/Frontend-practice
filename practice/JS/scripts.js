// task--1

console.log("Q.1 code for adding two numbers using js:");
let a = 45;
let b = 65;
console.log("Addition of two numbers are :", a + b);
console.log("--------------------------------------------------");

console.log("Q.2 Code that concatenates two strings using js:");
let str1 = "Gopi ";
let str2 = "from sec-A";
console.log(str1 + str2);
console.log("--------------------------------------------------");

// variable understanding
console.log(
  "Variable stands for a empty container where the value can be stored",
);
console.log("--------------------------------------------------");

console.log("Q=3 constant - once a variable declared that cannot be changed")
const C = "Sec-A";
console.log(C);
console.log("--------------------------------------------------");

// //primtive datatypes
console.log(
  "Ans- primitive datatypes -- integer(let a=5), boolean(bool a=true) ,string( string str ), undefined(),null",
);
console.log("--------------------------------------------------");

// task -- 2
console.log("Q=4 sum of two numbers");
let c = a + b;
let resultString = `The sum of ${a} and ${b} is ${c}`;
console.log(resultString);
console.log("--------------------------------------------------");

//task --3
console.log("Q=6 Sum of three numbers")
let d = a + b + c;
console.log(`sum of ${a} , ${b} and  ${c} is ${d}`);
console.log("--------------------------------------------------");

//task --4

d = a * (b + c) - b * c;
console.log("value of a*(b+c)-(b*c) ", d);
console.log("--------------------------------------------------");

// JS-A1#4

// task-1
// q=1 ADD 1 to odd number

if (a % 2 != 0) {
  a = a + 1;
  console.log("1 is added", a);
} else {
  console.log("Does not add somthing/1", a);
}
//q=2 Devisible by 2,3,6
if (a / 2 == 0) {
  console.log("a is completly divisible with 2");
} else if (a / 3 == 0) {
  console.log("a is completly divisible with 3");
} else if (a / 6 == 0) {
  console.log("a is completly divisible with 6");
} else {
  console.log("a is not completly divisible any number given");
}

console.log("--------------------------------------------------");

//task -- 2 to ckeck the numer is either positive and negative

let num = 5;
if (num > 1) {
  console.log("Given number is positive number :", num);
} else if (num <= 0) {
  console.log("Not a positive numbers :", num);
} else {
  console.log("another numbers :", num);
}

console.log("--------------------------------------------------");

//task--3
if (num % 10 === 0) {
  console.log("Multiple of 10");
} else {
  console.log("Not a Multiple of 10");
}
console.log("--------------------------------------------------");

//task -- 4 greater and smaller
let m = 10,
  n = 3;
if (m > n) {
  console.log("M is greater then n");
} else if (m == n) {
  console.log("m is equal to n");
} else {
  console.log("m is smaller than n");
}
console.log("--------------------------------------------------");
