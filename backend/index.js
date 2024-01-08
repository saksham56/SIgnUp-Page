const express = require("express");
const app = express();
const {CreateSignup} =require("./type");
const {signup} = require("./db");
const cors = require("cors");
const {userMiddleware} = require("./signupMdlewar")
app.use(cors());

app.use(express.json());

app.post("/signup",userMiddleware,async function(req,res){
    const createPayload = req.body;
    const parsedPayload = CreateSignup.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(404).json({
            msg:"Wrong Email/Username"
        })
        return;
    }
    await signup.create({
        username : createPayload.username,
        password:createPayload.password
    })
    res.json({
        msg:"User Created"
    })
})

app.get("/signups",async function(req,res){
    const signups = await signup.find();
    res.json({
        signups
    })
})



app.listen(3000)