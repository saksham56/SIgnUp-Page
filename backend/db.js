require('dotenv').config();

const mongoose = require("mongoose");

console.log()
mongoose.connect(process.env.URI);

const signupSchema = mongoose.Schema({
    username:String,
    email : String,
    password : String
})

const signup = mongoose.model("sign-up",signupSchema)

module.exports ={
    signup
}