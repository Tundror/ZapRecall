import React from 'react';
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

function App() {
  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]
  return (
    <>
      <GlobalStyle />
      
    </>
  );
}
const ContainerApp = styled.div`
background-color:#FB6B6B;
height:100%;
width:100%;
`;


export default App;
