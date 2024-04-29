const express = require("express");
const db = require("../database/db");
const utils = require("../utils");

const router = express.Router();

router.get("/", (request, response) => {
  const sql = `SELECT name FROM Hospital`;
  db.query(sql, (error, data) => {
    if (error) {
      response.status(500).json({ success: false, error: "Internal server error" });
    } else {
      response.json(data);
    }
  });
});



router.get("/:H_Id", (request, response) => {
  const sql = "SELECT * FROM Hospital WHERE H_Id=?";
  db.query(sql, request.params.H_Id, (error, data) => {
    response.send(utils.createResult(error, data));
  });
});

module.exports = router;
