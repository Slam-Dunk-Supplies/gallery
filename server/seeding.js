const { ItemImages } = require('../database/index.js');

const seeder = () => {
  let lastSeed = 1;
  let lastIncrement = 6;
  for (let i = 1; i < 101; i++) {
    const fiveImageUrls = [];
    for (let j = lastSeed; j < lastIncrement; j++) {
      const oneImageUrl = `http://picsum.photos/seed/${j}/840/840`;
      fiveImageUrls.push(oneImageUrl);
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
  }
};

seeder();
