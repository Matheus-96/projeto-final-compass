import LoginWrapper from './LoginWrapper'
import styled from 'styled-components'
import ImageWrapper from './ImageWrapper'
import Header from './LoginWrapper/Header'
import LoginForm from './LoginWrapper/LoginForm'


const Container = styled.main`
  min-height: 100vh;
  display: flex;
`

const LoginContainer = styled.div`
width:45%;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width: 1440px){
		width: 65%;
}
`
export default function Login(){
    return(
        <Container>
            <LoginWrapper>
                <LoginContainer>
                    <Header />
                    <LoginForm />
                </LoginContainer>
            </LoginWrapper>
            <ImageWrapper />
        </Container>
    )
}