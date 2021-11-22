import styled from 'styled-components';

export const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 10;
  ul {
    list-style: none;
    position: absolute;
    bottom: -145px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.tableColor};
    color: ${({ theme }) => theme.mainFontColor};
    font-size: ${({ theme }) => theme.fonts.s};
    transition: background-color 0.3s, color 0.3s;
    border-radius: 10px;
    width: 180px;
    padding: 15px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    li {
      padding: 4px 0;
    }
  }
`;
