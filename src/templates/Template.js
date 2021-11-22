import styled from 'styled-components';
import SideBar from 'components/molecules/SideBar/SideBar';
import useBreakpoints from 'hooks/useBreakpoints';
import React from 'react';
const Template = ({ children }) => {
  const { isSm, isMd } = useBreakpoints();
  return (
    <StyledTemplate isMobile={isSm || isMd}>
      <div>
        <SideBar />
      </div>
      {children}
    </StyledTemplate>
  );
};

const StyledTemplate = styled.div`
  margin-right: calc(100vw - 100%);
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 100px 1fr;

  ${({ isMobile }) =>
    isMobile &&
    `
    display: flex;
    flex-direction: column;
    margin-right: 0;
  `}
`;

export default Template;
