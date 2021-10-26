const { default: styled } = require('styled-components');

const Center = ({ children }) => <StyledCenter>{children}</StyledCenter>;

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Center;
