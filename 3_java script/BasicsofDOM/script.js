let x= document.querySelector("h1");
console.log(x);
setTimeout(()=>{
    x.style.color='red';
    x.style.fontFamily='cursive';
}, 5000);

let y= document.querySelector("h2");
setTimeout(()=>{
y.innerHTML="changed"
},2000)
