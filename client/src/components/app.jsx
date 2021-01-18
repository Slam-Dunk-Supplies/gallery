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
    this.getImgs = this.getImgs.bind(this);
    this.setMainImg = this.setMainImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.previousImg = this.previousImg.bind(this);
  }

  componentDidMount() {
    let id = 1;
    if (window.location.pathname !== '/') {
      const arr = window.location.pathname.split('/');
      [id] = [arr[1]];
    }
    this.getImgs(id);
  }

  async getImgs(itemId) {
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

  nextImg() {
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

  previousImg() {
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
        <MainImgDisplay imgs={imgs} currImg={currImg} />
        <NavImgs setMainImg={this.setMainImg} imgs={imgs} />
        <NavButtonLeft previousImg={this.previousImg} />
        <NavButtonRight nextImg={this.nextImg} />
        <NavText />
        <Sale />
      </AppContainer>
    );
  }
}

export default App;
