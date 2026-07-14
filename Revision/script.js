/*

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


*/

//<-- Sysnchronous and Asynchronous -->

//Synchronous: Code is executed line by line, from top to bottom. If one line of code takes a
//long time (like a huge calculation), it "blocks" the rest of the code from running until it finishes

/*

Asynchronous (Async):

Starts a task (like fetching data) and doesn't wait for it to finish.
Other code continues running while the task completes in the background.
Prevents the application from freezing.

Example:

Sync: Standing in a queue until your turn.
Async: Ordering food and chatting while waiting for it.
2. Timers: setTimeout() and setInterval()

These are JavaScript functions used to schedule code execution.

setTimeout() → Runs code once after a specified delay.
setInterval() → Runs code repeatedly after every specified interval until stopped with clearInterval().

Example:

setTimeout(() => {
  console.log("Runs once after 2 seconds");
}, 2000);

const id = setInterval(() => {
  console.log("Runs every second");
}, 1000);

// Stop it
clearInterval(id);


3. Callbacks & Sequential Execution

A callback is a function passed to another function and executed after a task finishes.

Used to perform asynchronous operations in order.
Too many nested callbacks create Callback Hell, making code difficult to read.

Example:

stepOne(() => {
  stepTwo(() => {
    stepThree();
  });
});


4. Promises

A Promise is an object that represents the future result of an asynchronous operation.

A promise has three states:

Pending – Waiting for completion.
Resolved (Fulfilled) – Task completed successfully.
Rejected – Task failed.

Use:

.then() for success.
.catch() for errors.

Example:

fetchData()
  .then(data => console.log(data))
  .catch(error => console.log(error));

*/

function checkLogin() {
  return new Promise((resolve, reject) => {
    let login = true;

    if (login) {
      resolve("Login successful");
    } else {
      reject("Login failed");
    }
  });
}

async function loginUser() {
  try {
    let message = await checkLogin();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

loginUser();



function taskOne() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000);
    });
}

function taskTwo() {
    return new Promise(resolve => {
        setTimeout(() => {
            let t = "Task 2 completed";
            resolve(t);
        }, 1000);
    });
}

async function runTasks() {
    await taskOne(); 
    let a = await taskTwo();
    console.log(a)

    console.log("All tasks completed");
}

runTasks();