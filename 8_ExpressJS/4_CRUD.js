const express = require("express")
const {createUser,getStudents,getStudentsByID,getStudentsByName,UpdateDataUsingID,updateDatafield,deleteUser} = require("./controllers/students/studentControllers")

//mongodb
// const { MongoClient } = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);




//router
const student_routes = require("./routes/student_routes")

//middle ware
const app = express();

app.use("/students",student_routes);


app.use(express.urlencoded())

app.get("/",getStudents);

app.use("/", (req, res, next) => {
  console.log("Middleware Called !");
  next();
});

app.get("/:id",getStudentsByID)

app.get("username/:name",getStudentsByName);

//create users
app.post("/",createUser)

//put method(update)
app.put("/:id",UpdateDataUsingID);

//patch - it will only update particular field
app.patch("/:id",updateDatafield);

app.delete("/:id",deleteUser);

const port = 3000;
app.listen(port,()=>{
    console.log(`🚀 Server is Running on PORT: ${port}`)
})