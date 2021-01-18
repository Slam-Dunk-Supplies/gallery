import styled from 'styled-components';

export const NavText = styled.div`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  display: inline-block;
  position: relative;
  right: 50%;
  bottom: 43%;
`;

export const Back = styled(NavText)`
  &:hover {
    background-color: black;
    color: white;
  }
  font-weight: 600;
  font-size: 16px;
  text-decoration: underline;
  margin-right: 10px;
`;

export const Breadcrumbs = styled(NavText)`
  &:hover {
    background-color: black;
    color: white;
  }
  font-weight: 300;
  font-size: 14px;
  margin-right: 5px;
  text-decoration: underline;
`;

export const Divider = styled(NavText)`
  font-weight: 300;
  font-size: 14px;
  padding-right: 5px;
`;

export default {
  NavText, Back, Breadcrumbs, Divider,
};
