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

  app.get("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
   // var Action = request.body.Action;
    var statement = 
        `select doners.D_Id,doners.Register_Date,users.First_Name,users.Last_Name,users.Email,users.Mobile,doners.Blood_Type,doners.Hospital_Reciept,doners.Age,doners.Gender,hospitals.Hospital_Name, hospitals.Hospital_Number,doners.Action from users,doners,hospitals where users.U_Id=doners.U_Id and hospitals.H_Id=doners.H_Id and doners.Action="Accepted";
        `;

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