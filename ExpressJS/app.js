const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("hello world")
})


app.get("/about",(req,res)=>{
    res.send("<h1>this is about page</h1>")
})

app.listen(3000);