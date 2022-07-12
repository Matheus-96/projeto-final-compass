import LogoCompasso from 'assets/logo_compasso1.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
width: 15%;
`

export default function Logo(){
    return(
        <LogoContainer>
            <img src={LogoCompasso} alt="" />
        </LogoContainer>
    )
}