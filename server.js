const express = require("express");
const mongoose = require("mongoose");

let app = express();
let port = process.env.port || 3000;

let client = require("./dbConnection");
let router = require("./routes/routes");

app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/cat", router);

app.listen(port, () => {
  console.log("server started");
  //run().catch(console.dir);;
});
