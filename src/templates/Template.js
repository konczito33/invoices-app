import styled from 'styled-components';
import SideBar from 'components/molecules/SideBar/SideBar';
import React from 'react';
const Template = ({ children }) => {
  return (
    <StyledTemplate>
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
`;

export default Template;
