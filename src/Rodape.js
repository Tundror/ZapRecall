import React, { useState } from 'react';
import styled from 'styled-components';

export default function Rodape(props){
return(
    <Footer>
      {props.numPerguntasRespondidas}/{props.perguntas.length} Concluídos
    </Footer>
)
}
const Footer=styled.div`
position: fixed;
width: 100%;
height: 70px;
background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
bottom:0px;
margin-top:10px;
display:flex;
justify-content: center;
align-items: center;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
`