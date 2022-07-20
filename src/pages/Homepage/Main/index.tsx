import styled from 'styled-components'
import backgroundLogo from 'assets/homepage_bg.png'

const MainContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:end;
  width:100%;
  flex-grow:1;
	padding: 1rem 0;
  padding-right:8.375rem;

	background-image: url(${backgroundLogo});
		background-position-x: left;
		background-position-y: calc(100% + 4rem);
		background-size: calc(1rem*30);
		background-repeat: no-repeat;
		@media screen and (max-width:768px){
			background: none;
		}

	.mobile-only{
		display: none;
	}

	@media screen and (max-width:768px){
		padding-right:2rem;
		padding-bottom:6rem;

		.mobile-only {
			display: block;
		}
	}
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
    line-height: 5rem;
    text-align: right;

    /* Primária */

    color: #C12D18;

		@media screen and (max-width:767px){
			font-size: 3rem;
		}
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    text-align: right;

    /* Primária */

    color: #C12D18;
		
		@media screen and (max-width:767px){
			font-size: 3rem;
		}
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: right;
    color: #222222;
  }
	span {
		font-style: normal;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 1.875rem;
		color: #222222;
		text-align:end;

	}
`
export default function Main(){
    return(
        <MainContainer>
            <h2>Our mission is</h2>
            <span>Nossa missão é</span>
            <h1>to transform the world</h1>
            <span>transformar o mundo</span>
            <h1>building digital experiences</h1>
            <span>construindo experiências digitais</span>
            {/*eslint-disable-next-line quotes*/}
            <h1>{`that enable our client's growth`}</h1>
            <span>que permitam o crescimento dos nossos<br className='mobile-only' />clientes</span>
        </MainContainer>
    )
}