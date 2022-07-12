import styled from 'styled-components';

export default styled.p<Props>`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
text-align: center;
width:90%;

color: #E9B425;
display:none;
&.error {
	display:block;
}
`

interface Props {
	error?: boolean
}