import Paragraph from 'Components/Paragraph';
import Title from 'Components/Title';
import styled from 'styled-components';
import Logo from 'assets/logo_compasso.png'

const HeaderContainer = styled.header`
width: 100%;
margin:2rem 0 1rem;
`

const LogoContainer = styled.div`

@media screen and (max-width:768px){
	display:flex;
	justify-content:center;
	margin-bottom:4rem;
	img {
		min-width:240px;

	}
}
@media screen and (min-width:769px){
	display:none;
}

`

export default function Header(){
    return(
        <HeaderContainer>
            <LogoContainer>
                <img src={Logo} alt='Logo Compasso' />
            </LogoContainer>
            <Title>
                Olá,
            </Title>
            <Paragraph>
                Para continuar navegando de forma<br />
                segura, efetue o cadastro na rede.
            </Paragraph>
        </HeaderContainer>
    )
}