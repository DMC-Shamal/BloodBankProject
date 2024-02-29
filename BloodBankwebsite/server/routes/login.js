// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const config = require('config');

// Create connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: config.get("SERVER"),
  database: config.get("DATABASE"),
  user: config.get("USER"),
  password: config.get("PASSWORD")
});

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Login endpoint
app.post('/login', (req, res) => {
  const { Email, Password } = req.body;
  pool.query('SELECT * FROM users WHERE Email = ? AND Password = ?', [Email, Password], (error, results) => {
    if (error) {
      console.error('Database error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }
    if (results.length > 0) {
      const user = results[0];
      if (user.Role === 'admin') {
        // Redirect to admin page
        res.redirect('/admin');
      } else {
        // Redirect to user home page
        res.redirect('/user');
      }
    } else {
      // Email or password is incorrect
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

// // User home page
// app.get('/user', (req, res) => {
//   res.send('Welcome to the user home page');
// });

// // Admin page
// app.get('/admin', (req, res) => {
//   res.send('Welcome to the admin page');
// });

module.exports=app;