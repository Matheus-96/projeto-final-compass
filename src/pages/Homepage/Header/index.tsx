import styled from 'styled-components'
import Clock from './Clock'
import Logo from './Logo'
import Weather from './Weather'

const HeaderContainer = styled.header`
display:flex;
justify-content: space-between;
padding: 1.5rem 2.5rem;
@media screen and (max-width:768px){
	flex-direction:row;
	align-items:center;
	flex-wrap:wrap;
}
`
export default function Header(){
    return(
        <HeaderContainer>
            <Logo />
            <Clock />
            <Weather />
        </HeaderContainer>
    )
}