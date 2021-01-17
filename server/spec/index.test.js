const { ItemImages } = require('../../database/index.js');
// require('babel-core/register');
// require('babel-polyfill');

// jest.useFakeTimers();

describe('Server Side Tests', () => {
  describe('ItemImage.find', () => {
    it('should return all imageObjs with an array length 100', () => {
      ItemImages.find({})
        .then((imageObjs) => {
          expect(imageObjs.length).toBe(100);
        });
    });
  });
  describe('ItemImage.find', () => {
    it('should return one imageObj with an array length 1', () => {
      ItemImages.find({}).where('id').equals(1)
        .then((imageObjs) => {
          expect(imageObjs.length).toBe(1);
        });
    });
  });
});
