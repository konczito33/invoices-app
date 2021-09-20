import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .invoices-info {
    h1 {
      margin: 0;
      font-weight: 600;
      color: ${({ theme }) => theme.mainFontColor};
      transition: 0.3s color;
      font-size: ${({ theme }) => theme.fonts.l};
    }
    h2 {
      margin: 0;
      font-weight: normal;
      color: ${({ theme }) => theme.grayFontColor};
      transition: 0.3s color;
      font-size: ${({ theme }) => theme.fonts.s};
    }
  }
  .header-buttons {
    display: flex;
    justify-content: space-between;
    width: 220px;
  }
`;
