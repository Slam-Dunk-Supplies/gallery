const { ItemImages } = require('../database/index.js');

const seeder = () => {
  let counter = 0;
  let lastSeed = 0;
  let lastIncrement = 5;
  const padNum = (number, size) => {
    const result = `000${number}`;
    return result.substr(-size);
  };
  for (let i = 1; i < 101; i++) {
    const fiveImageUrls = [];
    for (let j = lastSeed; j < lastIncrement; j++) {
      const currSeed = padNum(j, 3);
      const oneImageUrl = {
        url: `https://s3-us-west-2.amazonaws.com/adidas.gallery/images${currSeed}.jpg`,
        id: counter,
      };
      fiveImageUrls.push(oneImageUrl);
      counter++;
    }
    const oneSeed = new ItemImages({
      id: i,
      imageUrls: fiveImageUrls,
    });
    oneSeed.save((err) => {
      if (err) {
        console.log('err saving', err);
      } else {
        console.log('succesfully saved into db');
      }
    });
    lastSeed += 5;
    lastIncrement += 5;
    counter = 0;
  }
};

seeder();
