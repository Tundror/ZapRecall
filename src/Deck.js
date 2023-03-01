import styled from 'styled-components';
import setaPlay from "./assets/seta_play.png"

export default function Deck(){
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
    return(
        <ContainerDeck>
            {perguntas.map((a) => <ItemDeck pergunta={a} key={a}/>)}
        </ContainerDeck>
    )
}
function ItemDeck(props){
    return(
        <Card>
            <Pergunta>{props.pergunta}</Pergunta>
            <ContainerSetaPlay><img src={setaPlay}></img></ContainerSetaPlay>
            
            
        </Card>
    )
}

const ContainerDeck = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap: 25px;
`;
const Card = styled.div`
width: 300px;
height: 65px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display:flex;
justify-content: space-between;
align-items:center;
`;
const Pergunta = styled.div`
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
margin-left:15px;
`;

const ContainerSetaPlay = styled.div`
margin-right: 15px;
`

//{cards.map((a) => <ItemDeck question={a.question} answer={a.answer} key={a.question}/>)}