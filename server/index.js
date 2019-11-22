// Main starting point of application

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");

// DB Setup
mongoose.connect(
  "mongodb://localhost:auth/auth",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.set("useCreateIndex", true);

// App Setup
app.use(morgan("combined")); // logger
app.use(bodyParser.json({ type: "*/*" }));
//app.use(express.json());
router(app);

//Server Setup
const port = process.env.PORT || 3090;
// create a http server that knows how to receive requests and forward it on to our application
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
