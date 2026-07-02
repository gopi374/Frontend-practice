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
const ul = document.querySelector(".movie")

for(let item of arr){
    //way 1 - it will works as same , but the time complexity O(N) means due to string is immutable in js , browser recreate the siblings of the element
    // movielist.innerHTML+=`<li class="movies">${item}</li>`

    //way 2 -  O(1) because it will do 1 recreate or changes
    const li = document.createElement("li");
    li.innerText=`${item}`
    ul.appendChild(li);

}
const movie = document.querySelectorAll('.movies');
console.log(movie)