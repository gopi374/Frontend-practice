function wait(){
    // let time = new Date().getTime();
    // while(new Date().getTime()<time+5000){}

    // setTimeout(()=>{
    //     console.log("after 5 sec")
    // },5000);
    let id = setInterval(() => {
        console.log("4.9 sec")
    }, 4900);

    setTimeout(()=>{
    clearInterval(id)
    console.log(`interval cleared in 10s`)
    },10000)

}


console.log('hlello')
wait();
console.log("worldd")

// console.log(new Date().getMinutes())