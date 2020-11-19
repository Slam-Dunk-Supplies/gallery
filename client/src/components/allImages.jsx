import React from 'react';
import { SmallImg, SmallImagesContainer, SmallImageContainer } from '../styledComponents/galleryStyles';

const allImages = (props) => {
  return (
    <SmallImagesContainer key={props.itemImageObjs}>
      {props.itemImageObjs.map((oneImageObj) => {
        return (
          <SmallImageContainer
            onClick={() => {
              props.setMain(oneImageObj);
            }}
            key={oneImageObj.id}
          >
            <SmallImg src={oneImageObj.url} alt="partOfAllImages" key={oneImageObj.id} />
          </SmallImageContainer>
        );
      })}
    </SmallImagesContainer>
  );
};

export default allImages;
