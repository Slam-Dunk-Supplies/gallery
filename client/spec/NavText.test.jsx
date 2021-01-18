import React from 'react';
import { shallow } from 'enzyme';
import NavTextComponent from '../src/components/NavText';
import { NavText } from '../src/styledComponents/NavTextStyles';

describe('Nav Text Test', () => {
  describe('Render Tests', () => {
    it('should render', () => {
      const wrapper = shallow(
        <NavTextComponent />,
      );
      expect(wrapper.find(NavText));
    });
  });
});
