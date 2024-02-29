const mysql = require('mysql');
const express = require('express');
const config = require('config');
// const utils = require("../utils")

const app =  express.Router();

const connectionDetails = {  
    host: config.get("SERVER"),
    database: config.get("DATABASE"),
    user: config.get("USER"),
    password: config.get("PASSWORD")
  }



//Below code handles Users GET, POST, PUT,DELETE
app.get("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var statement = "select * from users";

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
             response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});

// get user data by user id

app.get("/:U_Id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var  U_Id = request.params.U_Id;
    var statement = `select * from users where U_Id =${U_Id};`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
             response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});

//insert user data 

app.post("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
   // var U_Id = request.body.U_Id;
    var First_Name = request.body.First_Name;
    var Last_Name = request.body.Last_Name;
    var Email = request.body.Email;
    var Mobile = request.body.Mobile;
    var Password = request.body.Password;
    var Address = request.body.Address;
    var statement = 
        `insert into users(First_Name,Last_Name,Email,Mobile,Password,Address) values('${First_Name}','${Last_Name}', '${Email}','${Mobile}','${Password}','${Address}')`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});

//edit user profile

app.put("/:U_Id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var U_Id = request.params.U_Id;//This data belongs to header part 
  
    var First_Name = request.body.First_Name;//This data belongs to body part 
    var Last_Name = request.body.Last_Name;//This data belongs to body part 
    var Email = request.body.Email;//This data belongs to body part 
    var Mobile = request.body.Mobile;//This data belongs to body part 
    var Password = request.body.Password;//This data belongs to body part 
    var Address = request.body.Address;//This data belongs to body part 

    var statement = 
        `update users set First_Name='${First_Name}',Last_Name='${Last_Name}',Email='${Email}',Mobile='${Mobile}',Password='${Password}', Address='${Address}' where U_Id =${U_Id}`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});

//delete user 

app.delete("/:U_Id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var U_Id = request.params.U_Id;//This data belongs to header part 
  
    var statement = 
        `delete from users where U_Id =${U_Id}`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});

module.exports =app;