import styled from 'styled-components';
import { motion } from 'framer-motion';
export const StyledHeader = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
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
    width: 280px;
    display: flex;
    justify-content: space-between;
  }
`;
