console.log("Hey i am here");

const fs=require("fs");
fs.writeFile("output.txt","Hello World",(err)=>{
    if(err) console.log("Erorr Occured");
    else console.log("Successsfully Writtten")
})
