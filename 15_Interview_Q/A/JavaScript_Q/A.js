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

