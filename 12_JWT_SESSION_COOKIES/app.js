const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();

app.use(express.json());


const SECRET_KEY = "my_super_secret_key";

app.post("/api/login", (req, res) => {
  const user = { id: 101, username: "Alex_dev", role: "admin" };

  const token = jwt.sign(user, SECRET_KEY, { expiresIn: "48h" });

  res.status(200).json({
    message:"Login  Successful !",
    token :token
  });

});

app.post("/api/get-token",(req,res)=>{

  const token = jwt.sign("this is my msg",SECRET_KEY,{algorithm:"HS256",issuer:"Gopi"})
  res.status(200).json({
    msg:"geting ",
    token:token,
  })

})

app.get("/api/profile", (req, res) => {
  // The client sends the token in the headers (Authorization: Bearer <token>)
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  // Extract token from "Bearer <token>"
  const token = authHeader.split(" ")[1];

  // Verify the token
  jwt.verify(token, SECRET_KEY, (err, decodedData) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or Expired Token" });
    }
    // Token is valid! decodedData contains the payload (id, username, role)
    res.status(200).json({
      message: "Welcome to your profile!",
      userData: decodedData,
    });
  });
});


app.get("/check-token", (req, res) => {
  let { token } = req.query;
  try {
    let data = jwt.verify(token, JWT_SECRET);

    res.send({
      msg: "Token is genuine",
      data,
    });
  } catch (error) {
    res.send({
      msg: "Token ke saath chedh khaani kari gai hai",
      err: error.message,
    });
  }
});

app.post("/",async (req,res)=>{
  let {token}=req.query;
  try{
    let data=jwt.verify(token,JWT_SECRET);

    res.send({
      msg:"token verified",
      data,
    });
  }catch(error){
    res.send({
      msg:"invalid token",
      error:error.message,
    })
  }
})

app.get(
  "/delete-database",
  function (req, res, next) {
    let { token } = req.query;
    let data = jwt.verify(token, JWT_SECRET);

    if (data.superAdmin) return next();
    else
      res.status(404).send({
        msg: "Invalid request",
      });
  },
  (req, res) => {
    res.send({
      msg: "Poora Data base udda diya",
    });
  },
);


app.listen(4000, () => {
  console.log("🚀 Server is listening on PORT :4000");
});
