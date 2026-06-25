//async/await is a JavaScript syntax extension that makes asynchronous code look and behave like synchronous code.
//async: A keyword placed before a function declaration. It ensures the function always returns a Promise, automatically wrapping non-promise return values.
// await: A keyword used only inside an async function. It pauses execution until the targeted Promise resolves or rejects.

function getDown(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("REsolve ho hya")
        },3000)
    })
}

// getDown()
// .then((msg)=>{ //always return a prommise
//     console.log(msg)
// })


// function handlepromise() {
//     const val = getDown();
//     console.log(val)
// }
// handlepromise()

//Promise { 'REsolve ho hya' }



async function handlepromise() {
    console.log("hello")
    const val = await getDown(); // when promise is call by function it tooks t time and it stops next line execution while it resolve
    console.log(val)
    console.log("world")

    const val1 = await getDown();   // when promise is call by function it tooks t time and it stops next line execution while it resolve
    console.log(val1)
    console.log("world1")
}

// handlepromise()

const getdata= new Promise((res)=>{
    setTimeout(()=>{
        res('const promise')
    },3000)
})
const getdata2= new Promise((res)=>{
    setTimeout(()=>{
        res('const promise 2')
    },5000)
})

async function da(){
    console.log("hello")
    const val = await getdata; //when promise is stored in variable , it starts executing when store
    console.log(val)
    console.log('world')

    const val2 = await getdata2;  // always return a promise
    console.log(val2)
    console.log('world2')
}
da()