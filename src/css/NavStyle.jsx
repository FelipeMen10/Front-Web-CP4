import styled from "styled-components";

export const NavStyle = styled.header`

header{
display: flex;
width: 100%;
height: 70px;
align-items: center;
justify-content: space-between;
background-color: black;
}

.logo{
background-image: url(src/assets/logo.png);
background-size: cover;
height: 40px;
width: 40px;
float: left;
margin-left: 20px;
}

header .links{
    display: flex;
    margin-right: 2rem;
    gap: 1.5rem;
    transition: 0.5s
}
.caminhos{
text-decoration: none;
weight: 30px;
color: white;
}
.caminhos:hover{
    cursor: pointer;
    text-decoration: underline;
}

`