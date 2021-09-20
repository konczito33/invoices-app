import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
    @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@400;600&display=swap');
    font-family: 'Spartan', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.bodyColor};
    transition: .3s background-color;
}
`;
