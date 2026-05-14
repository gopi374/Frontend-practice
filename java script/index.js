// variable is a container for storing data
// a variable behaves as if it the value that it contains
//  two step :
//1. declaration (var ,let, const)
//2. assignment (= assignment operator)
let age = 22;    ///int
let firstname ="Gopi"    //strings
let student = true;    //boolean (0-1)

age = age+1;
console.log(age);
console.log("Hello ",firstname);

console.log("you are ",age,"years old");

console.log("Enrolled:", student)

document.getElementById("p1").innerHTML = "hello " + firstname;
document.getElementById("p2").innerHTML = "you are " + age+"years old";
// document.getElementById("p3").innerHTML = " Enrolled " + student;

// arithmatic operator (+, - , / , * ,exponential(**), modulas could be used find even or odd (%), ): 

let students=20;
students=students ** 2;  
console.log(students)