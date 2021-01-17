/* eslint-disable no-console */
const express = require('express');
const { ItemImages } = require('../database/index.js');

const app = express();
const port = 3002;

app.use(express.static('public'));
app.use('/', express.static('public'));
app.use('/:id', express.static('public'));

app.get('/api/images', async (req, res) => {
  const { id } = req.query || 1;
  try {
    const response = await ItemImages.find({}).where('id').equals(`${id}`).exec();
    res.send(response[0].imageUrls);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
