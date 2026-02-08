//Lets suppose we have to use some manula modules 

//lke using the same code again and again but now having to write it 
//just import it from somewhere else
//
// in this file we will be seeing that 

const http=require('http');
const any_name=require('./module')
// function reqlist(req,res){
        //thiss is the function in which we were doing our thing 
        // but now we have to import that same thing from somewhere else
        
// }
const PORT=3001;
const server=http.createServer(any_name);
server.listen(PORT,()=>{console.log(`Server Running at http://localhost:${PORT}`)});