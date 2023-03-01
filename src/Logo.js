import logo from "./assets/logo.png"
import styled from 'styled-components';
export default function Logo(){
    return(
        <LogoContainer>
          <ImgLogo src={logo}></ImgLogo>
          <TextoLogo>ZapRecall</TextoLogo>
        </LogoContainer>
    )
}
const LogoContainer = styled.div`
display:flex;
justify-content: center;
align-items:center;
gap:18px;
margin-top:44px;
margin-bottom:26px;
`;
const TextoLogo = styled.p`
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
letter-spacing: -0.012em;
color: #FFFFFF;
`;
const ImgLogo = styled.img`
width: 52px;
height: 60px;
`