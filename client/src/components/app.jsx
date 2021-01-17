import React from 'react';
import Axios from 'axios';
import MainImgDisplay from './MainImgDisplay';
import NavImgs from './NavImgs';
import NavButtonLeft from './NavButtonLeft';
import NavButtonRight from './NavButtonRight';
import NavText from './NavText';
import Sale from './Sale';
import { AppContainer } from '../styledComponents/AppStyles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
      currImg: 0,
    };
    this.getImages = this.getImages.bind(this);
    this.setMainImg = this.setMainImg.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
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

  setMainImg(ImgNum) {
    this.setState({
      currImg: ImgNum,
    });
  }

  nextImage() {
    const { currImg } = this.state;

    if (currImg === 4) {
      this.setState({
        currImg: 0,
      });
    } else {
      this.setState({
        currImg: currImg + 1,
      });
    }
  }

  previousImage() {
    const { currImg } = this.state;

    if (currImg === 0) {
      this.setState({
        currImg: 4,
      });
    } else {
      this.setState({
        currImg: currImg - 1,
      });
    }
  }

  render() {
    const { imgs, currImg } = this.state;
    return (
      <AppContainer>
        <MainImgDisplay imgs={imgs} currImg={currImg}/>
        <NavImgs setMainImg={this.setMainImg} imgs={imgs}/>
        <NavButtonLeft previousImage={this.previousImage}/>
        <NavButtonRight nextImage={this.nextImage}/>
        <NavText/>
        <Sale/>
      </AppContainer>
    );
  }
}

export default App;
