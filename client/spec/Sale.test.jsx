import React from 'react';
import { shallow } from 'enzyme';
import SaleComponent from '../src/components/Sale';
import { Sale } from '../src/styledComponents/SaleStyles';

describe('Sale Unit Test', () => {
  describe('Render Tests', () => {
    it('should render', () => {
      const wrapper = shallow(
        <SaleComponent />,
      );
      expect(wrapper.find(Sale));
    });
  });
});
