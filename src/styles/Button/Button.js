import styled from 'styled-components';
const Button = (props) => <StyledButton {...props} />;

export const StyledButton = styled.button`
  border-radius: 40px;
  border: none;
  padding: ${({ isWide }) => (isWide ? '12px 24px' : '8px 8px')};
  display: flex;
  justify-content: space-between;
  background-color: ${({ bgColor }) => bgColor};
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.s};
  color: ${({ color }) => color};
  transition: 0.3s color, background-color 0.3s, opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
  span {
    margin: 0 5px;
  }
  img {
    transition: transform 0.3s;
  }
`;
export default Button;
