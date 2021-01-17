import React from 'react';
import { MainImgDisplay, MainImg } from '../styledComponents/MainImgDisplayStyles';

const mainImgDisplay = (props) => {
  return (
    <MainImgDisplay>
          {props.imgs.map((img) => {
            return (
              <MainImg src={img.url} style={{ right: `${props.currImg * 100}%` }} />
            )
          })}
    </MainImgDisplay>
  );
};

export default mainImgDisplay;

