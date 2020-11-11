const express = require('express');
const app = express();
const db = require('../database/index.js');
const port = 3000;

app.use(express.static('client/dist'))

app.get('/', (req,res) => {
  res.send('working get request')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
