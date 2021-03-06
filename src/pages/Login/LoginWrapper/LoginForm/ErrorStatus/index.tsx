import styled from 'styled-components';

export default styled.p<Props>`
font-style: normal;
font-weight: 700;
font-size: 1.3rem;
line-height: 20px;
text-align: center;
width:100%;
padding: 2rem 0 1rem;

color: #E9B425;
opacity:0;
transition: opacity 0.5s;
&.error {
	opacity:1;

}


@media screen and (max-width:768px){
	display:none;
	&.error {
		display:block;
	}
`

interface Props {
	error?: boolean
}