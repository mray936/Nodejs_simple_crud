const express = require("express");
const router = express.Router();
const todoController = require("../controllers/TodoController");

router.post("/addtodo", todoController.addtodo);

module.exports = router;
