//callbacks - A callback is a function that is passed as an argument to another function and is executed later.
// it helps to set or handle sequential order of execution of function.

function maggielana(cb){
    console.log("maggie lene gye ...")
    setTimeout(()=>{
        console.log("maggie aa gyi...")
        cb(maggiekhana);
    })
}


function maggiebanana(cb){
    console.log("maggie banana start ...")
    setTimeout(()=>{
        console.log("maggie ban gyi...")
        cb();
    })
}

function maggiekhana(){
    console.log("maggie khana start ...")
    setTimeout(()=>{
        console.log("maggie khatam...")
    })
}
// callbaks workflow
// maggielana(()=>{
//     maggiebanana(()=>{
//         maggiekhana(()=>{});
//     });
// });

// maggielana(maggiebanana);

let url="https://ankit.com/images/profile.jpg"

function download(url,cb){
    let profileimg=url.split('/')[4];
    console.log(`img downloading from - ${url}`)
    setTimeout(()=>{
        console.log(`img downloaded - ${profileimg}`)
        cb(profileimg,upload);
    },2000)
};

function compressed(profileimg,cb){
    let cimg = profileimg.split('.')[0]+".webp";
    console.log('img converting...')
    setTimeout(()=>{
        console.log("img converted successfully - ",cimg)
        cb(cimg);
    },3000)

}
function upload(cimg){
    let nURL = "https://newurl.com/images/"+cimg;
    console.log(`uploading img to new url - ${nURL}`)
    setTimeout(()=>{
        console.log('uplaod successfull !!')
    },4000)
}

// download(url,(profileimg,cb)=>{
//     let cimg = profileimg.split('.')[0]+".webp";
//     console.log('img converting...')
//     setTimeout(()=>{
//         console.log("img converted successfully - ",cimg)
//         cb(cimg);
//     },3000)

// });

//Q=3

function orderplaced(cb){
    console.log("order aaya he...")
    setTimeout(()=>{
        console.log("ingredients lene jaa rha hu...")
        cb(deliever);
    },2000)
}

function prepared(cb){
    console.log("sabzi preparing...")
    setTimeout(() => {
        console.log("sabzi ban gyi...")
        cb();
    }, 2000);
}
function deliever(cb){
    console.log("deleivry wala aagya..")
    setTimeout(() => {
        console.log("delivery wala order le gya...")
    }, 1000);
    setTimeout(()=>{
        console.log("traffic bahuut he")
    },2000)
    setTimeout(()=>{
        console.log("deleiver ho gya")
        cb();
    },4000)
}

//easy methods to call callbacks
// callback hell
// pyramid of Doom

orderplaced(()=>{
    prepared(()=>{
        deliever(()=>{
            setTimeout(() => {
                console.log("Enjoy your meal !💓")
            }, 1000);
        })
    })
})
// orderplaced(prepared);