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

// function compressed(profileimg,cb){
//     let cimg = profileimg.split('.')[0]+".webp";
//     console.log('img converting...')
//     setTimeout(()=>{
//         console.log("img converted successfully - ",cimg)
//         cb(cimg);
//     },3000)

// }
function upload(cimg){
    let nURL = "https://newurl.com/images/"+cimg;
    console.log(`uploading img to new url - ${nURL}`)
    setTimeout(()=>{
        console.log('uplaod successfull !!')
    },4000)
}

download(url,(profileimg,cb)=>{
    let cimg = profileimg.split('.')[0]+".webp";
    console.log('img converting...')
    setTimeout(()=>{
        console.log("img converted successfully - ",cimg)
        cb(cimg);
    },3000)

});