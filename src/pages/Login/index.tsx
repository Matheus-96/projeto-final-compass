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
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
min-height: 100vh;
@media screen and (max-width: 1440px){
		width: 65%;
}

@media screen and (max-width: 768px){
	background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
	width: 80%;
	padding: 1rem 3rem;
	min-height: 80%;
	margin: auto 0;
	border-radius:10px;
	box-shadow: 4px 4px 10px 10px rgba(0, 0, 0, 0.25);
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