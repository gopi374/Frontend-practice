let students = [
    {id:1,name:"Gopi",age:500},
    {id:2,name:"User2",age:400},
];

const getStudents = (req,res)=>{
    res.status(200).json(students);
}

const deleteUser = (req,res)=>{
    const stdId = parseInt(req.params.id);
    
    let prevlen = students.length;

    students = students.filter(u => u.id !== stdId);
    if(prevlen == students.length) res.status(404).send("User Not Exist 🚫")
    res.status(200).json({

        message : "user deleted",
        Previous_Student_Count : prevlen,
        Current_Student_Count : students.length,
    })
}

//post
const createUser = (req,res)=>{
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
}



//find request by ID 
const getStudentsByID = (req,res)=>{
    const studentID = parseInt(req.params.id);
    
    const student  = students.find(u=>u.id === studentID);

    if(!student){
        res.status(404).send("Student not Found !");
    }
    res.status(200).json({
        message:"Student Found !!",
        student : student,
    });
};

//finding the data using name
const getStudentsByName = (req,res)=>{
    const studentName = req.params.id;
    
    const student  = students.find(u=>u.id === studentName);

    if(!student){
        res.status(404).send("Student not Found !");
    }
    res.status(200).json({
        message:"Student Found !!",
        student : student,
    });
}

//put method(update)
const UpdateDataUsingID = (req,res)=>{
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
}

//patch - it will only update particular field
const updateDatafield = (req,res)=>{
    const stdId = parseInt(req.params.id);

    const useridx = students.findIndex(u=>u.id === stdId);

    if(useridx == -1) {
        return res.status(404).send("Student not found")
    }
    if(req.body.name) students[useridx].name = req.body.name;
    if(req.body.age) students[useridx].age = req.body.age;

    res.status(200).json({
        message :"field updated",
        student : students[useridx],
    });
}


module.exports={createUser,getStudents,getStudentsByID,getStudentsByName,UpdateDataUsingID,updateDatafield,deleteUser};