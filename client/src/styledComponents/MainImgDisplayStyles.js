import styled from 'styled-components';
import { NavImg } from './NavImgsStyles'


export const MainImgDisplay = styled.div`
  &:hover {
    cursor: url('https://slam-dunk-supplies.s3-us-west-2.amazonaws.com/zoom.png'), default;
  }
  position: relative;
  max-width: 50%;
  height: 65vh;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  left: 25%;
`;

export const MainImg = styled.img`
  position: relative;
  min-width: 100%;
  height: 65vh;
  transition: right 0.5s ease-in;
`;