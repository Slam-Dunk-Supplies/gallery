const faker = require('faker');
const { ItemImages } = require('../database/index.js');

var seeder = () => {
  var fiveImageUrls = [];

  for (var i = 0; i < 5; i++) {
    var oneImageUrl = faker.image.fashion();
    fiveImageUrls.push(oneImageUrl);
  }

  for (var i = 1; i < 101; i++) {
    const oneSeed = new ItemImages({
      id: i,
      imageUrls: fiveImageUrls
    })
    oneSeed.save((err) => {
      if(err) {
        console.log('err saving', err)
      } else {
        console.log('succesfully saved into db')
      }
    })
  }
}

seeder();
