import styled from 'styled-components';
export const StyledPanel = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.itemColor};
  border-radius: 10px;
  padding: 20px 25px;
  transition: background-color 0.3s;
  margin: 40px 0 20px 0;
  p {
    margin-right: 15px;
    color: ${({ theme }) => theme.grayFontColor};
    font-size: ${({ theme }) => theme.fonts.s};
    transition: color 0.3s;
  }
  .buttons {
    display: flex;
    flex: 1;
    gap: 5px;
    justify-content: flex-end;
  }
`;

export const StyledBackButton = styled.div`
  font-size: ${({ theme }) => theme.fonts.s};
  color: ${({ theme }) => theme.mainFontColor};
`;
