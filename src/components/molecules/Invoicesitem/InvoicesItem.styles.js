import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledItem = styled(motion.li)`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1.2fr 1fr 1fr 0.3fr;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.itemColor};
  height: 70px;
  padding: 10px 25px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fonts.s};
  border: 1px solid ${({ theme }) => theme.itemBorderColor};
  transition: 0.3s background-color, 0.3s border-color;
  h3 {
    margin: 0;
    padding: 0;
  }

  .id {
    color: ${({ theme }) => theme.mainFontColor};
    transition: color 0.3s;

    span {
      color: ${({ theme }) => theme.purple};
    }
  }
  .due {
    color: ${({ theme }) => theme.grayFontColor};
    transition: color 0.3s;
  }
  .name {
    color: ${({ theme }) => theme.grayFontColor};
    transition: color 0.3s;
  }
  img {
    transform: rotate(-90deg);
    justify-self: end;
  }
  .total {
    padding-right: 20px;
    text-align: right;
    font-weight: bold;
    color: ${({ theme }) => theme.mainFontColor};
    transition: color 0.3s;
    font-size: ${({ theme }) => theme.fonts.m};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.purple};
  }
`;
