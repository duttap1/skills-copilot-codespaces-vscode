// Create web server
// 1. Create express server
// 2. Define port
// 3. Create route for comments
// 4. Create route for comments/1
// 5. Start server

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send('This is comments page');
});

app.get('/comments/1', (req, res) => {
  res.send('This is comment 1');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Run the server
// node comments.js
// Open browser and navigate to http://localhost:3000/comments
// Open browser and navigate to http://localhost:3000/comments/1
// Stop the server using ctrl+c