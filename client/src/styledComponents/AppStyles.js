import styled from 'styled-components';
import { NavImg } from './NavImgsStyles'

export const AppContainer = styled.div`
  &:hover ${NavImg} {
    height: 2.5vh;
    transition: height 0.2s ease-in;
  }
  position: relative;
  width: 70%;
  height: 65vh;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  background-color: #eceff0;
`;

