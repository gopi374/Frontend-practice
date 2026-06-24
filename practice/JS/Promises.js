// A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation.

// let p = new  Promise((res,rej)=>{
//     let data = "data Recieved"
//     let succes = true;

//     if(succes){
//         res(data);
//     }
//     else{
//         rej();
//     }
// })

// let pr  = p.then((data) => {
//   console.log(data);
// }).catch(() => {
//   console.log("Data Not Recieved");
// }).finally(() => {
//     console.log("Operation complete.");
// });

// let download = new  Promise((res,rej)=>{
//     let img = "profile.jpg"
//     let succes = true;
//     setTimeout(()=>{
//         if(succes){
//             res(img);
//         }
//         else{
//             rej();
//         }
//     },2000)
// })

// let d = download
//   .then((img) => {
//     console.log("Image downloaded-", img); //promise always return promise
//     return 2;
//   })
//   .then((num) => {
//     console.log(num * 2);
//     return num * 2;
//   })
//   .then((num) => {
//     console.log(num * 2);
//   })
//   .catch(() => {
//     console.log("Not Download");
//   })
//   .finally(() => {
//     console.log("Operation complete.");
//   });

// console.log(d)

function greet() {
  console.log("greet");
  return function () {
    console.log("object");
  };
}
// greet()();

//check even or odd
function checkeven(num) {
  return new Promise((res, rej) => {
    if (num % 2 == 0) {
      res();
    } else {
      rej();
    }
  });
}

checkeven(15)
  .then(() => {
    console.log("even");
  })
  .catch(() => {
    console.log("odd");
  })
  .finally(() => {
    console.log("check confirm");
  });
