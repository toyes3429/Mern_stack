// this worls as the external mosules 
const express=require("express");

//core Module 
const path=require("path");

// the mosule we will be exporting 
const hostRouter=express.Router();

hostRouter.get("/host/add-home",(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,"../","views","addhome.html"));

})

const homes=[];
hostRouter.post("/host/add-home",(req,res,next)=>{
    console.log("House That is registerd is:",req.body,req.body.Housename);
    res.sendFile(path.join(__dirname,"../","views","successs.html"));
        homes.push({"HouseName":req.body.Housename});

})

exports.hostRouter=hostRouter;
exports.homes=homes;