# Exress.

## Module
express work just like an external module in an app
const  express = require("express");
## initiliation 
const app=express();
initialisng the app just like we did in the nodejs 
like we used to have sa function that does all the thing in the node 
thats just like that 
## using the app
app.use((req,res,next)=>{

})
this the thing that is important firslty and we have to understand this 
firstly in node we were just passing the req and res 
but now we have a new parameter also the "next",
the next is used beacuse 
the express works on middlewares like if a work is done only when we will move to the next one 
so we use next here lets suppose we make to things login and payment 
then i will do like thiss 
app.use((req,res,next)=>{
    //my login thing
    next();
})
app.use((req,res,next)=>{
    //transaction thing 
    next();
})
## Sending response to the 
in node we were doing like res.setHeader() and res.write()
but in express we just have to pass one line 
    res.send("<h1>This is the express series</h1>") this will do the work 
internally the express handles the request as the html we dont have to justify it 
## Handling Routes...
