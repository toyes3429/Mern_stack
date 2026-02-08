const requesthandler= (req,res)=>{
    // console.log("hello",req);
    const body=[];
    req.on('data',chunk=>{
        // console.log(chunk);
        body.push(chunk);
    })
    req.on('end',()=>{
        const data=Buffer.concat(body).toString();
        console.log(data);

        const sum=new URLSearchParams(data);
        const dataObject={};
        for(const [key,value] of sum.entries()){
            dataObject[key]=value;
        }
        // console.log(dataObject);
        let new_sum=0;
        for(const key in dataObject){
            const value=dataObject[key];
            const real_value=Number(value)
            new_sum=new_sum+real_value;
        }
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head>
            <title>Practise Set</title>
            </head>
            <body>
            <h1>Here is the sum ${new_sum}</h1>
            </body>
            </html>
            `)
            return res.end();
    })
}

module.exports=requesthandler;