
const fs = require('fs');
const { default: CacheHandler } = require('undici-types/cache-interceptor');


function reqList(req,res){
    console.log(req.url, req.method);

    const body=[];
    // If a POST request is received at the root, collect the body and log it
    if (req.method === 'POST' && req.url === '/') {
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedbody=Buffer.concat(body).toString();
            // console.log(parsedbody);

            //problem is the data we get is kinda encrypted now we have to decrypt it 
            const params = new URLSearchParams(parsedbody);

            // const jsonObject = {};
            // for(const [key,value] of params.entries()){
            //     jsonObject[key]=value;  
            // }

            // i have one more way to do the same thing 
            const jsonObject=Object.fromEntries(params);
            //thats like the direct line answer 
            
            console.log(jsonObject);
        })
    }

    // Otherwise serve the feedback form (uses POST)
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h2>Feedback</h2>');
    res.write('<form method="POST" action="/">');
    res.write('<label for="feedback">Your Feedback:</label><br><br>');
    res.write('<textarea id="feedback" name="feedback" rows="8" cols="50" placeholder="Write your feedback here..."></textarea><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

}

// i have written that function here 

// i have to use on line here 
module.exports=reqList;

// we can export multiple things at once also 
// by passing it through an object 

// module.exports={
//     handler:reqList,
//     extra:'Extra'
// };

//Like this 