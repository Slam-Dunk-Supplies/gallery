import React from 'react';
import { ButtonRight, ButtonRightImg } from '../styledComponents/NavButtonRightStyles';

const navButtonRight = (props) => {
  return (
      <ButtonRight  type="button" onClick={props.nextImage}><ButtonRightImg rel="preload" src="https://slam-dunk-supplies.s3-us-west-2.amazonaws.com/rightArrowTran.png" alt="rightArrow" /></ButtonRight>
  );
};

export default navButtonRight;
