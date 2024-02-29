// // Import required modules
// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const config = require('config');

// // Create connection pool
// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: config.get("SERVER"),
//   database: config.get("DATABASE"),
//   user: config.get("USER"),
//   password: config.get("PASSWORD")
// });

// // Create Express app
// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Admin check endpoint
// app.post('/admin', (req, res) => {
//   const { Email, Password } = req.body;
//   pool.query('SELECT * FROM users WHERE Email = ? AND Password = ?' [Email, Password], (error, results) => {
//     if (error) {
//       console.error('Database error:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//       return;
//     }
//     if (results.length > 0) {
//       res.status(200).json({ isAdmin: true });
//     } else {
//       res.status(401).json({ isAdmin: false });
//     }
//   });
// });


// module.exports = app;
