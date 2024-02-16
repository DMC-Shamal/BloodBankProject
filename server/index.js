const express = require('express');
var login=require("./routes/login");
var users=require("./routes/users");
var doners=require("./routes/doners");
var hospitals=require("./routes/hospitals");
var bloodbank=require("./routes/bloodbank");
var notification=require("./routes/notification");
var actionaccept=require("./routes/actionaccept");
var actionreject=require("./routes/actionreject");
var accepteddoners=require("./routes/accepteddoners");


const app =  express();

app.use((request, response,next)=>{
    //Below line allows calls from any domain / site b'coz of *
    response.setHeader("Access-Control-Allow-Origin", "*");
    
    //Below line allows calls with any method GET,PUT,POST, DELETE *
    response.setHeader("Access-Control-Allow-Methods", "*");

    //Below line allows calls with any Headers - even custom so *
    response.setHeader("Access-Control-Allow-Headers", "*");
    next();
})
app.use(express.json());
app.use("/login",login);
app.use("/users",users);
app.use("/doners",doners);
app.use("/hospitals",hospitals);
app.use("/bloodbank",bloodbank);
app.use("/notification",notification);
app.use("/actionaccept",actionaccept);
app.use("/actionreject",actionreject);
app.use("/accepteddoners",accepteddoners);



app.listen(9898, ()=>{console.log("server started listening at port 9898");});