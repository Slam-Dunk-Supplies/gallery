import styled from 'styled-components';

export const ButtonRight = styled.button`
  background: white;
  border: 2px solid black;
  position: absolute;
  top: 45%;
  right: 0%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

export const ButtonLeft = styled.button`
  background: white;
  border: 2px solid black;
  position: absolute;
  top: 45%;
  left: 8%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

export const ButtonImg = styled.img`
  padding: 10px 5px;
  height: 17px;
  width: 23px;
`;

export const MainImg = styled.img`
  width: 100%;
  heigth: auto;
`;

export const SmallImg = styled.img`
  height: 40px;
  width: 40px;
  border: 2px solid black;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 50%;
`;

export const SmallImagesContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 3%;
`;

export const SmallImageContainer = styled.div`
  padding: 10px
`;
