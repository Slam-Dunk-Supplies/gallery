import React from 'react';
import { shallow } from 'enzyme';
import NavImgsComponent from '../src/components/NavImgs';
import { NavImg } from '../src/styledComponents/NavImgsStyles';

const sampleImgObjs2 = [
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

describe('Nav Img Display Unit Tests', () => {
  describe('Render Tests', () => {
    it('should render 2 imgs when given an array of 2 imgs ', () => {
      const wrapper = shallow(
        <NavImgsComponent
          imgs={sampleImgObjs2}
        />,
      );
      expect(wrapper.find(NavImg)).toHaveLength(2);
    });
    it('should render 1 img when given an array of 1 img ', () => {
      const wrapper = shallow(
        <NavImgsComponent
          imgs={sampleImgObjs1}
        />,
      );
      expect(wrapper.find(NavImg)).toHaveLength(1);
    });
  });
  describe('onClick', () => {
    it('should invoke the correct function when the NavImg component is clicked', () => {
      const mockOnClickFuncSetMain = jest.fn();
      const wrapper = shallow(
        <NavImgsComponent
          imgs={sampleImgObjs1}
          setMainImg={mockOnClickFuncSetMain}
        />,
      );
      const clickableImg = wrapper.find(NavImg);
      clickableImg.simulate('click');
      expect(mockOnClickFuncSetMain).toHaveBeenCalled();
    });
  });
});
