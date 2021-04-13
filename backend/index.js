const express = require('express');
const cors = require('cors');
const controller = require('./controllers');
const db = require('mysql');
const controllers = require('./controllers');

const app = express();
const port = 3080;

// Cross Origin handler. 
app.use(cors());

// Configuring body parser middleware
app.use(express.json());


// Original sorting logic was placed in the backend, but consider the limitation of backend server. 
// Moved sorting logic to the Client side. Let user's computer to handle sorting. 

// Simple GET request. Avoid using Routes for simpler code readability. 
app.get('/leaderboard', (req, res) => {
  // Handle GET request...
  controllers.leaderboard.get(req, res);
});

app.listen(port, () => console.log(`listening on port ${port}!`));