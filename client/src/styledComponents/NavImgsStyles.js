import styled from 'styled-components';

export const NavImgs = styled.div`
  &:hover {
    cursor: pointer;
  }
  position: relative;
  max-width: 2%;
  height: 2.5vh;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  right: 7.5%;
  top: 35%;
  `;

  export const NavImg = styled.img`
  &:hover {
    cursor: pointer;
  }
  position: relative;
  border: 1px solid;
  min-width: 100%;
  height: 0vh;
  right: 0%;
  z-index: 1;
  margin-right: 10px;
`;