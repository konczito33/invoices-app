import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@400;600&display=swap');
    font-family: 'Spartan', sans-serif;
    padding: 0;
    margin: 0;
    overflow: ${(props) => (props.isCreateModalOpen ? 'hidden' : 'unset')};
    background-color: ${({ theme }) => theme.bodyColor};
    transition: .3s background-color;
    width: calc(100vw - 34px);
    @media (max-width: 1025px) {
    width: 100%;
  }
}
button{
    font-family: inherit;
}
a{
    text-decoration: none;
    color: unset;
}
.react-datepicker__triangle{
     transform: translate3d(0px, 0px, 0px) !important; 
     left: 50% !important;
}

`;
