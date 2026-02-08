const http=require('http');

const anything = (req,res)=>{
    console.log(req);
}
const server =http.createServer(anything);
server.listen(3000)
