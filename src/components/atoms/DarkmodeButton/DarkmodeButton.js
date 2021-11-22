import { useTheme } from 'contexts/ThemeContext';
import sun from 'assets/sun.svg';
import moon from 'assets/moon.svg';
import useBreakpoints from 'hooks/useBreakpoints';
import { StyledDarkmodeButton } from './DarkmodeButton.styles';
const DarkmodeButton = () => {
  const { isSm, isMd } = useBreakpoints();
  const { theme, setTheme } = useTheme();
  const toggleThemeHandler = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <StyledDarkmodeButton isSmall={isSm || isMd} onClick={toggleThemeHandler}>
      <img src={theme === 'light' ? moon : sun} alt="" />
    </StyledDarkmodeButton>
  );
};

export default DarkmodeButton;
