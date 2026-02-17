//Ecternal modules 
const express=require("express");
const path=require("path");

const user_router=express.Router();

const {homes}=require('./hostRouter');

const homescontroller = require("../controllers/homes");

user_router.get("/",homescontroller.getHome)

module.exports = user_router;