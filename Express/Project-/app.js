// External Modules 
const express=require("express");

//Local Module 
const user_router=require("./routes/userRouter");
const hostRouter=require("./routes/hostRouter");

// creation of app 
const app=express();


//Middlewares 

app.use(express.urlencoded());

app.use(user_router);

app.use(hostRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(Path.join(__dirname,"../","views","404.html"));
})


//actual server and its PORT
const PORT=3005
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})