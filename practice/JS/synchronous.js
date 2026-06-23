// setTimeout() - method schedules a callback function to execute once after a specified time delay.
// setInterval() - Repeats continuously at every interval.
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

// let stop=setTimeout(() =>{
//      console.log('immidiate stop')
// })
// console.log(clearTimeout(stop))

// console.log('hlello')
// wait();
// console.log("worldd")

// console.log(new Date().getMinutes())



// let c = 0;
// const interval = setInterval(()=>{
//     c++;
//     console.log(c);
//     if(c==3){
//         clearInterval(interval);
//     }
// },10000)

// setTimeout(() => {
//     console.log('timeout')
// }, 2500); 


//imp interview Q/A
// for(let i=1;i<4;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
// } //o/p-1 2 3

// for(var i=1;i<4;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
// } // o/p - 4 4 4

// because fo scoping - var is function & global scope , it points to single i=4;
// let is block scope , it points different i with every timeout -1 2 3 



let count = 3;
const counter = setInterval(() => {
    if(count>0){
        console.log(count)
        count--;
    }
    else{
        console.log("ended")
        clearInterval(counter)
    }
}, 1000);