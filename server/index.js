/* eslint-disable no-console */
const express = require('express');
const { ItemImages } = require('../database/index.js');

const app = express();
const port = 3002;

app.use('/:id', express.static('client/dist'));

app.get('/', (req, res) => {
  res.redirect(`http://127.0.0.1:${port}/1`);
});

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
