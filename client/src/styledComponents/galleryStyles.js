import styled from 'styled-components';

export const ButtonRight = styled.button`
  &:hover {
    cursor: pointer;
  }
  background: white;
  border: 1px solid black;
  position: absolute;
  top: 45%;
  right: 2.5%;
`;

export const ButtonLeft = styled.button`
  &:hover {
    cursor: pointer;
  }
  background: white;
  border: 1px solid black;
  position: absolute;
  top: 45%;
  left: 2.5%;
`;

export const ButtonImg = styled.img`
  padding: 10px 5px;
  height: 20px;
  width: 25px;
`;

export const MainImg = styled.img`
  height: 645px;
  width: 640px;
  padding: 0px 380px;
  background-color: #eceff0;
`;

export const SmallImg = styled.img`
  &:hover {
    cursor: pointer;
  }
  height: 0px;
  transition: height 0.2s ease-in;
  width: 20px;
  border: 1px solid black;
`;

export const SmallImagesContainer = styled.div`
  &:hover {
    cursor: default;
  }
  display: flex;
  position: absolute;
  bottom: 5%;
`;

export const SmallImageContainer = styled.div`
  padding: 5px
`;

export const Container = styled.div`
  &:hover {
    cursor: url('https://www.adidas.com/glass/react/2f4232c/assets/img/icon-adidas-cursor-expand.png'), default;
  }
  &:hover ${SmallImg} {
    height: 20px;
    transition: height 0.2s ease-in;
  }
  display: flex;
  flex-shrink: 3;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: auto;
`;

export const Navigation = styled.div`
  &:hover {
    cursor: pointer;
  }
  position: absolute;
  top: 5%;
  left: 3%;
`;

export const Back = styled.div`
  &:hover {
    background-color: black;
    color: white;
  }
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-decoration: underline;
  display: inline-block;
  padding: 0px 10px;
`;
export const Home = styled.div`
  &:hover {
    background-color: black;
    color: white;
  }
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  text-decoration: underline;
  display: inline-block;
  padding-right: 5px;
  padding-left: 10px;
`;

export const Sports = styled.div`
  &:hover {
    background-color: black;
    color: white;
  }
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  text-decoration: underline;
  display: inline-block;
  padding: 0px 5px;
`;
export const CodeOff = styled.div`
  &:hover {
    transform: rotate(271deg);
  }
  position: absolute;
  top: 17%;
  right: -3.2%;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  background-color: #fff;
  padding: 1px 5px;
  transform: rotate(270deg);
  letter-spacing: 1.45px;
`;
