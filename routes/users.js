require('dotenv').config();
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/nextnode").then(function(){
//   console.log("database successfully connected")
// })


mongoose.connect(process.env.MONGODB_KEY).then(function(){
  console.log("database successfully connected")
})




const userSchema = mongoose.Schema({
  // name : String,
  username : String,
  // email : String,
  password : String
})
userSchema.plugin(plm);
module.exports = mongoose.model("user",userSchema);
