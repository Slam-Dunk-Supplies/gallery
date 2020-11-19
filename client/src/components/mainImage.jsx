import React from 'react';
import leftArrow from '../images/leftArrowTran.png';
import rightArrow from '../images/rightArrowTran.png';
import {
  ButtonRight, ButtonLeft, ButtonImg, MainImg,
} from '../styledComponents/galleryStyles';

const mainImage = ({ previousImage, nextImage, main }) => {
  return (
    <div>
      <ButtonLeft type="button" onClick={previousImage}><ButtonImg src={leftArrow} alt="leftArrow" /></ButtonLeft>
      <MainImg src={main} alt="DisplaysMainImg" />
      <ButtonRight type="button" onClick={nextImage}><ButtonImg src={rightArrow} alt="rightArrow" /></ButtonRight>
    </div>
  );
};

export default mainImage;
