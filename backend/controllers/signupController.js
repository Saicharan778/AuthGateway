const express = require("express");
const app = express();
app.use(express.json());
const signupModel = require("../models/signupModel");

const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = await signupModel.findOne({ userName });
    if (user) {
      return res.send("user already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await signupModel.create({ userName, email, hashedPassword });
    res.send("User created successfully");
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};
module.exports = signup;
