
let id = 1;
let todo = [
    {id : 0, task : "DSA"}
];

const getdata = (req,res)=>{
    res.status(200).json({
        message:"todos",
        todos : todo,
    })
};

const createTODO = (req,res)=>{
    const tas = req.body.task;

    if (!tas) {
        return res.status(400).json({
            message: "Task is required"
        });
    }

    const obj = {
        id: id++,
        task: tas,
    };

    todo.push(obj);

    res.status(201).json({
        message: "TODO Created !!",
        NewTODO: obj,
    });
}

module.exports = {getdata,createTODO}
