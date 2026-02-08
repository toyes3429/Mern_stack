const http = require('http');
const reqhandler=require('./handler');


const server=http.createServer(reqhandler);

const PORT=3001;
server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})