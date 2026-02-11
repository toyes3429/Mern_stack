const express=require("express");
const path=require("path");

const user_router=express.Router();
const {homes}=require('./hostRouter');

user_router.get("/",(req,res,next)=>{
    console.log(homes);
    res.sendFile(path.join(__dirname,"../","views","home.html"));

})

module.exports = user_router;