import styled from 'styled-components';
import setaPlay from "./assets/seta_play.png"
import setaVirar from "./assets/seta_virar.png"
import iconeCerto from "./assets/icone_certo.png"
import iconeErro from "./assets/icone_erro.png"
import iconeQuase from "./assets/icone_quase.png"
import React, { useState } from 'react';

export default function Deck(props) {

    return (
        <ContainerDeck>
            {props.perguntas.map((a) =>
                <ItemDeck
                    indexState={props.indexState}
                    setIndexState={props.setIndexState}
                    numPergunta={a}
                    key={a}
                    cards={props.cards}
                    numPerguntasRespondidas={props.numPerguntasRespondidas}
                    setNumPerguntasRespondidas={props.setNumPerguntasRespondidas}
                />)}
        </ContainerDeck>
    )
}
function ItemDeck(props) {

    const [clicouPlay, setClicouPlay] = useState(false)
    const [clicouVirar, setClicouVirar] = useState(false)
    const [clicouResposta, setClicouResposta] = useState(false)
    const [resposta, setResposta] = useState("")
    const [index, setIndex] = useState(props.numPergunta.slice(-1) - 1)
    const a = props.cards[index].question
    function mostrarPergunta() {
        setClicouPlay(true)
    }
    function virarPergunta() {
        setClicouVirar(true)
    }
    function respondeuCard(resposta) {
        if (!clicouResposta) {
            setClicouResposta(true)
            setResposta(resposta)
            setClicouPlay(false)
            props.setNumPerguntasRespondidas(props.numPerguntasRespondidas + 1)
            console.log(props.numPerguntasRespondidas + 1)
        }
    }
    return (
        clicouPlay ?
            <CardAberto data-test="flashcard">
                {!clicouVirar ?
                    <>
                        <PerguntaAberta data-test="flashcard-text">{props.cards[index].question}</PerguntaAberta>
                        <ContainerSetaVirar><SetaVirar data-test="turn-btn" onClick={virarPergunta} src={setaVirar}></SetaVirar></ContainerSetaVirar>
                    </>
                    :
                    <>
                        <PerguntaAberta data-test="flashcard-text">{props.cards[index].answer}</PerguntaAberta>
                        <ContainerZap>
                            <NaoLembrei data-test="no-btn" onClick={() => respondeuCard("Não lembrei")}>Não lembrei</NaoLembrei>
                            <QuaseNaoLembrei data-test="partial-btn" onClick={() => respondeuCard("Quase não lembrei")}>Quase não lembrei</QuaseNaoLembrei>
                            <Zap data-test="zap-btn" onClick={() => respondeuCard("Zap!")}>Zap!</Zap>
                        </ContainerZap>
                    </>
                }
            </CardAberto>
            :
            <CardFechado data-test="flashcard">
                {(resposta === "Não lembrei") ?
                    <div>
                        <PerguntaFechadaR1 data-test="flashcard-text">{props.numPergunta}</PerguntaFechadaR1>
                    </div>
                    : (resposta === "Quase não lembrei") ?
                        <div>
                            <PerguntaFechadaR2 data-test="flashcard-text">{props.numPergunta}</PerguntaFechadaR2>
                        </div>
                        : (resposta === "Zap!") ?
                            <div>
                                <PerguntaFechadaR3 data-test="flashcard-text">{props.numPergunta}</PerguntaFechadaR3>
                            </div>
                            :
                            <div>
                                <PerguntaFechada data-test="flashcard-text">{props.numPergunta}</PerguntaFechada>
                            </div>}
                <ContainerSetaPlay>
                    {(resposta === "Não lembrei") ?
                        <img data-test="no-icon" src={iconeErro}></img>
                        : (resposta === "Quase não lembrei") ?
                            <img data-test="partial-icon" src={iconeQuase}></img>
                            : (resposta === "Zap!") ?
                                <img data-test="zap-icon" src={iconeCerto}></img>
                                :
                                <img data-test="play-btn" onClick={mostrarPergunta} src={setaPlay}></img>
                    }
                </ContainerSetaPlay>
            </CardFechado>


    )




}

const ContainerDeck = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap: 25px;
margin-bottom:100px;
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
const PerguntaFechadaR1 = styled.div`
font-family: 'Recursive';
text-decoration: line-through;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FF3030;
margin-left:15px;
`;
const PerguntaFechadaR2 = styled.div`
font-family: 'Recursive';
text-decoration: line-through;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FF922E;
margin-left:15px;
`;
const PerguntaFechadaR3 = styled.div`
font-family: 'Recursive';
text-decoration: line-through;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #2FBE34;
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
border-radius: 5px;
`;

const CardAberto = styled.div`
position:relative;
width: 300px;
min-height: 131px;
max-height:300px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display:flex;
flex-direction:column;
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
const SetaVirar = styled.img`
width: 30px;
height: 20px;
`
const NaoLembrei = styled.div`
width: 85px;
height: 37px;
background: #FF3030;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
display:flex;
justify-content:center;
&:hover{
    cursor: pointer;
}
`;
const QuaseNaoLembrei = styled.div`
width: 85px;
height: 37px;
background: #FF922E;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
display:flex;
justify-content:center;
&:hover{
    cursor: pointer;
}
`;
const Zap = styled.div`
width: 85px;
height: 37px;
background: #2FBE34;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
display:flex;
justify-content:center;
&:hover{
    cursor: pointer;
}
`;

const ContainerZap = styled.div`
display:flex;
gap:8px;
margin-bottom:10px;
margin-top:5px;
`;