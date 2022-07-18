import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Refresh from './Refresh'

const FooterContainer = styled.div`
display: flex;
background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
`

const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: right;

  /* Primária */

  color: #FFFFFF;

`

const Divider = styled.div`
  margin-left: 3.5rem;
  width: 2px;
  height:80px;
  background-color: #FFFFFF;
`
const StatusContainer = styled.div`
    padding: 1rem;
    flex-grow:1;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    
  .paragraphContainer {
    display: flex;
    align-items:center;
  }
`

const ButtonContainer = styled.div`
  align-self:stretch;
  display:flex;
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


    return(
        <FooterContainer>
            <StatusContainer>
                <div className='paragraphContainer'>
                    <Paragraph>
                      Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a<br />
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
                <FooterButton onClick={()=>{navigate('/')}}>
                  Logout
                </FooterButton>
            </ButtonContainer>
        </FooterContainer>
    )
}