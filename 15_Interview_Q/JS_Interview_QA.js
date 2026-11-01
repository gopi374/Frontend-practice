// let str= "hello";

// function reversed(str){
//     let rev = "";

//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i];
//     }
//     return rev;
// }

// let revStr = reversed(str);

//checking palindrone
// if(str === revStr){
//     console.log('palindrone')
// }else{
//     console.log("not palindrone")
// }

//find the largest and secondLarget number
// let arr = [1,2,53,67,58,1,14,57,594]

// let largest= -Infinity;
// let secondLarget = -Infinity;
// for(let i=0;i<arr.length;i++){
//    if(arr[i]>largest){
//     secondLarget = largest;
//     largest=arr[i];
//    }
//    else if(arr[i]>secondLarget && arr[i]<largest){
//     secondLarget = arr[i];
//    }
// }
// console.log(secondLarget)

//find the uniques
// let arr1 = [1,2,5,8,6,4,1,2]
// let unique=[]
// for(let i=0;i<arr1.length;i++){
//     let isdup = false;

//     for(let j=0;j<arr1.length;j++){
//         if(arr1[i]==unique[j]){
//             isdup=true;
//             break;
//         }
//     }

//     if(!isdup){
//         unique.push(arr1[i]);
//     }

// }
// console.log(unique)

//find duplicates
// let arr=[1,2,5,3,6,41,1,2,5]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             console.log(arr[i])
//             // break;
//         }
//     }
// }

//find missing num
// let arr = [1,2,4,5];
// let n = 5;
// let exp = (n *(n+1))/2;

// let actsum = 0;
// for(let i=0;i<arr.length;i++){
//     actsum+=arr[i];
// }
// let missing = exp-actsum;
// console.log(missing)

//frequency count

// let arr = [1,2,5,6,3,2,1,4,5,1]
// let map = new Map();
// for(let i=0;i<arr.length;i++){
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1);
//     }else{
//         map.set(arr[i],1)
//     }
// }
// console.log(map)

//prime number
// function checkPrime(n){
//     let isPrime = true;

//     if(n<=1){
//         isPrime=false;
//     }
//     else{
//         for(let i=2;i<n;i++){
//             if(n%i===0){
//                 isPrime=false;
//                 break;
//             }
//         }
//     }

//     if(isPrime){
//         console.log("Pime number")
//     }else{
//         console.log("not prime")
//     }
// }

// checkPrime(10)

// sum of all number in arr
// let arr = [1,2,53,4,815,9,5,74,6,5]
// let sum = arr.reduce((s,n)=>s+n,0)
// console.log(sum)

//find common of two arrays
// let arr = [1,2,3,4,5]
// let arr1 = [3,4,5,6,87]

// let comm = [];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr1.length;j++){
//         if(arr[i]===arr1[j]){
//             comm.push(arr[i])
//         }
// }
// }

// console.log(comm)

//sort arr without using sort()

// let arr = [14, 25, 32, 1, 25, 6, 58, 3];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i+1; j < arr.length; j++) {
//     if (arr[i]>arr[j]) {
//         let temp = arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }
//   }
// }
// console.log(arr)

//finding first non repeating character in string
// let str = "haeoloe"
// for(let i=0;i<str.length;i++){
//     let n=0;
//     for(let j=0;j<str.length;j++){
//         if(str[i] === str[j]){
//             n++;
//         }
//     }
//     if(n<2){
//         console.log(str[i])
//         return;
//     }
// }

//double of every element in array
// let arr=[1,2,5,6,75,54,245,10]
// let double  = arr.map((n)=>n*2);
// console.log(double)

// let sum = arr.reduce((sum,num)=>sum+num,0);
// console.log(sum)

//convert array of object into another format

// let arr= [
//     {
//         id:1,
//         name:"Gopi"
//     },
//     {
//         id:1,
//         name:"ALex"
//     },
//     {
//         id:1,
//         name:"JAck"
//     },
//     {
//         id:1,
//         name:"ALice"
//     },
// ]

// let names = arr.map(n=>n.name)
// console.log(names)

//sort arr of obj by age
// let arr= [
//     {
//         age:45,
//         name:"Gopi",
//         salary:25000
//     },
//     {
//         age:1,
//         name:"ALex",
//         salary:2040
//     },
//     {
//         age:14,
//         name:"JAck",
//         salary:2004
//     },
//     {
//         age:17,
//         name:"ALice",
//         salary:2000,
//     },
// ]

// console.log(arr.sort((a,b)=>a.salary-b.salary))

// let str = "hello";
// let rev = ""
// for(let i = str.length-1;i>=0;i--){
//     rev+=str[i];
// }
// console.log(rev)

console.log([]+[]) //return empty string
console.log({}+{}) //[obj obj][obj obj]
console.log("10"+2) //102
console.log("12"+"15") //1215
console.log("10"-2) //8
console.log("1"+2+"1")
console.log([12]+[12]) //1212
