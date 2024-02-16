const mysql = require('mysql');
const express = require('express');
const config = require('config');

const app =  express.Router();

const connectionDetails = {  
    host: config.get("SERVER"),
    database: config.get("DATABASE"),
    user: config.get("USER"),
    password: config.get("PASSWORD")
  }

  app.post("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    
    console.log("data receieved is " + request.body.Email + request.body.Password);
   // var Action = request.body.Action;

    var statement = `select count(*) as count from users where
    Email='${request.body.Email}' and 
    Password='${request.body.Password}'`;

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