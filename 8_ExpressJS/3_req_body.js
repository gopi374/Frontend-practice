const express = require("express");
const path = require("path")
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to the API")
});

app.post("/users",(req,res)=>{
    const un = req.body.name;
    const age = req.body.age;

    if(!un || !age){
        return res.status(401).send("Error : Name and age are required")
    }

    console.log(`Creating user :${un} and Age :${age}`)

    res.status(201).json({
        message:"user created successfully"
    });
});

const port = 3000;
app.listen(port,()=>{
    console.log(`🚀 Server is Running on PORT: ${port}`)
})




/*

fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
        "Content-Type":"application/json",
    },
    body:JSON.stringify({
        name:"Gopi",
        Age:20
    })
})
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});

*/