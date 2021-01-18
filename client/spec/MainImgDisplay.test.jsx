import React from 'react';
import { shallow } from 'enzyme';
import MainImgDisplayComponent from '../src/components/MainImgDisplay';
import { MainImg } from '../src/styledComponents/MainImgDisplayStyles';

const sampleImgObjs = [
  {
    url: 'http://picsum.photos/seed/3/840/840',
    id: 3,
  },
  {
    url: 'http://picsum.photos/seed/4/840/840',
    id: 4,
  },
];

const sampleImgObjs1 = [
  {
    url: 'http://picsum.photos/seed/3/840/840',
    id: 3,
  },
];

describe('Main Img Display Unit Tests', () => {
  describe('Render Tests', () => {
    it('should render 2 imgs when given an array of 2 imgs ', () => {
      const wrapper = shallow(
        <MainImgDisplayComponent
          imgs={sampleImgObjs}
        />,
      );
      expect(wrapper.find(MainImg)).toHaveLength(2);
    });
    it('should render 1 img when given an array of 1 img ', () => {
      const wrapper = shallow(
        <MainImgDisplayComponent
          imgs={sampleImgObjs1}
        />,
      );
      expect(wrapper.find(MainImg)).toHaveLength(1);
    });
  });
});
