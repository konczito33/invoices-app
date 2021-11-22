import styled from 'styled-components';
export const StyledDarkmodeButton = styled.button`
  width: 100%;
  height: 100px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${({ isSmall }) =>
    isSmall &&
    `
    margin: 0 10px;
    width: 60px;
    height: 100%;
  `}
`;
