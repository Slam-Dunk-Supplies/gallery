import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: 1,
      itemImageUrls: [],
    };
  }

  componentDidMount() {
    const { itemId } = this.state;
    this.getImages(itemId);
  }

  getImages(itemId) {
    Axios.get(`/images/${itemId}`)
      .then((imagesObj) => {
        console.log('this is imagesObj: ', imagesObj.data);
        this.setState({
          itemImageUrls: imagesObj.data[0].imageUrls,
        });
      })
      .catch((err) => {
        console.log('err in getImages', err);
      });
  }

  render() {
    const { itemImageUrls } = this.state;
    return (
      <div>
        <div>test</div>
        {itemImageUrls.map((image) => <img src={image} alt="itemImage" />)}
      </div>
    );
  }
}

export default App;
