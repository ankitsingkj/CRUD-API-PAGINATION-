const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: String,
  email: String,
  password: String,
  contact: Number
});

// SAFE export (OverwriteModelError fix)
module.exports =
  mongoose.models.User || mongoose.model("User", userSchema);






