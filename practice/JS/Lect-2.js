// let n = 4;
// let a = " ";
// for (let i = n; i >= 0; i--) {
//     a+="*";
//     console.log(a); 
// }

//strings
// let msg = "            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea impedit. Quaerat ex optio neque mollitia. Laborum expedita quia ducimus aut dolorem neque possimus tempora alias, totam aliquam ex! Adipisci veniam eos cupiditate debitis, est minima eveniet ipsam delectus accusamus. Atque odio corporis natus est quaerat, cumque fuga consequuntur blanditiis quibusdam quos quia voluptatum dolore sint libero earum dicta molestiae enim distinctio sunt amet nemo vitae nobis, voluptatem aut! Minus odit nostrum corporis. Similique vero exercitationem illo pariatur architecto maiores itaque, deserunt tenetur aliquid, veniam est ducimus ullam nostrum atque. Debitis quisquam iste, expedita in est porro nulla non voluptas!";
// console.log(msg.length);
// console.log(msg.toLocaleUpperCase());
// msg.trim();
// console.log(msg.length);

//Array
let arr = [0,8,5,"bye",false];
let arr1 = [0,1,5,true,arr,"first","array"];

// console.log(arr1);
// arr.pop();
// arr.push("hello");
// arr.unshift(52);
// arr.shift();
// console.log(arr1);

// arr1.splice(4,1,"gopi","banjara","hello","world");
// console.log(arr1);

//object

let user = {
    name: "alice",
    age : 25,
    isStrudent : true,
    "last name":"BorderLand",
    '':"Empty key",
    " ":"space key"//only accessible  console.log(user[''])
}
console.log(user);
console.log(user.age)
console.log(user.isStrudent) //.opt cannot access empty string  and space key (eg -> ''," ", last name)
console.log(user['']) //square bracket can access empty string and key (eg -> ''," " ," last name");
console.log(user[" "])
console.log(user["name"],user["last name"])