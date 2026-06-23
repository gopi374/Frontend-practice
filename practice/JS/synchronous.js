function wait(){
    // let time = new Date().getTime();
    // while(new Date().getTime()<time+5000){}

    setTimeout(()=>{
        console.log("after 5 sec")
    },5000);
}

console.log('hlello')
wait();
console.log("worldd")
