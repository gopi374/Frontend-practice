//async/await is a JavaScript syntax extension that makes asynchronous code look and behave like synchronous code.
//async: A keyword placed before a function declaration. It ensures the function always returns a Promise, automatically wrapping non-promise return values.
// await: A keyword used only inside an async function. It pauses execution until the targeted Promise resolves or rejects.

function getDown(){
    // A promise starts executing immediately when created.
    // However, because it is inside a function, this creation 
    // ONLY happens when the function getDown() is called.
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("REsolve ho hya")
        },3000)
    })
}

// getDown()
// .then((msg)=>{ 
//     console.log(msg)
// })


// function handlepromise() {
//     const val = getDown();
//     console.log(val) // Logs 'Promise { <pending> }' because the synchronous main thread doesn't wait for setTimeout.
// }
// handlepromise()


async function handlepromise() {
    console.log("hello")
    
    // Line below creates a NEW promise instance and pauses this function's local execution for 3 seconds.
    // The main JavaScript thread is released to do other work outside this function.
    const val = await getDown(); 
    console.log(val)
    console.log("world")

    // Line below creates a completely fresh, SECOND promise instance. 
    // It pauses this function for another 3 seconds. Total execution time: 6 seconds.
    const val1 = await getDown();   
    console.log(val1)
    console.log("world1")
}

// handlepromise()


// PROMISES ARE EAGER: Both timers start running immediately in the background 
// at the exact same moment these variables are evaluated.
const getdata = new Promise((res)=>{
    setTimeout(()=>{
        res('const promise')
    },3000) // Will resolve at global clock mark: 3s
})

const getdata2 = new Promise((res)=>{
    setTimeout(()=>{
        res('const promise 2')
    },5000) // Will resolve at global clock mark: 5s
})


async function da(){
    console.log("hello")
    
    // Pauses function execution until getdata resolves (happens at the 3-second mark).
    const val = await getdata; 
    console.log(val)
    console.log('world')

    // Since getdata2 started at the same time, it has already been ticking for 3 seconds.
    // The await here only pauses the function for the remaining 2 seconds. 
    // Total execution time for da(): 5 seconds instead of 8.
    const val2 = await getdata2;  
    console.log(val2)
    console.log('world2')
}
da()
