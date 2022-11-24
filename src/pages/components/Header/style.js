import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    cursor: default;
    list-style: none;
    text-decoration:none;
}
`
export const Container = styled.div`
    padding: 2vh 1vw;
    border-bottom: solid gray 1px;
`
export const Menu = styled.ul`
    height: 8vh;
    display:flex;
    align-items:center;
    justify-content: space-evenly;

    a{
        color: salmon;
        font-size: 1em;
        font-family: sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
    }
`