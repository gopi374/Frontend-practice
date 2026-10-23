// function is used to reduce redendency of code.

// Array
let fruits =["aple","banana","l","k"]
let color = ["black", "red", "blue","green"]
let count = ["1","2","3","4"]

let grocerylist = (color,count);
for(let list of grocerylist){
    console.log(list)
}



fruits.push("2_banana")
fruits = fruits.sort().reverse();
console.log(fruits)
/*let area;
let hieght=document.getElementById("hieght").value;
let width;
width=window.prompt("enter the width of circle :")

area = width*hieght;
console.log("width of circle:",width,hieght); */
    //     function imp() {
    //     // Define the character set for the password
    //     const str = "asdfghjklxcvbnm1230456987";
        
    //     // Prompt user for the password length
    //     let length = parseInt(window.prompt("Enter the length of the password:"));
        
    //     // Initialize an empty string for the password
    //     let password = "";
        
    //     // Loop through the length and generate the password
    //     for (let i = 0; i < length; i++) {
    //         // Randomly select a character from the string
    //         password += str.charAt(Math.floor(Math.random() * str.length));
    //     }
        
    //     // Output the generated password
    //     console.log("Password is:", password);
    // }
    
    // imp()
    

function heloo(){
    console.log("hello world")
    console.log("hii")
}
setTimeout(heloo, 3000)
for(let i=1;i<10;i++){
    setTimeout(function(){
    console.log(i)
    },i*1000)
}
function One(n){
    for(i=1;i<n;i++){
        console.log(i)
    }
}
One(6);

// // multiple functions(function under function)
// function add(a,v,b){
//     return a+v+b;
// }
// console.log(add(5,93,4));
// function product(x,y){
//     return x*y;
// }
// console.log(product(add(1,5,2),7)) 


// // time out  over function

// setTimeout(function(){
//     console.log("heellooo")
// },5000);
   

    // arrow function
const sq = number => number * number;
console.log(sq(5));