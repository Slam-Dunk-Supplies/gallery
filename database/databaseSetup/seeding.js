const { ItemImages } = require('../index.js');

const padNum = (number, size) => {
  const result = `000${number}`;
  return result.substr(-size);
};

const seeder = async() => {
  let counter = 0;
  let lastSeed = 1;
  let lastIncrement = 6;

  for (let i = 1; i < 101; i++) {
    const fiveImageObjs = [];
    for (let j = lastSeed; j < lastIncrement; j++) {
      const currSeed = padNum(j, 3);
      const oneImageObjs = {
        url: `https://slam-dunk-supplies.s3-us-west-2.amazonaws.com/images${currSeed}.jpg`,
        id: counter,
      };
      fiveImageObjs.push(oneImageObjs);
      counter++;
    }
    try {
      const oneSeed = await new ItemImages({
        id: i,
        imageUrls: fiveImageObjs,
      }).save();
      lastSeed += 5;
      lastIncrement += 5;
      counter = 0;
    } catch (error) {
      console.error(error)
    }
  }
  console.log('Seeding Complete')
};

seeder();
