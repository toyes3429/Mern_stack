// External Modules 
const express=require("express");
const path=require('path');

//Local Module 
const user_router=require("./routes/userRouter");
const {hostRouter}=require("./routes/hostRouter");

const homesController=require('./controllers/error');

const rootDir = require('./utils/path');

// creation of app 
const app=express();

// essential lines for EJS

app.set('view engine','ejs');
app.set('views','views');



//Middlewares 

//adding the static file for the home.css
app.use(express.static(path.join(rootDir, 'public')));

app.use(express.urlencoded());

app.use(user_router);

app.use(hostRouter);

app.use(homesController.error404);


//actual server and its PORT
const PORT=3005
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})