const express=require("express");
const path=require("path");

const user_router=express.Router();

user_router.get("/",(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,"../","views","home.html"));

})

module.exports = user_router;