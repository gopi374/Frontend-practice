const mongoose = require("mongoose");

const MG_URL = "mongodb://localhost:27017/todo-app";

mongoose.connect(MG_URL).then(() => {
  try {
    console.log(`🚀 DB is connected ${MG_URL}`);
  } catch (err) {
    console.log(`Cannot connect due to :${err}`);
  }
});


const todo= new mongoose.Schema({
  task : String,
});

const newtodo = mongoose.model("todo",todo);

module.exports=newtodo;