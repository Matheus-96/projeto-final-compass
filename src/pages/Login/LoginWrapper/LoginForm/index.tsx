import classNames from 'classnames';
import { UsuarioContext } from 'common/context/Usuario';
import Button from 'Components/Button';
import { InputField, InputGroup } from 'Components/Input';
import Subtitle from 'Components/Subtitle';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ErrorStatus from './ErrorStatus';
import {ReactComponent as IconPassword} from 'assets/icon-password.svg'
import {ReactComponent as IconUser} from 'assets/icon-user.svg'
import validacoes from './validacoes'

const Form = styled.form`
width: 100%;
padding:5rem 0 1rem;

.cadastro {
  text-align:end;
  padding:0 1rem;
  margin-top:2rem;
  width:100%;
  a{
    color:orange;
    cursor:pointer;
    &:hover {
      text-decoration:underline;
    }
  }
}
`


export default function LoginForm(){
    const {nome, setNome, password, setPassword} = useContext(UsuarioContext)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    function validateForm(){
        if(validateEmail()
            && validacoes.campoLetraMaiuscula(password)
            && validacoes.campoLetraMinuscula(password)
            && validacoes.campoNumero(password)
            && validacoes.campoTamanhoMinimo(password, 6)    
        ){
            login()
            setError(false)
            //navigate('home')
            return
        }
        setError(true)
        
    }
    useEffect(()=> {
        setError(false)
    },[nome, password])   
    async function login(){
        try{
            const request = await fetch('http://127.0.0.1:8000/usuario/login',
                {
                    body: JSON.stringify({email: nome, senha: password}),
                    mode: 'cors',
                    headers: new Headers({'Content-Type': 'Application/Json'}),
                    method: 'POST'
                    
                })
            
            if(request.status === 200){ 
                setError(true)
                const token = await request.json()
                localStorage.setItem('token', token.token)
                navigate('/home')
            } else {
                setError(true)
            }
        } catch(error){
            console.log(error);  
        }
    }

    function validateEmail(){
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(nome)
    }

    function validatePassword(){
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    }

    return(
        <Form onSubmit={event => {event.preventDefault()}}>
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
            <Button type='submit' onClick={()=> validateForm()}>
                Continuar
            </Button>
            <div className='cadastro'>Não possui cadastro? <a onClick={()=> navigate('/cadastro')}>Cadastre-se agora</a></div>

        </Form>
    )
}