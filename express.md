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
app.use([path,]callback[,callback...])
ex:-> app.use('/' (req,res,next)=>{
    res.send("<h1>This is the Home page</h1>")
})

one major thing :-> you cant call next after sending an response 
cant call next() after the res.send();

another major thing:-> '/' matches everything

## removing the http server using the express 
now we know express so we dont have to use the http method to create an server 
we can directly use the express 
just do
ex:->app.listen(PORT,()=>{
    //anything you want to pass
}) 
## some new Methods 
till now we were just talking about the app.use() in this case we were just blindly sending the response 
but now we can use the other methods in diffrent situations  like->
1. app.get()  
    when the user goes with the get method only then will send the response 
2. app.post()
    when the user goes with the post method only then will send the response

# Parsing Request

## Old School Method (Nowadays not used)
const bodyparser=require('body-parser');

remember the method we used to get the info from the chunks of an data from the user 

## express router 
just made diffrent files for diffrent use and implemented them in the major app file 
just like django we just have to export the diffrent pages and most imp we have to 
import them firstly

## Adding 404
whenever we get to an page where we havent routing yet we het the message Cannot GET /toyes
like this 
so to fix this we have to add the 404 code 

app.use((req,res,next)=>{
    res.status(404).send("Your_Response");
})
Remember to use that in the last beacuse if it is at the top 
the first thing that will execute will be the 404 message 

## Common PATHS 


# Adding Html file
we are just writing the html in the direct response which is not an good practice 
for that we will be using seprate html files for the sesprate pages 

## Serving an HTML file 
now we have to attach those html files 
using the core module of  path
-> const path=require("path");

then except the res.send()

we will be using the 

res.sendFile(path.join(__dirname,"../","views","addhome.html"));

## using file helper 




## Using the Tailwind CSS 
well we cnat directly make and css file and then use the res.sendFile() mehtod because we dont have the access to use the files 
outside the folder due to privacyu so we have to make an new folder the tell the code to recognose that folder as an public 
foder 

app.use(express.static(path.join(rootDir, 'public')));

thats the line of code that is helping us to use the home.css file anywhere in our html files 

------I AM SKIPPING TAILWIND CSS FOR NOW -------------

## Dynamic UI using EJS 
Till now we are just sending the static data like send that html file and all that 
but there may be cases where one have the dynamic data 
like the data is changing every other second 
 or the data depends on the person loging in 

ex.-> the instagram feed of everyone is not same 
the mails are not same 
the stock market dont have an static data 



# EJS->Embedded JavaScript

1. JavaScript within HTML 
2. Syntax-> <% %>  for control flow 
            <%= %> for output 
3. supports partial for reusing code snippets 
4. allow full js expression in templates 

## Installing EJS 

npm install --save ejs 

after the const app=express();

app.set('view engine','ejs');
app.set('views','views');


--> set the file name from .html to .ejs to efficently use it 

now we were usually sending the file using the res.sendFile() method 
but now we have to render it 

res.render('home',{homes:homes})
render the home.ejs (.ejs will be already taken by the system) then wew send and key value pair for the homes that will be further used 

studying the EJS Partials 
Make an folder named Partials in the folder 

why partials??
    there can be a block of code in html that is used several time like the header or the CTS section to solve that we can use compnenets that are used in react but in this case we will be using the ejs partials 

[clickhere](https://www.youtube.com/watch?v=WaObzvMEgd4&t=1461s)
thsi is the video for partials better understanding 

# Model View Controller (MVC)
MVC (Model–View–Controller) is an architectural pattern, not a framework.
It tells you how to structure your code so it doesn’t turn into a mess as the app grows

## Sepration of Concerns 
1. MVC stands for Model-View-Controller: A software architectural pattern for developing user interfaces.

2. Model: Manages the data and business logic of the application.

3. View: Handles the display and presentation of data to the user.

4. Controller: Processes user input, interacts with the Model, and updates the View accordingly.

5. Routes are a part of Controllers.

6. Purpose: MVC separates concerns within an application, making it easier to manage ‘and scale.

## Adding the First Controller 
controller basicallyy means handling the route diffrently adn handling the logic of that route diffrently 

make an folder names controllers

we can just make models in the routes but it will welcome the chaos that you will no like 
hence we use the controllers 

we can just use that function elsewhere like for ex:->
    res.get('route',()=>{
        //function

    })

but when using controller we can escape the chaos 
    const homesController=require(../controllers/homes);

    //i assume in controllers there is an file named homes that have an exports.getAddHome 
    //that is doing all the work there

    res.get('route',homesController.getAddHome);

thats was controller that are very imp not to take  litely 

## Models 

Think of it like they are going to handel the data part 
like the data coming is in the right format or not like this 
in our case the name of the is correct or not  

visit models/homes.js file to understand the whole concept 

we have the fake databse for now 
but we can also write in file 
usign the fs 
but nodemon will think its the servers data so it will raise an problem 

## Nodemon causing problem 

create a file in the parent folder named nodemon.json

then editin it by this 
{
    "watch":["."],          //watch the whole folder 
    "ext":"js,json,ejs",    //extensions of file to watch
    "ignore":["node_modules/","data/"],         // what files to ignore
    "exec":"node app.js"                      // whats the executable file name
}


