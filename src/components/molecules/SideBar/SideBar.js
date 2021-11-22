import React from 'react';
import StyledSideBar from './SideBar.styles';
import DarkmodeButton from 'components/atoms/DarkmodeButton/DarkmodeButton';
import Logo from 'components/atoms/Logo/Logo';
import useBreakpoints from 'hooks/useBreakpoints';

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
  const { isSm, isMd } = useBreakpoints();
  return (
    <StyledSideBar isSmall={isSm || isMd} variants={sideBarVariants} initial="from" animate="to">
      <Logo />
      <DarkmodeButton />
    </StyledSideBar>
  );
};

export default SideBar;
