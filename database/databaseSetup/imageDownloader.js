const fs = require('fs');
const axios = require('axios');
const path = require('path');

const PATH = path.join(__dirname + '/seedingImages');
const url = 'https://loremflickr.com/840/840/sports';

const padNum = (number, size) => {
  const result = `000${number}`;
  return result.substr(-size);
};

const getImage = async (fileName) => {
  try {
    const response = await axios.get(url, { responseType: 'stream' });
    const WRITE_PATH = path.join(PATH, `images${fileName}.jpg`);
    const stream = response.data;
    return stream.pipe(fs.createWriteStream(WRITE_PATH));
  } catch (error) {
    console.error(error);
  }
};

const downloadImages = (times) => {
  let timer = 0;

  for (let counter = 1; counter < times; counter++) {
    const fileName = padNum(counter, 3);
    setTimeout(() => getImage(fileName), timer);
    timer += 2000;
  }
};

downloadImages(501);
