import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyles'
import iconeCerto from "./assets/icone_certo.png"
import iconeErro from "./assets/icone_erro.png"
import iconeQuase from "./assets/icone_quase.png"
import logo from "./assets/logo.png"
import party from "./assets/party.png"
import sad from "./assets/sad.png"
import setaPlay from "./assets/seta_play.png"
import setaVirar from "./assets/seta_virar.png"
import Logo from "./Logo"
import Deck from "./Deck"

function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerApp>
        <Logo />
        <Deck />
      </ContainerApp>
    </>
  );
}
const ContainerApp = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;
`;



export default App;
