import styled from 'styled-components';
import { motion } from 'framer-motion';
export const StyledOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 100px;
  right: 0;
  bottom: 0;
  background-color: #00000060;
  z-index: 0;
`;
