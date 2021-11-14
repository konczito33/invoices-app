import React from 'react';
import StyledSideBar from './SideBar.styles';
import DarkmodeButton from 'components/atoms/DarkmodeButton/DarkmodeButton';
import Logo from 'components/atoms/Logo/Logo';

const sideBarVariants = {
  from: {
    x: -100,
  },
  to: {
    x: 0,
    transition: { type: 'spring', stiffness: 200 },
  },
};

const SideBar = () => {
  return (
    <StyledSideBar variants={sideBarVariants} initial="from" animate="to">
      <Logo />
      <DarkmodeButton />
    </StyledSideBar>
  );
};

export default SideBar;
