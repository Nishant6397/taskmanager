const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
var bodyParser = require("body-parser");
require("dotenv").config();
// middleware
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(express.json());
// routes

// middleware

app.use("/api/v1/tasks", tasks);

// get all task
const mongoDBUrl = process.env.MONGODB;
const port = process.env.URL || 8000;
const start = async () => {
  try {
    await connectDB(mongoDBUrl);
    app.listen(port, () => {
      console.log("Server is listening on the port ", port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
