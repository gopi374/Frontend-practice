const jwt = require("jsonwebtoken");
const express = require("express");
// const mongoose = require("mongoose");

const app = express();

app.use(express.json());


// mongoose
//   .connect("mongodb://localhost:27012/jwt")
//   .then(() => console.log("✅ Mongodb is connected !"))
//   .catch((err) => console.log(err));


const SECRET_KEY = "my_super_secret_key";

app.post("/api/login", (req, res) => {
  const user = { id: 101, username: "umar_dev", role: "admin" };

  const token = jwt.sign(user, SECRET_KEY, { expiresIn: "12h" });

  res.status(200).json({
    message:"Login  Successful !",
    token :token
  });

});


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


app.listen(4000, () => {
  console.log("🚀 Server is listening on PORT :4000");
});
