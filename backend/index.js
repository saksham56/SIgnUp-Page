const express = require("express");
const app = express();
const {CreateSignup} =require("./type");
const {signup} = require("./db");
const cors = require("cors");
// const {userMiddleware} = require("./signupMdlewar")
app.use(cors());

app.use(express.json());

//signup
app.post("/signup",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = CreateSignup.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(404).json({
            msg:"Wrong Email/Username"
        })
        return;
    }
    await signup.create({
        username :createPayload.username,
        email : createPayload.email,
        password:createPayload.password
    })
    res.json({
        msg:"User Created"
    })
})
//Get all the users
app.get("/signups",async function(req,res){
    const signups = await signup.find();
    res.json({
        signups
    })
})

//login



app.listen(3000)