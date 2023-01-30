const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
// mongoose.connect("mongodb://localhost:27017/e-comm");
const connectDB = mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
if (!connectDB) {
  console.log("error");
} else {
  console.log("db connected");
}
