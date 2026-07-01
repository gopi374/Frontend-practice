console.log("JS start")
// const h = document.getElementById("heading"); //single element
// console.log(h)
// h.innerText="hiii";
// console.log(h) //it will change #heading content


// const m = document.querySelectorAll('.movie') //it will return 1st .movies item
// console.log(m)
const moviesAll = document.querySelectorAll('.movies')
console.log(moviesAll)

const movielist = document.querySelector('.movie')
movielist.innerHTML += "<li class='movies'>gopi</li>" //it will change the html
console.log(movielist)


let arr = [
    "antman",
    "wasp",
    "manosh",
    "gopi"
]
for(let item of arr){
    movielist.innerHTML+=`<li class="movies">${item}</li>`
}
const movie = document.querySelectorAll('.movies');
console.log(movie)