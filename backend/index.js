const express = require('express');
const cors = require('cors');
const db = require('mysql');

const app = express();
const port = 3080;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(express.json());

app.get('/book', (req, res) => {
  // We will be coding here
  res.status(200).json({ book: 'Owen Lin' })
});

app.listen(port, () => console.log(`listening on port ${port}!`));