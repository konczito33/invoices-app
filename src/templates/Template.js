import styled from 'styled-components';
import SideBar from 'components/molecules/SideBar/SideBar';
const Template = ({ children }) => {
  return (
    <StyledTemplate>
      <SideBar />
      {children}
    </StyledTemplate>
  );
};

const StyledTemplate = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Template;
