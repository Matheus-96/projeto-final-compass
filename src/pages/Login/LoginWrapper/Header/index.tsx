import Paragraph from 'Components/Paragraph';
import Subtitle from 'Components/Subtitle';
import Title from 'Components/Title';
import styled from 'styled-components';

const HeaderContainer = styled.header`
width: 100%;
`

export default function Header(){
    return(
        <HeaderContainer>
            <Title>
							Ola,
            </Title>
            <Paragraph>
							Para continuar navegando de forma<br />
							segura, efetue o login na rede.
            </Paragraph>
        </HeaderContainer>
    )
}