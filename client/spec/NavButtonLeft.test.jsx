import React from 'react';
import { shallow } from 'enzyme';
import NavButtonLeft from '../src/components/NavButtonLeft';
import { ButtonLeft } from '../src/styledComponents/NavButtonLeftStyles';

describe('NavButtonLeft Unit Tests', () => {
  describe('onClick', () => {
    it('should invoke the correct function when the ButtonLeft component is clicked', () => {
      const mockOnClickFuncLeft = jest.fn();
      const wrapper = shallow(
        <NavButtonLeft
          previousImg={mockOnClickFuncLeft}
        />,
      );
      const clickableButton = wrapper.find(ButtonLeft);
      clickableButton.simulate('click');
      expect(mockOnClickFuncLeft).toHaveBeenCalled();
    });
  });
});
