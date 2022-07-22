import LogoCompasso from 'assets/logo_compasso1.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
width: 15%;
img {
	width:100%;
}
@media screen and (max-width:768px){
	padding: 2rem 0;
	width:100%;
	display:flex;
	justify-content:center;
	img {
		width:75%;
		max-width: 475px;
	}
}
`

export default function Logo(){
    return(
        <LogoContainer>
            <img src={LogoCompasso} alt="" />
        </LogoContainer>
    )
}