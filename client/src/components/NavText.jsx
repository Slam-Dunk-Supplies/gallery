import React from 'react';
import {
  NavText, Back, Breadcrumbs, Divider,
} from '../styledComponents/NavTextStyles';

const navText = () => {
  return (
    <NavText>
      <Back>Back</Back>
      <Breadcrumbs>Home</Breadcrumbs>
      <Divider>/</Divider>
      <Breadcrumbs>Sports</Breadcrumbs>
      <Divider>/</Divider>
      <Breadcrumbs>Clothing</Breadcrumbs>
    </NavText>
  );
};

export default navText;
