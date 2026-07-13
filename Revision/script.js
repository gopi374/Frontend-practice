//Data Structures (string , array  & objects)
//string -is a sequence of charactors used to represent text they are immumatable and zero based indexing

let str  = "I am Gopi"
// console.log("Str length :",str.length);
// console.log(str.charAt(5));
// console.log(str.indexOf(7))
// console.log(str.replace('G','A'));
// let str2 = " sage University"
// console.log(str.split(" ").concat(str2))
// console.log(str.trim())
// console.log(str.toUpperCase())
// console.log(str.slice(1,5)) //it will return a new copy of string
// console.log(str.substring(0,7))


// Array - Array in js are hetrogenius means they can hold mix of data types(numbers,string ,object, other arrays also)

const colors = ['red', 'green', 'blue'];
const mixed = [42, 'hello', true, { name: 'Alex' } , colors]; // Mixed types

console.log(mixed)

//common methods to perform

colors.push("Black") //add item in end of array
colors.pop();   // delete items from end
colors.unshift("White");
colors.shift()    // delete from front of arr
console.log(colors)

//traversal
for(let i =0;i<colors.length;i++){
    console.log(colors[i])
}

for(let a of colors){  //for each loop
    console.log(a)
}

console.log(colors.indexOf('red'))
console.log(colors.includes('red')) // return true or false if item exist
console.log(mixed.find(n=>n.name === 'Alex'))  //it will return the first element that matches the condition

//The map(), filter(), and reduce() methods are powerful JavaScript array methods used to transform, clean, and aggregate data without modifying the original array
 const number = [4,5,6,2,2,4]
 const doublenum = number.map(num=>num*2)
 console.log("double numbers :",doublenum)

console.log("greater than 5 in doublenum",doublenum.filter(num=>num>=5))
console.log("even numbers in duoblenum :",doublenum.filter(num=>num%2==0))

console.log("reduce works",doublenum.reduce((tsum,num)=>tsum+num,0))

// objects

//objects are the collection of key-value pairs, keys are strings and value can be any data-types(number, string , boolean , function , array etc)

let obj = {
  name: "gopi",
  age: 500,
  isStrudent: true,
  "": "Empty string",
  " ": "Space key",
  "last name": "max",
};

//access to the object
console.log(obj.isStrudent)  //dot notation
console.log(obj["age"]) //bracket notation
 
// empty string key and space key not accessed by .
console.log(obj[""]);
console.log(obj[" "]);
console.log(obj["last name"]);
//key containing spaces not accessed by . operator

obj.sec="A"  //adding an new key-value
console.log(obj)



//function -- a reusable block of code that design for performing a specific task

function greet(name){
    console.log(`hello ${name}`);
}
greet("gopi")

const add = function(a,b){return a+b}
console.log(add(5,8))

//arrow function
let arrow = (a,b)=>a+b;
console.log(arrow(5,8))

function logProfile(username, age) { // Parameters: username, age
  console.log(`${username} is ${age}`);
}

logProfile("Sarah", 28); // Arguments: "Sarah", 28



//closures -- a closures is a function that remebers the outer variables and can access them even after outer function has finish the execution

function createGreeting(greetingWord) {
 return function(name) {
 console.log(greetingWord + ", " + name);
 };
}
const sayHi = createGreeting("Hi");
sayHi("Alice"); // Outputs: Hi, Alice
