const path=require('path');
const {home: Home, home_detail: HomeDetail} = require('../models/homes');

exports.getHome=(req,res,next)=>{
    const allHomes=Home.fetchAll();
    res.render('home',{homes: allHomes});
}

exports.getAddHome=(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","addhome.html"));
}

exports.postAddHome=(req,res,next)=>{
    console.log("House That is registered is:",req.body);
    const home=new Home(req.body.Housename);
    home.save();
    res.redirect('/');

}   

exports.home_detail = (req,res,next)=>{
    const allDetails = HomeDetail.fetchAll();
    res.render("home-detail", {details: allDetails})
}
exports.posthome_deatils=(req,res,next)=>{
    console.log(req.body);
    const logged_home_detail = new HomeDetail(req.body.name, req.body.email, req.body.rating, req.body.feedback);
    logged_home_detail.save();
    res.redirect('/home-detail');
}

exports.homes=Home;


