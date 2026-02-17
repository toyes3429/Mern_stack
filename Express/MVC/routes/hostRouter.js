// this worls as the external mosules 
const express=require("express");

//core Module 
const path=require("path");

// the mosule we will be exporting 
const hostRouter=express.Router();

const homescontroller=require('../controllers/homes');

hostRouter.get("/host/add-home",homescontroller.getAddHome)


hostRouter.post("/host/add-home",homescontroller.postAddHome);


hostRouter.get("/home-detail",homescontroller.home_detail);

hostRouter.post('/home-detail',homescontroller.posthome_deatils);

exports.hostRouter=hostRouter;
