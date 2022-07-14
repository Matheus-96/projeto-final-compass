import styled from 'styled-components'
import background from 'assets/login_bg.png'
import Logo from 'assets/logo_compasso.png'
const ImageContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items:start;
  padding-top:2rem;

	@media screen and (max-width: 768px){
		display:none;
	}
`

export default function ImageWrapper(){
    return(
        <ImageContainer>
            <img src={Logo} alt="" />
        </ImageContainer>
    )
}
  