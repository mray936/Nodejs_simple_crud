const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router = require("./src/router/index");
const conn = require("./src/DB/config");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(bodyParser.json());

// server creation
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
