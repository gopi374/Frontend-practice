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
// function checkeven(num) {
//   return new Promise((res, rej) => {
//     if (num % 2 == 0) {
//       res();
//     } else {
//       rej();
//     }
//   });
// }

// checkeven(15)
//   .then(() => {
//     console.log("even");
//   })
//   .catch(() => {
//     console.log("odd");
//   })
//   .finally(() => {
//     console.log("check confirm");
//   });

//ATM widrawl

// function ATM(amount, balance) {
  // return new Promise((res, rej) => {
//     console.log("fetching balance...");
//     setTimeout(() => {
//       let succes = "amount withdrawl sucessfully !!";
//       let failed = "insufficient balance";
//       if (balance > amount) {
//         res(succes);
//       } else {
//         rej(failed);
//       }
//     }, 2000);
//   });
// }
// ATM(1500, 1600)
//   .then((succes) => {
//     console.log(succes);
//   })
//   .catch((failed) => {
//     console.log(failed);
//   });

function maggielana(){
    return new Promise((res, rej) => {
    console.log("maggie lene gye ...")
    setTimeout(()=>{
        console.log("maggie aa gyi...")
        res();
    },2000)
  });
}


function maggiebanana(){
    return new Promise((res, rej) => {
    console.log("maggie banana start ...")
    setTimeout(()=>{
        console.log("maggie ban gyi...")
        res();
    },2000)
    });
}

function maggiekhana(){
    return new Promise((res, rej) => {
    console.log("maggie khana start ...")
    setTimeout(()=>{
        console.log("maggie khatam...")
        res();
    },2000)
  });
}

//PROMISE CHAINING  
// maggielana()
//    .then(()=>maggiebanana())
//    .then(()=> maggiekhana())
//    .then(()=>{console.log("wash utensils...")}) 

function orderplaced(){
    return new Promise((res) => {
    console.log("order aaya he...")
    setTimeout(()=>{
        console.log("ingredients lene jaa rha hu...")
        res();
    },2000)
  });
}

function prepared(){
    return new Promise((res) => {
    console.log("sabzi preparing...")
    setTimeout(() => {
        console.log("sabzi ban gyi...")
        res();
    }, 2000);
  });
}
function deliever(){
    return new Promise((res) => {
    console.log("deleivry wala aagya..")
    setTimeout(() => {
        console.log("delivery wala order le gya...")
    }, 1000);
    setTimeout(()=>{
        console.log("traffic bahuut he")
    },2000)
    setTimeout(()=>{
        console.log("deleiver ho gya")
        res();
    },4000)
  });
}

// orderplaced()
//   // .then(prepared) -- without arrow function we can't send and recieve the data
//   // .then(deliever)
//   .then(()=>prepared())
//   .then(() => deliever())



let url="https://ankit.com/images/profile.jpg"

function download(url){
  return new Promise((res) => {

    let profileimg=url.split('/')[4];
    console.log(`img downloading from - ${url}`)
    setTimeout(()=>{
        console.log(`img downloaded - ${profileimg}`)
        res(profileimg);
    },2000)
  });
};

function compressed(profileimg){
    return new Promise((res) => {
    let cimg = profileimg.split('.')[0]+".webp";
    console.log('img converting...')
    setTimeout(()=>{
        console.log("img converted successfully - ",cimg)
        res(cimg);
    },3000)
  });

}
function upload(cimg){
    return new Promise((res) => {
    let nURL = "https://newurl.com/images/"+cimg;
    console.log(`uploading img to new url - ${nURL}`)
    setTimeout(()=>{
        console.log('uplaod successfull !!')
        res();
    },4000)
  });
}


// download(url)
//    .then((profileimg)=> compressed(profileimg))
//    .then((cimg)=>upload(cimg))



   // Q = implement an  traffic light sequence (Red -> Yellow -> Green) using promises


   function Red() {
     return new Promise((res) => {
       console.log("Signal is Red 🚫");
       setTimeout(() => {
         res();
       }, 3000);
     });
   }

function Yellow(){
        return new Promise((res) => {
          console.log('Signal is Yellow ,Ready to gOO!!🟡');
          setTimeout(()=>{
            res();
          },3000)
        });
   }

function Green(){
        return new Promise((res) => {
          console.log('Gooo !!!➡️');
          setTimeout(()=>{
            res();
          },1000)
        });
   }

Red()
  .then(()=>Yellow())
  .then(()=>Green())
  .then(()=>{
    console.log("you are at Home !!")
  })