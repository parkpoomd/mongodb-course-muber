const express = require('express');

const app = express();

// Watch for incoming requests of method GET
// to the route http://localhost:3000/api
app.get('/api', (req, res) => {
  res.send({ hi: 'there' });
});

module.exports = app;
