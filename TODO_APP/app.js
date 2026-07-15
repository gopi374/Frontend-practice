const express = require("express");


const app = express();
app.use(express.urlencoded());

let id = 1;
let todo = [];
 
let priority = 0;

app.get("/todos",(req,res)=>{
    res.status(200).json({
        message:"todos",
        todos : todo,
    })
})

app.post("/todos",(req,res)=>{
    const task = req.body.name;
    
    const obj = {
        id : id++,
        Task : task
    }
    todo.push(obj);
    res.status(201).json({
        message:"TODO Created !!",
        NewTODO : obj,
    });
})


app.listen(4000,()=>{
    console.log("🚀 Server is Running on PORT :4000")
});