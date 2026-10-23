const express = require("express");

const {getdata,createTODO,deleteTodo,updateTodo,updateTodosField} = require("./controllers/dailyTODO/dailytd")

const cors = require('cors');

const daily_router = require("./routes/daily_route")

const app = express();


// middleware
app.use(express.urlencoded());
app.use(express.json())

//it allow sending or recieving request from client to server
app.use(cors());
app.use("/t",daily_router);

app.get("/",getdata);

app.post("/todos",createTODO);

app.delete("/todos/:id",deleteTodo);

app.put("/todos/:id",updateTodo);

app.patch("/todos/:id",updateTodosField);

app.listen(4000,()=>{
    console.log("🚀 Server is Running on PORT :4000")
});