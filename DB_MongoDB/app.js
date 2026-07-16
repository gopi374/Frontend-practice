const { MongoClient } = require("mongodb");

const schema = require("./mongoose");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "CollegeDB";

client.connect();
console.log("🛜  Connected successfully to MONGODB server");

const db = client.db(dbName);
const students = db.collection("students");

// const findResult = students
//   .find({})
//   .toArray()
//   .then((data) => {
//     console.log("Found documents =>", data);
//   });

// const insertResult = students
//   .insertMany([
//     { a: 1 }, 
//     { a: 2 },
//     { a: 3 }
//   ]).then(data=>{
//       console.log(data);
//   })

// const findname = students
//   .find({
//     name: "Gopi"
//   })
//   .toArray()
//   .then(data=>{
//     console.log(data)
//   })