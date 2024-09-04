import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
font-family: "Montserrat", sans-serif;
font-optical-sizing: auto;
font-weight: <weight>;
font-style: normal;
margin = 0px;   
padding = 0px;
}

body{
width:100%;
margin: 0px;
background-size: cover;
background-color: transparent;
background-image: url(src/assets/background.jpg);
}
`

export default GlobalStyle