const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("sdfdfjsldf");
});
userRouter.get("/login", (req, res) => {
  res.send("login");
});
userRouter.post("/join", (req, res) => {
  res.send("join");
});

module.exports = userRouter;
