import React from 'react';
import StyledSideBar from './SideBar.styles';
import DarkmodeButton from 'components/atoms/DarkmodeButton/DarkmodeButton';
import Logo from 'components/atoms/Logo/Logo';

const SideBar = () => {
  return (
    <StyledSideBar>
      <Logo />
      <DarkmodeButton />
    </StyledSideBar>
  );
};

export default SideBar;
