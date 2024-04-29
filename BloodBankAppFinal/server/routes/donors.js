const express = require("express");
const db = require("../database/db");
const utils = require("../utils");

const router = express.Router();

router.post("/", (req, res) => {
    if (!req.session || !req.session.U_Id) {
        return res.status(401).send("Unauthorized: User ID not found in session");
    }
    const { Blood_Type, Age, Gender } = req.body;
    const U_Id = req.session.U_Id; // Assuming session contains the user ID
    const H_Id = req.body.H_Id; // Hospital ID provided in the request body
    const Donation_Date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Current date and time

    if (!U_Id) {
        return res.send(utils.createResult("Session error: User ID not found", null));
    }

    const sql = `INSERT INTO donors (Blood_Type, Age, Gender, H_Id, U_Id, Donation_Date) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [Blood_Type, Age, Gender, H_Id, U_Id, Donation_Date];

    db.query(sql, values, (error, result) => {
        if (error) {
            console.error('Error inserting data into database:', error);
            return res.status(500).send('Error inserting data into database');
        }
        console.log('Data inserted successfully:', result);
        res.status(200).send('Data inserted successfully');
    });
});




router.get("/:D_Id", (req, res) => {
    const D_Id = req.params.D_Id;

    const sql = `SELECT 
    donors.D_Id, User.firstname, User.lastname, User.mobile,User.address, User.email,User.password,User.role
    donors.Blood_Type, donors.Age, donors.Gender, donors.U_Id,donors.H_Id, 
    Hospital.name, Hospital.location, Hospital.contact_number,Hospital.is_donor,Hospital.is_blood_bank 
    
FROM 
    donors
JOIN 
    User ON User.U_Id = donors.U_Id
JOIN 
    Hospital ON Hospital.H_Id = donors.H_Id
WHERE 
    D_Id = ?;`

    db.query(sql, D_Id, (error, results) => {
        if (error) {
            console.error('Error retrieving donor from database:', error);
            return res.status(500).send('Error retrieving donor from database');
        }
        res.send(utils.createResult(null, results));
    });
});

module.exports = router;




