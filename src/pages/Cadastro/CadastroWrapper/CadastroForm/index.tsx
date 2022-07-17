/* eslint-disable quotes */
import classNames from 'classnames';
import { UsuarioContext } from 'common/context/Usuario';
import Button from 'Components/Button';
import { InputField, InputGroup, InputGroupCadastro } from 'Components/Input';
import Subtitle from 'Components/Subtitle';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ErrorStatus from './ErrorStatus';
import {ReactComponent as IconPassword} from 'assets/icon-password.svg'
import {ReactComponent as IconUser} from 'assets/icon-user.svg'

import validacoes from './validacoes';
import { previousDay } from 'date-fns';

const Form = styled.form`
width: 100%;
padding:5rem 0 1rem;

.login {
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

const Requirements = styled.div`
display:none;
  &.visible{
    display:block;
  }
  .requirement {
    display:block;
    &.ok:before{
      color:green;
      content:'✔';
    }
    &:before{
      margin-right:5px;
      color:red;
      content:'✖';
    }
  }
`

export default function LoginForm(){
    const {nome, setNome, password, setPassword} = useContext(UsuarioContext)
    const [errorMessage, setErrorMessage] = useState('Erro ao processar requisição, tente novamente mais tarde.')
    const [error, setError] = useState(false)
    const [showingValidation, setShowingValidation] = useState({
        email: false,
        password: false
    })

    const navigate = useNavigate()

    function validateForm(){
        if(validateEmail()
          && validacoes.campoTamanhoMinimo(password,6)
          && validacoes.campoLetraMaiuscula(password) 
          && validacoes.campoLetraMinuscula(password) 
          && validacoes.campoNumero(password)
        ){
            setShowingValidation({email: false,password: false})
            createUser()
            return
        }
        setShowingValidation({email: true,password: true})
        setErrorMessage('Erro de validação')
        setError(true)
        
    }

    async function createUser(){
        const user = JSON.stringify({email: nome, senha:password})
        const fetchOptions = {
            method:'POST',
            body: user,
            headers: new Headers({'Content-Type': 'Application/Json'})
        }
        const request = await fetch('http://127.0.0.1:8000/usuario',fetchOptions)
        
        switch(request.status){
        case 201:
            setError(false)
            navigate('/')
            return
        case 422:
            setErrorMessage("Email de usuário indisponível")
            setError(true)
            break
        }

        
    }
      
    function showValidation(inputName:string){
        setShowingValidation(previous => {
            return {
                ...previous,
                [inputName]: true
            }
        })
        
    }

    function validateEmail(){
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(nome)
    }

    function validatePassword(){
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    }

    return(
        <Form onSubmit={event => {event.preventDefault()}}>
            <Subtitle>
                Cadastro
            </Subtitle>
            <InputGroupCadastro>
                <InputField
                    placeholder='Usuário'
                    type='text'
                    className={classNames({
                        ['error']: error
                    })}
                    value={nome}
                    onChange={(event)=>setNome(event.target.value)}
                    onFocus={()=>showValidation('email')}
                />
                <IconUser className={classNames({
                    ['icon']: true,
                    ['outside']: nome.length == 0
                })}/>
            </InputGroupCadastro>
            <Requirements className={`${showingValidation.email ? 'visible': ''}`}>
                <span className={`requirement ${validateEmail() ? 'ok' : ''}`}>Email válido</span>
            </Requirements>
            <InputGroupCadastro>
                <InputField
                    placeholder='Senha'
                    type='password'
                    className={classNames({
                        ['error']: error
                    })}
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    onFocus={()=>showValidation('password')}

                />
                <IconPassword className={classNames({
                    ['icon']: true,
                    ['outside']: password.length == 0
                })}/>
            </InputGroupCadastro>
            <Requirements className={`${showingValidation.password ? 'visible': ''}`}>
                <span className={`requirement ${validacoes.campoTamanhoMinimo(password,6) ? 'ok' : ''}`}>Mínimo 6 caracteres</span>
                <span className={`requirement ${validacoes.campoLetraMaiuscula(password) ? 'ok' : ''}`}>1 letra maiúscula</span>
                <span className={`requirement ${validacoes.campoLetraMinuscula(password) ? 'ok' : ''}`}>1 letra minúscula</span>
                <span className={`requirement ${validacoes.campoNumero(password) ? 'ok' : ''}`}>1 número</span>
            </Requirements>
            <div className='login'>Já possui cadastro? <a onClick={()=> navigate('/')}>Faça login agora</a></div>
            <ErrorStatus className={classNames({
                ['error']: error
            })}>
                {errorMessage}
            </ErrorStatus>
            <Button type='submit' onClick={()=> validateForm()}>
                Cadastrar
            </Button>
        </Form>
    )
}