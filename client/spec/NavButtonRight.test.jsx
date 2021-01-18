import React from 'react';
import { shallow } from 'enzyme';
import NavButtonRight from '../src/components/NavButtonRight';
import { ButtonRight } from '../src/styledComponents/NavButtonRightStyles';

describe('NavButtonRight Unit Tests', () => {
  describe('onClick', () => {
    it('should invoke the correct function when the ButtonRight component is clicked', () => {
      const mockOnClickFuncRight = jest.fn();
      const wrapper = shallow(
        <NavButtonRight
          nextImg={mockOnClickFuncRight}
        />,
      );
      const clickableButton = wrapper.find(ButtonRight);
      clickableButton.simulate('click');
      expect(mockOnClickFuncRight).toHaveBeenCalled();
    });
  });
});
