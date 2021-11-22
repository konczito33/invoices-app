import styled from 'styled-components';
import { motion } from 'framer-motion';
const StyledSideBar = styled(motion.aside)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 1/2;
  width: 100px;
  height: 100vh;
  background-color: ${({ theme }) => theme.sidebarColor};
  transition: background-color 0.3s;
  border-radius: 0px 20px 20px 0px;
  align-self: start;
  z-index: 100;

  ${({ isSmall }) =>
    isSmall &&
    `
    position: sticky;
    top: 0;
    width: 100vw;
    height: 60px;
    flex-direction: row;
    border-radius: 0;
    
  `}
`;

export default StyledSideBar;
