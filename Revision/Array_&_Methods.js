// Arrays - it is an data structure that can hold multiple types of data like string , numbers, boolean etc
// in js array have multiple methods thst can use for different oprations .


//initialisatoin
let arr = [];

arr=[2,5,8,"String",true];
console.log(arr);

//different types of arrays creation
let arr1 = new Array(5,8,3,9,3,"String",false);
console.log(arr1);

//array to string
console.log(arr.toString())

//concatinate
let newArr = arr1.concat(arr);
console.log(newArr)


// insertion ,deletion
arr1.push(12); // at end of the arr
arr1.pop();  // remove the element from last

arr1.unshift(100) //insert an ele at beggening
arr1.shift(); //remove the first element of the arr

console.log(arr1)

//length increase or decrease

console.log(arr1.length);
arr1.length+20;
console.log(arr1)

// find
// arr1.find()

//join 
console.log(arr1.join('->'));

//delete
// console.log(delete arr1[0]);

// forEach loop
arr1.forEach(element => {
    console.log(element)
});


// flat make every nested element into single elements in arr
let arr2 = [[1,2,5,2],5,56,17,[2,3,5,9,[259,2,43,0]]];
// console.log(arr2.flat(Infinity));

// splice
let arr3 = [1,2,3,4,5,6];
arr3.splice(1,3) // splice(idx, deleteCount);
arr3.splice(3,0,7,8,9,10); //splice(idx,deleteCount,insertion);
console.log(arr3)

//slice -it will return new arr containing the values

let newarr = arr1.slice(1,5);
console.log(newarr)

//some
console.log(newarr.some((v)=>v>8));


// map , reduce , filter 

//map() - this methods returns a new arr after performing some operations on that array

console.log(arr1.map((val)=>val * 2).toString());  

console.log(arr1.filter((v)=>v>5));
console.log(arr1.filter((v)=>v%2 == 0));  //return an new array with all the even number

console.log(arr1.reduce((acc,sum)=>acc+sum,0))  // it does not return new array, it gives final value

console.log(arr1.reverse());

//values
const a = ["Apple", "Banana", "Cherry"];
const res = a.values();

for (const value of res) {
    console.log(value);
}