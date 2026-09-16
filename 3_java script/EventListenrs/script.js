let y = document.getElementById('ele');
let x = document.getElementById('2nd ');
let z = document.getElementById('ele3');

x.addEventListener("click",function(){  //mousemove , mousecenter, mouseleave,
   
    z.style.fontFamily="serif"
    z.style.background="blue"
    x.style.background="blue"
})

y.addEventListener("mousemove",function(){
    y.style.textAlign="center"
    y.style.color="red"
    y.style.background="green"
   
})

y.addEventListener("mouseleave",function(){
    y.style.textAlign="left"
    y.style.color="black"
    y.style.background="white"
   
})
