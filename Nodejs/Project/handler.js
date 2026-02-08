const requesthandler=require('./sum');
const calculator=(req,res)=>{
    console.log(req.url,req.method);
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head>
            <title>Practise Set</title>
            </head>
            <body>
            <h1>Welcome To The calculator</h1>
            <a href="/calculator"> Go_to_Calculator</a>
            </body>
            </html>
            `)
            return res.end();
    }
    else if(req.url === '/calculator'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head>
            <title>Practise Set</title>
            </head>
            <body>
            <h1>Here is the calculator</h1>
            <form action = "/calculate-result" method="POST">
                <input type="text" placeholder="First Num" name="First"></input>
                <input type="text" placeholder="Second Num" name="Second"></input>
                <input type="submit" value="Sum"></input>
            </form>
            </body>
            </html>
            `)
            return res.end();
    }
    else if(req.url==='/calculate-result' && req.method==="POST"){
         requesthandler(req,res);
         
        
    }
}
module.exports=calculator