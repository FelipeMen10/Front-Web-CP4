import styled from "styled-components";

export const LoginStyle = styled.section`

.login{
    height: 750px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.fazer-login{
    background-color: white;
    width: 400px;
    height: 300px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid gray 2px;
    border-radius: 30px;
}

.img-login{
    background-color: lightgray;
    border-radius: 50%;
    width: 50px;
    border: solid black 3px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.img-login img{
    object-fit: cover;
    width: 100%;
}
.email-senha{
    width: 100%
}
.email-senha form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

input{
    border-radius: 5px;
    width: 70%;
    height: 23px;
    border: none;
    outline: none;
    background-color: lightgray;
}

button{
    width: 30%;
    background-color: lightgray;
    border: none;
    border-radius: 5px;
    border-bottom: 3px solid gray;
}
button:active{
    border-bottom: none;
    transform: translate(0, 3px);
}
`