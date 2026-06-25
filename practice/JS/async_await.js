function getDown(){
    return new Promise((res,rej)=>{
        res("REsolve ho hya")
    })
}

getDown().then((msg)=>{
    console.log(msg)
})