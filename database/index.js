/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/itemImages',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error: '));

db.once('open', () => {
  console.log('db connection successful');
});

const itemImagesSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  imageUrls: Array,
});

const ItemImages = mongoose.model('ItemImages', itemImagesSchema);

module.exports = {
  ItemImages,
};
