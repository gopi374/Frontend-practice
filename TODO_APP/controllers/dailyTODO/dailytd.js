
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

//delete 
const deleteTodo = (req,res)=>{
    const did = Number(req.params.id);

    let prevlen = todo.length;

    todo=todo.filter(t=>t.id !== did)

    let newlen = todo.length;

    if(prevlen === newlen) res.send("todo not found");

    res.status(200).json({
        message:"Todo deleted successfully",
        previos_length_of_todo : prevlen,
        cuurent_length_of_todo :newlen
    })
}


//update
const updateTodo = (req,res)=>{
    const uid= parseInt(req.params.id);

    const todoid = todo.findIndex(u=>u.id === uid);
    
    if(todoid == -1){
        res.status(404).json({
            message:"todo not found",
        })
    };

    todo[todoid]={
        id:uid,
        task:req.body.task,
    }

    res.status(201).json({
        message:"todo updated successfully",
        updated_todo:todo[todoid],
    })
}

const updateTodosField=(req, res) => {
    const uid = parseInt(req.params.id);

    const todoid = todo.findIndex(u => u.id === uid);

    if (todoid === -1) {
        return res.status(404).json({
            message: "Todo not found",
        });
    }

    if (req.body.id !== undefined) {
        todo[todoid].id = req.body.id;
    }

    if (req.body.task !== undefined) {
        todo[todoid].task = req.body.task;
    }

    return res.status(200).json({
        message: "Field updated successfully",
        todo: todo[todoid],
    });

}
module.exports = {getdata,createTODO,deleteTodo,updateTodo,updateTodosField}
