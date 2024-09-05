import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
font-family: "Montserrat", sans-serif;
font-optical-sizing: auto;
font-weight: <weight>;
font-style: normal;
margin = 0px;   
padding = 0px;
box-sizing: border-box;
}

body{
width:100%;
margin: 0px;
background-repeat: round;
background-color: transparent;
background-image: url(src/assets/background.jpeg);
}
`

export default GlobalStyle