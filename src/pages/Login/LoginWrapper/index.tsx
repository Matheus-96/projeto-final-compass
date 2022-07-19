import styled from 'styled-components';
import background from 'assets/login_bg.png'


export default styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-grow: 1;
  min-height: 100vh;

	background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
	box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
	color: #E0E0E0;

	@media screen and (max-width: 768px){
		background: url(${background});
		background-size: cover;
	}
`

