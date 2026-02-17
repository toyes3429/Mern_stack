const homes_=require('../models/homes');

exports.getHome=(req,res,next)=>{
    console.log(homes);
    // res.sendFile(path.join(__dirname,"../","views","home.html"));
    res.render('home',{homes: homes});
}

exports.getAddHome=(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","addhome.html"));
}

exports.postAddHome=(req,res,next)=>{
    console.log("House That is registerd is:",req.body,req.body.Housename);
    const home_=new homes_(req.body.HouseName)
    res.sendFile(path.join(__dirname,"../","views","successs.html"));
        // homes.push({"HouseName":req.body.Housename}); // instead of this wee can do like 
        home_.save();

}   
exports.homes=homes;