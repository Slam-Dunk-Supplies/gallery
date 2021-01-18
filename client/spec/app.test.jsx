import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';
import { AppContainer } from '../src/styledComponents/AppStyles';

describe('App Unit Tests', () => {
  describe('Render Tests', () => {
    it('should render the app component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(AppContainer)).toHaveLength(1);
    });
  });
  describe('Function Tests', () => {
    it('should change state of curr Img when setMainImg is invoked', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ currImg: 2 });
      expect(wrapper.state().currImg).toBe(2);
      wrapper.instance().setMainImg(0);
      expect(wrapper.state().currImg).toBe(0);
    });
    it('should change state of curr Img when nextImg is invoked', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ currImg: 2 });
      expect(wrapper.state().currImg).toBe(2);
      wrapper.instance().nextImg();
      expect(wrapper.state().currImg).toBe(3);
    });
    it('should change state of curr Img when nextImg is invoked', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ currImg: 4 });
      expect(wrapper.state().currImg).toBe(4);
      wrapper.instance().nextImg();
      expect(wrapper.state().currImg).toBe(0);
    });
    it('should change state of curr Img when previousImg is invoked', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ currImg: 2 });
      expect(wrapper.state().currImg).toBe(2);
      wrapper.instance().previousImg();
      expect(wrapper.state().currImg).toBe(1);
    });
    it('should change state of curr Img when previousImg is invoked', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ currImg: 0 });
      expect(wrapper.state().currImg).toBe(0);
      wrapper.instance().previousImg();
      expect(wrapper.state().currImg).toBe(4);
    });
  });
});
