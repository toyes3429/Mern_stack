// this worls as the external mosules 
const express=require("express");

//core Module 
const path=require("path");

// the mosule we will be exporting 
const hostRouter=express.Router();

hostRouter.get("/host/add-home",(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,"../","views","addhome.html"));

})

hostRouter.post("/host/add-home",(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,"../","views","successs.html"));
        console.log(req.body);

})

module.exports=hostRouter;