import styled from 'styled-components';

export const InputGroup = styled.div`
// display:flex;
	margin: 2rem 0 .5rem;
	align-items: center;
  position:relative;

  .icon {
		transition: all 1s;
		position:absolute;
		right:20px;

		top:50%;
		transform: translateY(-50%);
		margin-left: 1rem;
		&.outside {
			transform: translateY(-50%)translateX(280%);

		}
	}

	@media screen and (max-width: 768px){
		width: 100%;
	  .icon {
			right:18px;
			width:18px;
			&.outside {
						transform: translateY(-50%)translateX(0);
			}
		}
	}
	
@media screen and (max-width: 375px){
  .icon {
		right:14px;
		width:16px;
	}
}
`
export const InputGroupCadastro = styled(InputGroup)`
// &:not(:nth-child(1)){
// 	margin-top:1.5rem;
// }
`

export const InputField = styled.input`
	background: #26292C;
	border: 1px solid #FFFFFF;
	border-radius: 50px;
	padding: 1.25rem 5rem 1.25rem 1.25rem;
	font-size:1rem;
	width: 100%;
	background-color: none;
	color: #E0E0E0;
	line-height:20px;
	letter-spacing:1px;
		::placeholder {
			color: #707070;
		}
		&.error{
			border: 1px solid #E9B425;
			border-radius: 50px;
		}
		@media screen and (max-width: 425px){
			padding: 1rem 5rem 1rem 1rem;
			font-size:1.2rem;
		}
		@media screen and (min-width: 426px) and (max-width: 768px){
			font-size:1.4rem;
		}

		::placeholder{
			font-size:1.2rem;
		}

`