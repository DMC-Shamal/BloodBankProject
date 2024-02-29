
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
    var Hospital_Name = request.query.Hospital_Name; // Using query parameters
    var Blood_Type = request.query.Blood_Type; // Using query parameters
    var statement = `SELECT hospitals.Hospital_Name, hospitals.Hospital_Address, hospitals.Hospital_Number, doners.Blood_Type, doners.Hospital_Reciept, doners.Age, doners.Gender FROM doners JOIN hospitals ON hospitals.H_Id = doners.H_Id WHERE hospitals.Hospital_Name = ? AND doners.Blood_Type = ?`;
    
    // Execute the query with parameters
    connection.query(statement, [Hospital_Name, Blood_Type], (error, result) => {
        if(error) {
            console.error('Error fetching data from the database:', error);
            response.status(500).send('Error fetching data from the database');
        } else {
            response.json(result); // Send the result as JSON response
        }
        
        connection.end(); // Close the connection
    });
});

// app.get("/", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);
//     var Hospital_Name = request.body.Hospital_Name;
//     var Blood_Type = request.body.Blood_Type;
//     var statement = `select  hospitals.Hospital_Name, hospitals.Hospital_Address,hospitals.Hospital_Number,doners.Blood_Type,doners.Hospital_Reciept,doners.Age,doners.Gender from doners,hospitals where hospitals.H_Id=doners.H_Id and hospitals.Hospital_Name='${Hospital_Name}' and doners.Blood_Type='${Blood_Type}'`;

//     connection.query(statement, (error, result)=>{
//         if(error==null)
//         {
//             response.setHeader("Content-Type", "application/json");
//             response.write(JSON.stringify(result));
//             connection.end();
//             response.end();
//         }
//         else
//         {
//             response.setHeader("Content-Type", "application/json");
//              response.write(JSON.stringify(error));
//             connection.end();
//             response.end();
//         }
//     })
// });

module.exports =app;

