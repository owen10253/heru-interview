var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "leaderboard".

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "leaderboard"
});

db.connect();

module.exports = db;