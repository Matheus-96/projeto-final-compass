import styled from 'styled-components';

import {ReactComponent as IconUser} from 'assets/icon-user.svg'
import {ReactComponent as IconPassword} from 'assets/icon-password.svg'
import classNames from 'classnames';

const InputGroup = styled.div`
display:flex;
	margin-bottom: 2rem;
	align-items: center;

.icon {
	margin-left: 1rem;
}
`

const InputField = styled.input`
	background: #26292C;
	border: 1px solid #FFFFFF;
	border-radius: 50px;
	padding: 1.25rem;
	width: 90%;
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

export default function Input({type='text', error}: Props){
    return(
        <InputGroup>
            <InputField
                placeholder={type == 'password'? 'Senha': 'Usuário'}
                type={type}
                className={classNames({
                    ['error']: error
                })}
            ></InputField>
            {type == 'password' ? <IconPassword className='icon'/> : <IconUser className='icon'/>}
        </InputGroup>
    )
}

interface Props {
	type?:string,
	error?: boolean
}