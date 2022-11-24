import React from "react"
import * as S from "./style.js"

export default class Header extends React.Component{
  render(){
    return(
    <>
        <S.GlobalStyle/>
        <S.Container>
            <S.Menu>
              <li>
                <a href={"#"} target={"_blank"}>Início</a>
              </li>
              <li>
                <a href={"#"} target={"_blank"}>Sobre</a>
              </li>
              <li>
                <a href={"#"} target={"_blank"}>Links</a>
              </li>
              <li>
                <a href={"#"} target={"_blank"}>Quem somos</a>
              </li>
            </S.Menu>
        </S.Container>
    </>
    )
  }
}