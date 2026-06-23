//callbacks - A callback is a function that is passed as an argument to another function and is executed later.
// it helps to set the order of execution of function

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


maggielana(maggiebanana);