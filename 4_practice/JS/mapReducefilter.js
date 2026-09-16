let arr = [45,57,25,54,12,3,12]
let arr1 = [53,69,87,2,366]

let d = arr.map((num)=>num*2)
// console.log(d)

let newarr = arr.join(arr1)

let even = arr.filter((n)=> n%2==0)
console.log(even)

let red = arr.reduce((acc,sum)=>acc+sum,0)
console.log(red)//total of arr