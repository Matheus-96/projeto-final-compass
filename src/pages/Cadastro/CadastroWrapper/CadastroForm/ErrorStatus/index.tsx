import styled from 'styled-components';

export default styled.p<Props>`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
text-align: center;
width:100%;
padding: 2rem 0 1rem;

color: #E9B425;
opacity:0;
&.error {
	transition: opacity 0.5s;
	opacity:1;
}
`

interface Props {
	error?: boolean
}