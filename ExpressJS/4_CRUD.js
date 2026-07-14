const express = require("express")

const {createUser,getStudents,getStudentsByID,getStudentsByName,UpdateDataUsingID,updateDatafield,deleteUser} = require("./controllers/students/studentControllers")

const app = express();

app.use(express.urlencoded())

app.get("/",getStudents);

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