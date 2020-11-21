/* eslint-disable no-console */
const express = require('express');
const { ItemImages } = require('../database/index.js');

const app = express();
const port = 3002;

app.use(express.static('client/dist'));

app.get('api/allImages', (req, res) => {
  ItemImages.find({})
    .then((imageObjs) => {
      res.send(imageObjs);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/api/images/:itemId', (req, res) => {
  const { itemId } = req.params;
  ItemImages.find({}).where('id').equals(`${itemId}`)
    .then((imageObj) => {
      res.send(imageObj);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
