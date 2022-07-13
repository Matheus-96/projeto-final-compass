import styled from 'styled-components';

export const InputGroup = styled.div`
// display:flex;
	margin-bottom: 2rem;
	align-items: center;
  position:relative;
  .icon {
  transition: all 1s;
  position:absolute;
  right:5%;
  top:50%;
  transform: translateY(-50%);
	margin-left: 1rem;
  &.outside {
    transform: translateY(-50%)translateX(280%);

  }
}
`

export const InputField = styled.input`
	background: #26292C;
	border: 1px solid #FFFFFF;
	border-radius: 50px;
	padding: 1.25rem;
	width: 100%;
	background-color: none;
	color: #E0E0E0;
	line-height:20px;
	letter-spacing:1px;
	::placeholder{
		color: #E0E0E0;
	}
	&.error{
		border: 1px solid #E9B425;
		border-radius: 50px;
	}
`