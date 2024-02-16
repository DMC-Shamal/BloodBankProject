// CREATE TABLE doners
// (
// D_Id INT PRIMARY KEY AUTO_INCREMENT,
// Blood_Type VARCHAR(10),
// Hospital_Reciept VARCHAR(250) DEFAULT 'Null',
// Age INT ,
// Gender VARCHAR(15),
// H_Id INT,
// U_Id INT,
// Action VARCHAR(100) DEFAULT 'Thank You for Your Request We will Late You Know If You Are Able For Donate Blood or Not',
// Role VARCHAR(20) DEFAULT 'doner',
// FOREIGN KEY(H_Id) REFERENCES hospitals(H_Id),
// FOREIGN KEY(U_Id) REFERENCES users(U_Id)
// );

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

//get doners by id
app.get("/:D_Id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var  D_Id = request.params.D_Id;
    var statement = `select doners.D_Id,users.First_Name,users.Last_Name,users.Email,users.Mobile,doners.Blood_Type,doners.Hospital_Reciept,doners.Age,doners.Gender,doners.Action,doners.Role,hospitals.Hospital_Name,hospitals.Hospital_Address,hospitals.Hospital_Number,Register_Date from users,doners,hospitals where users.U_Id=doners.U_Id and hospitals.H_Id=doners.H_Id and D_Id =${D_Id};`;

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

//get all doners
app.get("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var statement = "select doners.D_Id,users.First_Name,users.Last_Name,users.Email,users.Mobile,doners.Blood_Type,doners.Hospital_Reciept,doners.Age,doners.Gender,doners.Action,doners.Role,hospitals.Hospital_Name,hospitals.Hospital_Address,hospitals.Hospital_Number,Register_Date from users,doners,hospitals where users.U_Id=doners.U_Id and hospitals.H_Id=doners.H_Id;";

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

app.post("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var Blood_Type = request.body.Blood_Type;
    var Hospital_Reciept = request.body.Hospital_Reciept;
    var Age = request.body.Age;
    var Gender = request.body.Gender;
    var H_Id = request.body.H_Id;
    var U_Id = request.body.U_Id;
    var statement = 
        `insert into doners(Blood_Type,Hospital_Reciept,Age,Gender,H_Id,U_Id,Register_Date) values('${Blood_Type}','${Hospital_Reciept}', '${Age}','${Gender}','${H_Id}','${U_Id}', Sysdate())`;

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

app.put("/:D_Id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var Blood_Type = request.body.Blood_Type;
    var Hospital_Reciept = request.body.Hospital_Reciept;
    var Age = request.body.Age;
    var Gender = request.body.Gender;//This data belongs to body part 

    var statement = 
        `update doners set Blood_Type='${Blood_Type}',Hospital_Reciept='${Hospital_Reciept}',Age='${Age}',Gender='${Gender}' where D_Id =${D_Id}`;

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
app.delete("/:D_Id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var D_Id = request.params.D_Id;//This data belongs to header part 
  
    var statement = 
        `delete from doners where D_Id =${D_Id}`;

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