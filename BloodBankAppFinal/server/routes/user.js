const express = require("express")
const db = require("../database/db")
const utils = require("../utils")

const router = express.Router()

router.get("/", (request, response) => {
  const sql = "SELECT * FROM User"
  db.query(sql, request.params.id, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.get("/:U_Id", (request, response) => {
  const sql = "SELECT * FROM User WHERE U_Id=?"
  db.query(sql, request.params.id, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.post("/register", (request, response) => {
  const { first_name, last_name,mobile,address,email,password,role } = request.body
  const sql =
    "INSERT INTO User(first_name,last_name,mobile,address,email,password,role) VALUES(?,?,?,?,?,?,?)"
  db.query(
    sql,
    [first_name, last_name,mobile,address,email,password,role],
    (error, data) => {
      response.send(utils.createResult(error, data))
    }
  )
})

router.post("/login", (request, response) => {
  const { email, password } = request.body
  const sql = "SELECT * FROM User WHERE email=? AND password=?"
  db.query(sql, [email, password], (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

module.exports = router