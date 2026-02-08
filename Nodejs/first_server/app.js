const http=require("http");

function RequestListener(req,res){
    // console.log(req);  ?? Used to log the data that we will get from the browser 
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> Toyes Here</title></head>');
    res.write('<body><h1>Hii i am learning Node.js</h1></body>')
    res.write('</html>');
    res.end();
    // process.exit();
}
const server=http.createServer(RequestListener);
server.listen(3000);    

//Another way to do the same thing 

// const PORT=3001;
// server.listen(PORT,()=>{
//     console.log("The server is running now:");  
// })