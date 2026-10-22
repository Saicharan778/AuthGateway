const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
const signupRoute = require("./routes/signupRoute");
const loginRoute = require("./routes/loginRoute");

app.use(signupRoute);
app.use(loginRoute);

mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => {
    console.log("connected to MONGODB");
  })
  .catch((err) => {
    console.log("MONGODB connection failed");
  });

app.listen(2042, () => {
  console.log("server is listening on port 2042");
});
