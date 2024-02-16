
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

//Below code handles Users GET, POST, PUT,DELETE
app.get("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var Hospital_Name = request.body.Hospital_Name;
    var Blood_Type = request.body.Blood_Type;
    var statement = `select  hospitals.Hospital_Name, hospitals.Hospital_Address,hospitals.Hospital_Number,doners.Blood_Type,doners.Hospital_Reciept,doners.Age,doners.Gender from doners,hospitals where hospitals.H_Id=doners.H_Id and hospitals.Hospital_Name='${Hospital_Name}' and doners.Blood_Type='${Blood_Type}'`;

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

