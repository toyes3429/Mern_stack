//Core Modules
// const http = require('http');

//External Modules
const express = require('express');

const app=express();

app.use("/",(req,res,next)=>{
    console.log("This is the 1st middleware ",req.url,req.method);
    next();
})

app.use("/new",(req,res,next)=>{
    console.log("This is the 2nd middleware ",req.url,req.method);
    res.send("<h1>This is the express series</h1>")
})
app.get("/",(req,res,next)=>{
    res.send("<h1>this is the home page that will be used by me probably<h1/>");
});
app.post("/submit-details",(req,res,next)=>{
        res.send("<h1>this is post page of submit details<h1/>");
})
app.get("/submit-details",(req,res,next)=>{
        res.send(`<h1>this is get page of submit details<h1/>
            <form action="/submit-details" method="POST">
    <button type="submit">Submit</button>
</form>`);
        
})
const request=(req,res)=>{
    console.log(req);
}
// const server=http.createServer(app);
const PORT=3002;
// server.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`)
// })
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})