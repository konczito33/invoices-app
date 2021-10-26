import styled from 'styled-components';

const StyledSideBar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 1/2;
  width: 100px;
  height: 100vh;
  background-color: ${({ theme }) => theme.sidebarColor};
  transition: background-color 0.3s;
  border-radius: 0px 20px 20px 0px;
  align-self: start;
  z-index: 100;
`;

export default StyledSideBar;
