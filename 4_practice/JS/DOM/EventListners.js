const btn  =  document.querySelector("#btn")
let i=0;
// btn.onclick=()=>{
//     alert("first event")
//     console.log(i++)
// } 
// btn.onclick=()=>{
//     alert("second event")
//     console.log(i++)
// } //only this event run , previous one is overridden

function hello(){
    console.log("hello ")
}
function hello1(){
    alert("hello ")
}
// using addEventListener we can set multiple event on a single tag or thing
btn.addEventListener("dblclick",hello);
addEventListener()

// btn.addEventListener("click",hello1)


const inp  =  document.querySelector("#inp")
inp.addEventListener("keypress",()=>{
    console.log("keyprocess")
})
