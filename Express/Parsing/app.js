    const express=require('express');
    const body_parser=require("body-parser");

    const app=express();



    app.get("/",(req,res,next)=>{
        res.send(`
            <h2>Enter your name</h2>

        <form action="/submit-details" method="POST">
            <input 
                type="text" 
                name="username" 
                placeholder="Enter your name" 
                required
            />

            <button type="submit">Submit</button>
        </form>
            `)
    })

    app.post("/submit-details",(req,res,next)=>{
        console.log(req.body,req.method);//nothing appears here to get the data use the body parser
        next();
    })
    app.use(body_parser.urlencoded());

    app.post("/submit-details",(req,res,next)=>{
        console.log(req.body,req.method);//nothing appears here to get the data use the body parser
        next();
    })

    const PORT=3003;
    app.listen(PORT,()=>{
        console.log(`The server is running at http://localhost:${PORT}`);
    })
