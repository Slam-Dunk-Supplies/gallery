import React from 'react';
import Axios from 'axios';
import MainImgDisplay from './MainImgDisplay';
import NavImgs from './NavImgs';
import NavButtonLeft from './NavButtonLeft';
import NavButtonRight from './NavButtonRight';
import { AppContainer } from '../styledComponents/AppStyles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
    };
    this.setMain = this.setMain.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  componentDidMount() {
    let id = 1;
    if (window.location.pathname !== '/') {
      const arr = window.location.pathname.split('/');
      [id] = [arr[1]];
    }
    this.getImages(id);
  }

  async getImages(itemId) {
    try {
      const response = await Axios.get(`/api/images/?id=${itemId}`);
      this.setState({
        imgs: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  setMain() {
  }

  nextImage() {
  }

  previousImage() {
  }

  render() {
    const { imgs } = this.state;
    return (
      <AppContainer>
        <MainImgDisplay imgs={imgs}/>
        <NavImgs imgs={imgs}/>
        <NavButtonLeft/>
        <NavButtonRight/>
      </AppContainer>
    );
  }
}

export default App;
