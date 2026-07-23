const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const PORT = 4000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/cookies")
  .then(() => {
    console.log("✅ Mongodb is connected !"),
      app.listen(PORT, () => {
        console.log(`🚀 Server is listening on PORT :${PORT}`);
      });
  })
  .catch((err) => console.log(err));

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("user", userSchema);

app.post("/signup", async (req, res) => {
  let {email,password} = req.body;
  let user = await User.findOne({email});
  console.log(user);
  if(user){
    return res.status(400).json({
        msg : "email is already exists !"
    });
  }

    await User.create({
      email,
      password,
    })

    res.send({
        msg:"user signup success"
    });
});


app.post("/login",async (req,res)=>{
    const {email,password} = req.body;
    let user = await User.findOne({email});
    if(!user){
        return res.status(400).json({
            msg:"Email does not exist, try a valid email",
        })
    }
    if(user.password !== password){
        return res.status(400).json({
            msg:"password invalid"
        })
    }

    let mycookie = {
        id:user._id,
    }
    res.cookie("CookiesData",JSON.stringify(mycookie));

    res.send({
        msg:"login success"
    })
})

app.get("/dashboard",async (req,res)=>{
    let cookiesData = JSON.stringify(req.cookies.cookiesData);
    let id = cookiesData.id;
    let uesr = await User.findOne({_id:id});
    if(!user)
        return res.status(400).json({
            msg:"Login again",
        })
    res.send({
        msg:"welcome to dashBoard !"
    })
    
})