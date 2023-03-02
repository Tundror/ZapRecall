import styled from 'styled-components';
import setaPlay from "./assets/seta_play.png"
import setaVirar from "./assets/seta_virar.png"
import React, { useState } from 'react';

export default function Deck(props) {
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
    const perguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"]
    return (
        <ContainerDeck>
            {perguntas.map((a) => <ItemDeck indexState={props.indexState} setIndexState={props.setIndexState} numPergunta={a} key={a} cards={cards} perguntas={perguntas} />)}
        </ContainerDeck>
    )
}
function ItemDeck(props) {

    const [clicouPlay, setClicouPlay] = useState(false)
    const [index, setIndex] = useState(props.numPergunta.slice(-1) - 1)
    const a = props.cards[index].question
    function mostrarPergunta() {
        setClicouPlay(true)
        console.log(index)
    }
    return (
        !clicouPlay ?
            <CardFechado>
                <PerguntaFechada>{props.numPergunta}</PerguntaFechada>
                <ContainerSetaPlay><img onClick={mostrarPergunta} src={setaPlay}></img></ContainerSetaPlay>
            </CardFechado>
            :
            <CardAberto>
                <PerguntaAberta>{props.cards[index].question}</PerguntaAberta>
                <ContainerSetaVirar><img onClick={mostrarPergunta} src={setaVirar}></img></ContainerSetaVirar>
            </CardAberto>
    )




}

const ContainerDeck = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap: 25px;
`;
const CardFechado = styled.div`
width: 300px;
height: 65px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display:flex;
justify-content: space-between;
align-items:center;
`;
const PerguntaFechada = styled.div`
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
margin-left:15px;
`;
const PerguntaAberta = styled.div`
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
margin-left:15px;
margin-top:18px;
width: 299px;
height: 131px;
border-radius: 5px;
`;

const CardAberto = styled.div`
position:relative;
width: 300px;
height: 131px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display:flex;
justify-content: space-between;
align-items:center;
`;

const ContainerSetaPlay = styled.div`
margin-right: 15px;

&:hover{
    cursor: pointer;
}
`;
const ContainerSetaVirar = styled.div`
position:absolute;
right:15px;
bottom:6px;

&:hover{
    cursor: pointer;
}
`;
