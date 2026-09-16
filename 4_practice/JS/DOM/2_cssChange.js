const item = document.querySelector(".movie")

setInterval(()=>{
    item.classList.add("movie")
    item.classList.toggle("movie")
},200)