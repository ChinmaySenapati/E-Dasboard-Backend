const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  company: String,
  catagory: String,
  userID: String,
});

module.exports = mongoose.model("products", productSchema);
