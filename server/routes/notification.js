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

  app.get("/:U_Id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
   // var Action = request.body.Action;
   var U_Id = request.params.U_Id;

    var statement = 
        `select doners.Register_Date,hospitals.Hospital_Name,users.First_Name,users.Last_Name,doners.Action from users,doners,hospitals where users.U_Id=doners.U_Id and hospitals.H_Id=doners.H_Id and doners.action ='Thank You for Your Request We will Late You Know If You Are Able For Donate Blood or Not'and doners.U_Id =${U_Id}`;

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