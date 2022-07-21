import Paragraph from 'Components/Paragraph';
import Title from 'Components/Title';
import styled from 'styled-components';
import Logo from 'assets/logo_compasso.png'

const HeaderContainer = styled.header`
width: 100%;
`

const LogoContainer = styled.div`

@media screen and (max-width:768px){
	display:flex;
	justify-content:center;
	margin: 0 0 4rem;
	img {
		min-width:190px;
		
	}
}

@media screen and (min-width:769px){
	display:none;
}

@media screen and (max-width:767px){
	margin: 0 0 3rem;
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
                Para continuar navegando de forma <br className='desktop-only'/>
                segura, efetue o cadastro na rede.
            </Paragraph>
        </HeaderContainer>
    )
}