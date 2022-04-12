const express = require("express");
const app = express();
const port = 5050;
const bodyParser = require("body-parser");
const config = require("./config/key");
const { User } = require("./models/User");
const userRouter = require("./userRouter");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello world"));

app.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log("Express server has started on port 5050");
});
