//Core Modules
const http = require('http');

//External Modules
const express = require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("This is the 1st middleware ",req.url,req.method);
    next();
})

app.use((req,res,next)=>{
    console.log("This is the 2nd middleware ",req.url,req.method);
    res.send("<h1>This is the express series</h1>")
})
const request=(req,res)=>{
    console.log(req);
}
const server=http.createServer(app);
const PORT=3002;
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})