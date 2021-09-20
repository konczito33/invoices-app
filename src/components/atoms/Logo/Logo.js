import logosvg from 'assets/logo.svg';
import styled from 'styled-components';
const Logo = () => {
  return (
    <StyledLogo>
      <img src={logosvg} alt="" />
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background-color: rgb(124, 93, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 20px 20px 0px;

  &::before {
    content: '';
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 50%;
    background: rgb(146, 119, 255);
    border-radius: 20px 0px;
  }
  img {
    z-index: 10;
  }
`;

export default Logo;
