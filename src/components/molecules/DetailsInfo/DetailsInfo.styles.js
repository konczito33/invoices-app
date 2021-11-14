import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledDetails = styled(motion.div)`
  background-color: ${({ theme }) => theme.itemColor};
  padding: 10px 25px;
  border-radius: 10px;
  transition: background-color 0.3s;
  color: ${({ theme }) => theme.grayFontColor};
  font-size: ${({ theme }) => theme.fonts.s};
  strong {
    font-size: ${({ theme }) => theme.fonts.m};
    color: ${({ theme }) => theme.mainFontColor};
    transition: color 0.3s;
  }
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    .sender-adress {
      text-align: right;
    }
    .id {
      span {
        color: ${({ theme }) => theme.purple};
      }
      font-size: ${({ theme }) => theme.fonts.m};
      font-weight: bold;
      color: ${({ theme }) => theme.mainFontColor};
      transition: color 0.3s;
    }
  }
  .mid {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .bottom {
    table {
      width: 100%;
      background-color: ${({ theme }) => theme.tableColor};
      border-radius: 10px 10px 0 0;
      padding: 10px 25px;
      transition: background-color 0.3s;
      tr {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 10px 0;
      }
      .t-name {
        text-align: left;
        font-weight: bold;
        color: ${({ theme }) => theme.mainFontColor};
        transition: color 0.3s;
      }
      .t-qty {
        text-align: center;
      }
      .t-total {
        text-align: right;
        font-weight: bold;
        color: ${({ theme }) => theme.mainFontColor};
        transition: color 0.3s;
      }
      .t-price {
        text-align: center;
      }
    }
    .footer {
      background-color: ${({ theme }) => theme.tfooterColor};
      border-radius: 0 0 10px 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25px 40px;
      transition: background-color 0.3s;
      tr {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      th {
        color: ${({ theme }) => theme.white};
      }
      td {
        font-size: ${({ theme }) => theme.fonts.l};
        color: ${({ theme }) => theme.white};
      }
    }
  }
`;
