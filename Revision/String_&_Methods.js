// String  - String in javascript it is an sequensce of characters or words that form an string , string are immutable
// that means string cannot be modify after creation.

//creation of string using litrals
let str = "  String in javascript";

//string creation using string constructor;
let finalstring = new String("String");
console.log(`final string : ${finalstring}`)

console.log(str)

//template litrals || String Interpolation
let nam = "Alex";
let a = `my name is ${nam}`;
console.log(a)

// String methods

// length
console.log(str.length);

//accessing string characters
console.log(str[1]);

//concate
let res = nam + str;
console.log(res)


//substring()
const str3= res.substring(0,4)
console.log(str3)

//case
console.log(str3.toUpperCase())
console.log(str3.toLowerCase())

//search
console.log(str.indexOf("t"))

//replace
console.log(res.replace('l',"A"));

//trim --remove the extra spaces from the string
let b = "     string    ";
console.log(b.trim())

// == vs ===

console.log(str == finalstring) //it will only compares the value
console.log(str === finalstring) //it will compares value and type of String
// output is false : str: is normal string , finalString: is string object


//slice - Return a part or slice of the given input string.
console.log(str.slice(2,5));

//substring -- return an new string from an given part of string
console.log(str.substring(1,4));

//substr-- it returns the character from the input given index
console.log(str.substr(1,5)); // substr(idx,totalCharacter)

//trim , trimStart , trimEnd -- it remove the extra spaces from the string
console.log(str.trim())

//concat--it is used to adding a two strings
let newstr = str+finalstring;
console.log(newstr)

//split--it is used for categorise the string from the given inputs (eg. - , . _)
let string = "string_of_jscript , js";
console.log(string.split("_")[0].toUpperCase());

//charAt--find the character at the index
// console.log(string.charAt(5))

//at -- return an character of the string from idx to another string
let s = '';
console.log(string.at(6,s))

//replce , replceAll
let str4 = string.replace("j","java")
console.log(str4)

console.log(string.replaceAll("j","k"))

//includes --return true or false
console.log(str.includes("s"))
