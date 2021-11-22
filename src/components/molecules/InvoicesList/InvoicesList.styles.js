import styled from 'styled-components';
import { motion } from 'framer-motion';
export const StyledList = styled(motion.ul)`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 20px;
  @media (max-width: 769px) {
    margin-bottom: 50px;
  }
`;
