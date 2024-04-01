const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async (req, res) => {
  const connect = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB connected");
};

module.exports = connectDB();
