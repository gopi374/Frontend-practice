//loops 100
//
// let
const ul = document.querySelector(".movie");

// for (let i = 1; i < 100; i++) {
//   const li = document.createElement("li");
//   if (i % 15 == 0) {
//     li.innerText = `FizzBuzz`;
//   } else if (i % 3 == 0) {
//     li.innerText = `Fizz`;
//   } else if (i % 5 == 0) {
//     li.innerText = `Buzz`;
//   }
//   if (i % 5 != 0 && i % 3 != 0) {
//     li.innerText = `${i}`;
//   }
//   ul.appendChild(li);

// } --
// const n = document.querySelector(".movies")

// for (let i = 1; i < 100; i++) {
//   const li = document.createElement("li");
//   let text = "";
//   if (i % 3 == 0) text += "Fizz";
//   if (i % 5 == 0) text += `Buzz`;
//   li.innerText = text == ""?i:text;
//   ul.appendChild(li);
// //   ul.style.textDecoration="none";

// }


// const ul = document.querySelector(".movie");
console.log(ul.children);

const li = document.querySelector("#movies2");
console.log(li.parentElement);

console.log(li.previousElementSibling);

console.log(li.nextElementSibling);

//form
const form = document.querySelector("#form")
