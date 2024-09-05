import styled from "styled-components";

export const ProdutosStyle = styled.section`

.produtos{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img{
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: solid black 2px;
    border-radius: 20px;
}

.cards{
    margin-top: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: white;
    width: 90%;
    height: 400px;
    border-radius: 30px;
    border: solid lightgray 1px;

}
.card-produtos{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    height: 90%;
    background-color: lightgray;
    border-radius: 20px;
}


`