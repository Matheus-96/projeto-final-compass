import classNames from 'classnames';
import { UsuarioContext } from 'common/context/Usuario';
import Button from 'Components/Button';
import { InputField, InputGroup } from 'Components/Input';
import Subtitle from 'Components/Subtitle';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ErrorStatus from './ErrorStatus';
import {ReactComponent as IconPassword} from 'assets/icon-password.svg'
import {ReactComponent as IconUser} from 'assets/icon-user.svg'
const Form = styled.form`
width: 100%;
`


export default function LoginForm(){
    const {nome, setNome, password, setPassword} = useContext(UsuarioContext)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    function validateForm(){
        if(validateEmail() && validatePassword()){
            setError(false)
            navigate('home')
            return
        }
        setError(true)
        
    }
            

    function validateEmail(){
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(nome)
    }

    function validatePassword(){
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    }

    return(
        <Form>
            <Subtitle>
                Login
            </Subtitle>
            <InputGroup>
                <InputField
                    placeholder='Usuário'
                    type='text'
                    className={classNames({
                        ['error']: error
                    })}
                    value={nome}
                    onChange={(event)=>setNome(event.target.value)}
                />
                <IconUser className={classNames({
                    ['icon']: true,
                    ['outside']: nome.length == 0
                })}/>
            </InputGroup>
            <InputGroup>
                <InputField
                    placeholder='Senha'
                    type='password'
                    className={classNames({
                        ['error']: error
                    })}
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                />
                <IconPassword className={classNames({
                    ['icon']: true,
                    ['outside']: password.length == 0
                })}/>
            </InputGroup>
            <ErrorStatus className={classNames({
                ['error']: error
            })}>
                Ops, usuário ou senha inválidos.<br />
                Tente novamente!
            </ErrorStatus>
            <Button type='button' onClick={()=> validateForm()}>
                Continuar
            </Button>
        </Form>
    )
}