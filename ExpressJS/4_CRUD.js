const express = require("express")

const app = express();

app.use(express.urlencoded())

let students = [
    {id:1,name:"Gopi",age:500},
    {id:2,name:"User2",age:400},
];

app.get("/",(req,res)=>{
    res.status(200).json(students);
})
//get request 
app.get("/:id",(req,res)=>{
    const studentID = parseInt(req.params.id);
    
    const student  = students.find(u=>u.id === studentID);

    if(!student){
        res.status(404).send("Student not Found !");
    }
    res.status(200).json({
        message:"Student Found !!",
        student : student,
    });
})
//finding the data using name
app.get("/username/:name",(req,res)=>{
    const studentName = req.params.id;
    
    const student  = students.find(u=>u.id === studentName);

    if(!student){
        res.status(404).send("Student not Found !");
    }
    res.status(200).json({
        message:"Student Found !!",
        student : student,
    });
})

//post
app.post("/",(req,res)=>{
    console.log(req.body.name);
    const user = {
        id : students.length+1,
        name : req.body.name,
        age : req.body.age
    };

    students.push(user);

    res.status(201).json({
        message : "Student creates Successfully !!",
        newStudent : user,
    });
});

//put method(update)

app.put("/:id",(req,res)=>{
    const stdId = parseInt(req.params.id);

    const useridx = students.findIndex(u=>u.id === stdId);

    if(useridx == -1) res.status(404).send("Student not found")
    
    students[useridx] = {
        id : stdId,
        name : req.body.name,
        age : req.body.age,
    };

    res.status(200).json({
        message : "student Updated !!",
        student : students[useridx],
    })
})

//patch - it will only update particular field

app.patch("/:id",(req,res)=>{
    const stdId = parseInt(req.params.id);

    const useridx = students.findIndex(u=>u.id === stdId);

    if(useridx == -1) res.status(404).send("Student not found")

    if(req.body.name) students[useridx].name = req.body.name;
    if(req.body.age) students[useridx].age = req.body.age;

    res.status(200).json({
        message :"field updated",
        student : students[useridx],
    });
});

//delete 
 
app.delete("/:id",(req,res)=>{
    const stdId = parseInt(req.params.id);
    let prevlen = students.length;
    students = students.filter(u => u.id !== stdId);
    if(prevlen == students.length) res.status(404).send("User Not Exist 🚫")
    res.status(200).json({

        message : "user deleted",
        Previous_Student_Count : prevlen,
        Current_Student_Count : students.length,
    })
})

const port = 3000;
app.listen(port,()=>{
    console.log(`🚀 Server is Running on PORT: ${port}`)
})