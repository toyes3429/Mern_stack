const path=require('path');

exports.error404=(req,res,next)=>{
    // console.log(__dirname);   //used this to fix an bug related to the file path
    res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
}