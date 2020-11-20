import React from 'react';
import Axios from 'axios';
import AllImages from './allImages';
import MainImage from './mainImage';
import {
  Container, Navigation, CodeOff, Back, Home, Sports,
} from '../styledComponents/galleryStyles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: '',
      itemId: 1,
      itemImageObjs: [],
      currImg: '',
    };
    this.setMain = this.setMain.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  componentDidMount() {
    const { itemId } = this.state;
    this.getImages(itemId);
  }

  getImages(itemId) {
    Axios.get(`images/${itemId}`)
      .then((imagesObj) => {
        this.setState({
          itemImageObjs: imagesObj.data[0].imageUrls,
          currImg: 0,
        });
        return imagesObj.data[0].imageUrls[0];
      })
      .then((firstImg) => {
        this.getImages(this.setMain(firstImg));
      })
      .catch((err) => {
        return err;
      });
  }

  setMain(image) {
    this.setState({
      main: image.url,
      currImg: image.id,
    });
  }

  nextImage() {
    const { currImg, itemImageObjs } = this.state;

    if (currImg === 4) {
      this.setState({
        currImg: 0,
        main: itemImageObjs[0].url,
      });
    } else {
      this.setState({
        currImg: currImg + 1,
        main: itemImageObjs[currImg + 1].url,
      });
    }
  }

  previousImage() {
    const { currImg, itemImageObjs } = this.state;

    if (currImg === 0) {
      this.setState({
        currImg: 4,
        main: itemImageObjs[4].url,
      });
    } else {
      this.setState({
        currImg: currImg - 1,
        main: itemImageObjs[currImg - 1].url,
      });
    }
  }

  render() {
    const { itemImageObjs, main } = this.state;
    return (
      <Container>
        <Navigation>
          <Back>B A C K</Back>
          <Home>Home</Home>
          /
          <Sports>Football</Sports>
          /
          <Sports>Accessories</Sports>
        </Navigation>
        <CodeOff> -30% CODE GETSHOES</CodeOff>
        <MainImage nextImage={this.nextImage} previousImage={this.previousImage} main={main} />
        <AllImages itemImageObjs={itemImageObjs} setMain={this.setMain} />
      </Container>
    );
  }
}

export default App;
