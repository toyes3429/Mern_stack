// External Modules 
const express=require("express");
const path=require('path');

//Local Module 
const user_router=require("./routes/userRouter");
const {hostRouter}=require("./routes/hostRouter");

const rootDir = require('./utils/path');

// creation of app 
const app=express();



//Middlewares 

//adding the static file for the home.css
app.use(express.static(path.join(rootDir, 'public')));

app.use(express.urlencoded());

app.use(user_router);

app.use(hostRouter);

app.use((req,res,next)=>{
    // console.log(__dirname);   //used this to fix an bug related to the file path
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
})


//actual server and its PORT
const PORT=3005
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})