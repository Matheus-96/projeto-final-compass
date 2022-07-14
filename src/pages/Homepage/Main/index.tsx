import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:end;
  width:100%;
  flex-grow:1;
	margin: 1rem 0;
  padding-right:8.375rem;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
    line-height: 5rem;
    text-align: right;

    /* Primária */

    color: #C12D18;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    text-align: right;

    /* Primária */

    color: #C12D18;
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
            <span>que permitam o crescimento dos nossos clientes</span>
        </MainContainer>
    )
}