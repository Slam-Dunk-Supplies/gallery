import React from 'react';
import { ButtonLeft, ButtonLeftImg } from '../styledComponents/NavButtonLeftStyles';

const navButtonLeft = (props) => {
  return (
      <ButtonLeft  type="button" onClick={props.previousImage}><ButtonLeftImg rel="preload" src="https://slam-dunk-supplies.s3-us-west-2.amazonaws.com/leftArrowTran.png" alt="leftArrow" /></ButtonLeft>
  );
};

export default navButtonLeft;
