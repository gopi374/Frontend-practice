let num = [1, 2, 5, 3];

//map()
let d = num.map((num) => num * 3);
// console.log(d);

//filter()
let even = d.filter((num) => num % 2 == 0);
// console.log(even);

//reduce

let prices = [10, 20, 30, 40, 50];
// let total = prices.reduce((acm, curItem) => acm + curItem, 0);
// console.log(total);

let words = ["apple", "bana", "gopi"];

let w = words.map((words) => words.toUpperCase());
// console.log(w);

let cart = [
  { id: 2, name: "laptop", price: 652 },
  { id: 5, name: "dell", price: 422 },
  { id: 1, name: "hp", price: 455 },
];
// let name = cart.map((c) => c["name"] + c.id);

let name = cart.map((c) => ({
  name: c.name,
  price: c.price,
}));

// console.log(name);

let wod = ["apple", "girraffe", "elephant", "dog", "cat"];
let len = wod.filter((w) => w.length >= 5);
console.log(len);

let ppl = [
  { name: "A", age: 12 },
  { name: "B", age: 88 },
  { name: "B", age: 42 },
  { name: "D", age: 18 },
  { name: "E", age: 15 },
];
// let ag = ppl.filter((p)=>p.age>=18);
// let ac = ag.map((a)=>({
//     name:a.name,
//     age:a.age
// }));
let user = ppl
  .filter((p) => p.age >= 18)
  .map((p) => ({
    name: p.name,
    age: p.age,
  }));
console.log(user);

let char =["words","string","boy","girld","elephant"]
// let count = char.reduce()



// let count = words.map((c)=>c.length).reduce((sum,word)=>sum+word,0)
let count = words.reduce((sum,word)=>sum+word.length,0)
console.log(count)


let nums=[1,2,3,4];

let ev = nums.filter((n)=>n%2==0).map((e)=>e*e)
console.log(ev)
let sq=nums.filter((n)=>n%2==0);
console.log(sq)
let e = nums.filter((n)=>n%2==0).reduce((sqr,nums)=>sqr+nums*nums,0);
console.log(e)

let emp = [
  {id:1, name:"A", salary:800},
  {id:3, name:"d", salary:40500},
  {id:2, name:"f", salary:90000},
  {id:4, name:"v", salary:75000},
]
let sal = emp.filter((p) => p.salary >= 30000)
  .map((p) => ({
    name: p.name,
    age: p.salary,
  }));

let tsal = emp.reduce((sum,emp,count)=>sum+emp.salary,count,0)
let avg = tsal/emp.length;
console.log(avg)


//count the occurances
let fruits= ["apple","banana","mango","orange","mango","apple"]
let occur = fruits.reduce((acc,curr)=>{
  acc[curr]=(acc[curr] || 0)+1
  return acc;
},{});
console.log(occur)

//closures

function parent(){
  let pvar="i am parent";
  return function child(){
    let cvar = "i am child";
    console.log(pvar)
    console.log(cvar)

  }
}


let par  = parent();
par();