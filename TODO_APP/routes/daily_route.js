const express = require("express")

const {getdata,createTODO} = require("../controllers/dailyTODO/dailytd")

const router = express.Router();

router.get("/",getdata);
router.post("/todos",createTODO);

module.exports=router;