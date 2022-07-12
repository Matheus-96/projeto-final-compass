import styled from 'styled-components';

import {ReactComponent as IconUser} from 'assets/icon-user.svg'
import {ReactComponent as IconPassword} from 'assets/icon-password.svg'
import classNames from 'classnames';

const InputGroup = styled.div`
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

const InputField = styled.input`
	background: #26292C;
	border: 1px solid #FFFFFF;
	border-radius: 50px;
	padding: 1.25rem;
	width: 100%;
	background-color: none;
	color: #E0E0E0;
	line-height:20px;
	::placeholder{
		color: #E0E0E0;
	}
	&.error{
		border: 1px solid #E9B425;
		border-radius: 50px;
	}
`

export default function Input({type='text', error, state='', setState}: Props){
    return(
        <InputGroup>
            <InputField
                placeholder={type == 'password'? 'Senha': 'Usuário'}
                type={type}
                className={classNames({
                    ['error']: error
                })}
                value={state}
                onChange={(event)=>setState(event.target.value)}
            ></InputField>
            {type == 'password' ?
                <IconPassword className={classNames({
                    ['icon']: true,
                    ['outside']: state.length > 0
                })}/> :
                <IconUser className={classNames({
                    ['icon']: true,
                    ['outside']: state.length > 0
                })}/>}
        </InputGroup>
    )
}

interface Props {
	type?:string,
	error?: boolean,
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>>
}