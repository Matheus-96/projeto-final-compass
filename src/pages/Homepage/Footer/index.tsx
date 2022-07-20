import { UsuarioContext } from 'common/context/Usuario'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Refresh from './Refresh'

const FooterContainer = styled.div`
display: flex;
background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
padding-bottom: 2rem;
@media screen and (max-width:768px){
  flex-direction:column;
}
`

const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  /* Primária */

  color: #FFFFFF;

  .desktop-only {
    display: block;
  }

  @media screen and (max-width: 768px) {
    text-align:center;
    padding: 2rem 1rem;
    .desktop-only {
      display: none;
    }
  }


`

const Divider = styled.div`
  margin-left: 3.5rem;
  width: 2px;
  height:80px;
  background-color: #FFFFFF;
  @media screen and (max-width: 768px) {
    display:none;
  }
`
const StatusContainer = styled.div`
    padding: 1rem;
    flex-grow:1;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
  
    @media screen and (max-width:768px){
      flex-direction:column;
    }
    
  .paragraphContainer {
    
    display: flex;
    align-items:center;
		@media screen and (max-width: 768px) {
			order:1;
		}
  }

`

const ButtonContainer = styled.div`
  display:flex;
  @media screen and (max-width:768px){
    justify-content:space-evenly;
    align-items:center;

  }
`

const FooterButton = styled.button`
    height: 100%;
    padding: 1.25rem;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    background-color:transparent;
    color: #FFFFFF;
    width:130px;
    border:none;
    height:100%;
`

const FooterButtonLight = styled(FooterButton)`
  font-style: normal;
  font-weight: 400;
  text-align: center;
  background: #FFFFFF;
  color: #C13216;
`

export default function Footer(){
    const navigate = useNavigate()
    const {logout} = useContext(UsuarioContext)

    return(
        <FooterContainer>
            <StatusContainer>
                <div className='paragraphContainer'>
                    <Paragraph>
                      Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a<br className='desktop-only' />
                      aberta em segundo plano e abra uma nova janela para continuar a navegar.
                    </Paragraph>
                    <Divider /> 
                </div>
                <Refresh />
            </StatusContainer>
            <ButtonContainer>
                <a href='https://www.google.com' target={'blank'}>
                    <FooterButtonLight>
                      Continuar<br />
                      Navegando
                    </FooterButtonLight>
                </a>
                
                <FooterButton onClick={()=>{logout(); navigate('/')}}>
                  Logout
                </FooterButton>
            </ButtonContainer>
        </FooterContainer>
    )
}