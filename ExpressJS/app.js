const express = require("express");
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname,"public")))

app.get("/",function(req,res){
    // res.send("hello world")
    res.sendFile(path.join(__dirname, "/index.html"))
})


app.get("/about",(req,res)=>{
    // res.send("<h1>this is about page</h1>")
    res.send(`${req.query.name}`)  //data from url
})

app.get("/about/:name",(req,res)=>{
    // res.send("<h1>this is about page</h1>")
    res.send(`${req.params.name}`)  //data from url
})

app.listen(3000,()=>{
    console.log('🚀 Server is running on PORT: 300')
});