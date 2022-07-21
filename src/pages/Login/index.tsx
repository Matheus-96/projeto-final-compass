import LoginWrapper from './LoginWrapper'
import styled from 'styled-components'
import ImageWrapper from './ImageWrapper'
import Header from './LoginWrapper/Header'
import LoginForm from './LoginWrapper/LoginForm'


const Container = styled.div`
  min-height: 100vh;
	display:flex;
	@media screen and (max-width: 768px){
		display:block;
	}
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
	background: linear-gradient(180deg, rgba(51, 56, 61, .9) 0%, rgba(28, 29, 32, .95) 100%);
	width: 85%;
	padding: 4rem 5rem;
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