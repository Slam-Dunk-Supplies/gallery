const express = require('express');
const app = express();
const { ItemImages } = require('../database/index.js');
const port = 3002;

app.use(express.static('client/dist'))

app.get('/allImages', (req, res) => {
  ItemImages.find({})
    .then(imageObjs => {
      res.send(imageObjs)
    })
    .catch(err => {
      res.send(err)
    })
})

app.get('/images/:itemId', (req, res) => {
  var itemId = req.params.itemId;
  ItemImages.find({}).where('id').equals(`${itemId}`)
    .then(imageObj => {
      res.send(imageObj)
    })
    .catch(err => {
      res.send(err)
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
