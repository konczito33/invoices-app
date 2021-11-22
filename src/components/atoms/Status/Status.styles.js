import styled from 'styled-components';

export const StyledStatus = styled.div`
  display: inline-block;
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  line-height: 35px;
  width: 90px;
  height: 35px;
  border-radius: 7px;
  font-size: ${({ theme }) => theme.fonts.s};
  background-color: ${({ status }) => (status === 'pending' ? ({ theme }) => theme.orangeBg : status === 'paid' ? ({ theme }) => theme.greenBg : ({ theme }) => theme.blackBg)};
  justify-self: center;
  color: ${({ status }) => (status === 'pending' ? ({ theme }) => theme.orange : status === 'paid' ? ({ theme }) => theme.green : ({ theme }) => theme.black)};
  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${({ status }) => (status === 'pending' ? ({ theme }) => theme.orange : status === 'paid' ? ({ theme }) => theme.green : ({ theme }) => theme.black)};
  }
  @media (max-width: 769px) {
    grid-column: 2/3;
    grid-row: 3/4;
    justify-self: flex-end;
  }
`;
