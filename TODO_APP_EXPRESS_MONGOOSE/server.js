const express = require("express");
const mongoose = require("mongoose");
const path =require("path");

const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname,'public')));

const MG_URL = "mongodb://localhost:27017/todo_app";

mongoose
  .connect(MG_URL)
  .then(() => console.log(`🚀 DB is connected ${MG_URL}`))
  .catch(() => console.log(`Cannot connect due to :${err}`));


  //2.collection schema

const todoschema = mongoose.Schema(
  {
    title: { type: String, required: true },
    priority: { type: Number, default: 0 },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const todo = new mongoose.model("todo",todoschema);

//3 api endpoints

app.post("/todos",async (req,res)=>{
    // console.log(req.body.title);
    // console.log(req.body.isCompleted);

    const newtodo = new todo(req.body);
    console.log(newtodo)
    try{
        const savetodo = await newtodo.save();
        // console.log(savetodo)
    }catch(err){
        res.status(404).send("Error he")
    }

    res.status(201).json({
        message:"new todo created & saved !",
        data : newtodo,
    })
})

app.get("/todos",async(req,res)=>{
    const todos = await todo.find().sort({priority:-1,createdAt:-1})
    try{
        res.status(200).json({
            message:"All todos !",
            Todos : todos,
        });
    }catch(err){
        res.status(404).send(err);
    }
})

app.delete("/todos/:id",async(req,res)=>{
    try{
    const deletetodo = await todo.findByIdAndDelete(req.params.id);

    if(!deletetodo){
        res.status(404).send("todo not found")
    }
    res.status(200).json({
        message:"deleted"
    });
    }catch(err){
        res.status(500).send(err);
    }
});

app.patch("/todos/:id/priority",async(req,res)=>{
    const {action} = req.body; //{"action":"increased"} OR {"action":"decrease"}
    try{
    const td = await todo.findById(req.params.id);

    if(!td) res.status(404).send("Todo not found !")

    if(action === "increase") td.priority +=1;
    else if(action === "decrease") td.priority -=1;
    else res.status(404).send("Action must be increase or decrease ")

    await td.save();
    res.status(200).send("priority updated !");

    }catch(err){
        console.log(err)
    } 
})

app.listen(4000, () => {
  console.log("🚀 Server is listening on PORT :4000");
});
