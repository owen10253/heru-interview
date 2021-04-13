var mysql = require('mysql');

// Create data and use MySQL package to connect to the database. 

var db = mysql.createConnection({
  host: "localhost",
  user: "heru",
  password: "password",
  database: "leaderboard"
});

db.connect();

module.exports = db;