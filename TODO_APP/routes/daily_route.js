const express = require("express")

const {getdata,createTODO,deleteTodo,updateTodo,updateTodosField} = require("../controllers/dailyTODO/dailytd")

const router = express.Router();

router.get("/",getdata);
router.post("/todos",createTODO);
router.delete("/todos/:id",deleteTodo);
router.put("/todos/:id",updateTodo)
router.patch("/todos/:id",updateTodosField);
module.exports=router;