const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:OHp5uOrmqP7acYNo@cluster0.d9l2cqe.mongodb.net/sign-up");

const signupSchema = mongoose.Schema({
    username : String,
    password : String
})

const signup = mongoose.model("sign-up",signupSchema)

module.exports ={
    signup
}