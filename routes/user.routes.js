const express = require("express");
const app = express.Router();
const UserModel = require("../models/user.models");

//signup function=========================
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      res.status(401).send({ message: "email already exists" });
    } else {
      let newUser = await UserModel.create({ name, email, password });
      res.send({ message: "Signup successfull", user: newUser });
    }
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

//login function=========================
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email, password });
    if (user) {
      res.status(201).send({ message: "login successfull", data: user });
    } else {
      res.status(401).send({ message: "Invalid Credentials",});
    }
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

app.post("/logout", async (req, res) => {
  
});
module.exports = app;
