import styled from 'styled-components'
import Header from './Header'
import backgroundLogo from 'assets/homepage_bg.png'
import Main from './Main'
import Footer from './Footer'

const Container = styled.div`
		background-image: url(${backgroundLogo});
		background-position: left bottom;
		background-size: calc(1rem*30);
		background-repeat: no-repeat;
		min-height: 100vh;
    display:flex;
    flex-direction:column;
`


export default function Homepage(){
    return(
        <Container>
            <Header />
            <Main />
            <Footer />
        </Container>
    )
}