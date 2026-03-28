require("dotenv").config();
const express = require("express");
const connectDb = require("./db.js");
if (!connectDb()) {
  process.exit(-1);
}

const userRouter = require("./routers/user.js");
const questionRouter = require("./routers/question.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.use("/user", userRouter);
app.use("/question", questionRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
