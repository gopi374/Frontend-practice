//user input by two methods.
// 1. By js 
// let username = window.prompt("What's your name :");
 console.log(username);

// 2. html method
let username;
document.getElementById("mybtn").onclick = function(){

    
    let username=document.getElementById("mytext").value;
     console.log(username);
     document.getElementById("mylabel").innerHTML="Hello "+username;
 }

// const is the variable they can't change . it give 5-6 digit no.

// const pi =3.14159;
// let radius=window.prompt("Enter the randius of a circle :")
// let circumference ;
// circumference = 2 * pi *radius;
// console.log("Radius is :",radius)
// console.log("the circumference of a circle is :",circumference)

Math

let x = 3.14;
// x = Math.floor(x)
// x = Math.round(x)     //
//x = Math.pow(x, 2)   //power incresing 
console.log(x)