const express = require("express");
const {createUser,getStudents,getStudentsByID,getStudentsByName,UpdateDataUsingID,updateDatafield,deleteUser} = require("../controllers/students/studentControllers")


const router = express.Router();

router.get("/",getStudents);
router.get("/:id",getStudentsByID);
router.post("/",createUser);

module.exports = router;