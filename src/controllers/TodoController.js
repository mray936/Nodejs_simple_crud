const Todo = require("../models/todo");

exports.addtodo = async (req, res) => {
  try {
    const data = await new Todo({ ...req.body }).save();

    return res
      .status(200)
      .send({ success: true, message: "Todo added successfully", data });
  } catch (error) {
    console.log("error==>", error);
    return res
      .status(400)
      .send({ success: false, message: "Something went wrong", error });
  }
};
