const express = require("express");
const db = require("../database/db");
const utils = require("../utils");

const router = express.Router();

router.get("/", (request, response) => {
    const { H_Id, BloodType } = request.query;
    const sql = `
      SELECT donors.Blood_Type, Hospital.Name
      FROM needblood
      JOIN donors ON needblood.D_Id = donors.D_Id
      JOIN Hospital ON needblood.H_Id = Hospital.H_Id
      WHERE Hospital.H_Id = ? AND donors.Blood_Type = ?
    `;
    db.query(sql, [H_Id, BloodType], (error, data) => {
      response.send(utils.createResult(error, data));
    });
  });
module.exports = router;  