let num= [1,2,5,3]

//map()
let d = num.map((num)=>num*3)
console.log(d)

//filter()
let even = d.filter((num)=>num%2==0)
console.log(even)

//reduce

let prices = [10,20,30,40,50] 
let total = prices.reduce(
    (acm,curItem)=>acm+curItem,0
)
console.log(total)

let words = ["apple","bana","gopi"]
let w=words.map((words)=>words.toUpperCase());
console.log(w)