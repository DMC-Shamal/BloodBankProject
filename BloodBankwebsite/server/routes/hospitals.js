

const mysql = require('mysql2');
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

//get all hospitals data

app.get("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var statement = `select * from hospitals`;

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

//get hospitals data by H_Id

app.get("/H_Id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var H_Id = request.params.H_Id;//This data belongs to header part 

    var statement = `select * from hospitals where H_Id =${H_Id}`;

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

//insert hospital data 

app.post("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var Hospital_Name = request.body.Hospital_Name;
    var Hospital_Number = request.body.Hospital_Number;
    var Hospital_Email = request.body.Hospital_Email;
    var Hospital_Address = request.body.Hospital_Address;
    var statement = 
        `insert into hospitals(Hospital_Name,Hospital_Number,Hospital_Email,Hospital_Address) values('${Hospital_Name}','${Hospital_Number}', '${Hospital_Email}','${Hospital_Address}')`;

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

//update hospital data 

app.put("/:H_Id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var H_Id = request.params.H_Id;//This data belongs to header part 
  
    var Hospital_Name = request.body.Hospital_Name;
    var Hospital_Number = request.body.Hospital_Number;
    var Hospital_Email = request.body.Hospital_Email;
    var Hospital_Address = request.body.Hospital_Address;//This data belongs to body part 

    var statement = 
        `update hospitals set Hospital_Name='${Hospital_Name}',Hospital_Number='${Hospital_Number}',Hospital_Email='${Hospital_Email}',Hospital_Address='${Hospital_Address}' where H_Id =${H_Id}`;

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
app.delete("/:H_Id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var H_Id = request.params.H_Id;//This data belongs to header part 
  
    var statement = 
        `delete from hospitals where H_Id =${H_Id}`;

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












// const mysql = require('mysql');
// const express = require('express');
// const config = require('config');

// const app =  express.Router();

// const connectionDetails = {  
//     host: config.get("SERVER"),
//     database: config.get("DATABASE"),
//     user: config.get("USER"),
//     password: config.get("PASSWORD")
//   }

// //Below code handles Users GET, POST, PUT,DELETE

// //get all hospitals data

// app.get("/", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);

//     var statement = `select * from hospitals`;

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

// //get hospitals data by H_Id

// app.get("/H_Id", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);

//     var H_Id = request.params.H_Id;//This data belongs to header part 

//     var statement = `select * from hospitals where H_Id =${H_Id}`;

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

// //insert hospital data 

// app.post("/", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);
//     var Hospital_Name = request.body.Hospital_Name;
//     var Hospital_Number = request.body.Hospital_Number;
//     var Hospital_Email = request.body.Hospital_Email;
//     var Hospital_Address = request.body.Hospital_Address;
//     var statement = 
//         `insert into hospitals(Hospital_Name,Hospital_Number,Hospital_Email,Hospital_Address) values('${Hospital_Name}','${Hospital_Number}', '${Hospital_Email}','${Hospital_Address}')`;

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
//             response.write(JSON.stringify(error));
//             connection.end();
//             response.end();
//         }
//     })
// });

// //update hospital data 

// app.put("/:H_Id", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);

//     var H_Id = request.params.H_Id;//This data belongs to header part 
  
//     var Hospital_Name = request.body.Hospital_Name;
//     var Hospital_Number = request.body.Hospital_Number;
//     var Hospital_Email = request.body.Hospital_Email;
//     var Hospital_Address = request.body.Hospital_Address;//This data belongs to body part 

//     var statement = 
//         `update hospitals set Hospital_Name='${Hospital_Name}',Hospital_Number='${Hospital_Number}',Hospital_Email='${Hospital_Email}',Hospital_Address='${Hospital_Address}' where H_Id =${H_Id}`;

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
//             response.write(JSON.stringify(error));
//             connection.end();
//             response.end();
//         }
//     })
// });
// app.delete("/:H_Id", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);

//     var H_Id = request.params.H_Id;//This data belongs to header part 
  
//     var statement = 
//         `delete from hospitals where H_Id =${H_Id}`;

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
//             response.write(JSON.stringify(error));
//             connection.end();
//             response.end();
//         }
//     })
// });

// module.exports =app;