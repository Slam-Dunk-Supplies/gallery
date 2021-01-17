import React from 'react';
import { NavImgs, NavImg} from '../styledComponents/NavImgsStyles';

const navImgs = (props) => {
  return (
    <NavImgs>
      {props.imgs.map((img) => {
        return (
          <NavImg onClick={() => {props.setMainImg(img.id)}} src={img.url} />
        )
      })}
    </NavImgs>

  );
};

export default navImgs;
