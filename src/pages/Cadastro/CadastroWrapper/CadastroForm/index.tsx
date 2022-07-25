/* eslint-disable quotes */
import classNames from 'classnames';
import { UsuarioContext } from 'common/context/Usuario';
import Button from 'Components/Button';
import { InputField, InputGroupCadastro } from 'Components/Input';
import Subtitle from 'Components/Subtitle';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import ErrorStatus from './ErrorStatus';
import {ReactComponent as IconPassword} from 'assets/icon-password.svg'
import {ReactComponent as IconUser} from 'assets/icon-user.svg'
import {ReactComponent as IconConfirm} from 'assets/confirm.svg'
import validacoes from './validacoes';
import Modal from 'Components/Modal';

const Form = styled.form`
width: 100%;
// padding:5rem 0 1rem;

.login {
  text-align:end;
  padding:0 1rem;
  margin-top:2rem;
  font-size:1.2rem;
  width:100%;
  a{
    color:orange;
    cursor:pointer;
    &:hover {
      text-decoration:underline;
    }
  }

  @media screen and (max-width:767px){
    font-size:1.1rem;
  }
}
`

const Requirements = styled.div`
font-size:1rem;
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
      color:grey;
      content:'✖';
    }
  }
`

const SmButton = styled(Button)`
padding-top: 1rem;
`

export default function LoginForm(){
    const {nome, setNome, password, setPassword} = useContext(UsuarioContext)
    const [errorMessage, setErrorMessage] = useState('Erro ao processar requisição, tente novamente mais tarde.')
    const [error, setError] = useState(false)
    const [showingValidation, setShowingValidation] = useState({
        email: false,
        password: false
    })
    const [registered, setRegistered] = useState(false)

    const navigate = useNavigate()

    useEffect(()=> {
        setError(false)
    }, [nome, password])

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
        // setErrorMessage('Erro de validação')
        // setError(true)
        
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
            setRegistered(true)
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
        return /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(nome)
    }

    function validatePassword(){
        return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)
    }

    function clearRequirements(campo: string){
        switch(campo){
        case 'nome':
            setShowingValidation(previous => {
                return {
                    ...previous,
                    'email': !validateEmail()
                }
            })
            console.log(validateEmail());
            
            break;
        case 'password':
            setShowingValidation(previous => {
                return {
                    ...previous,
                    [campo]: !validatePassword()
                }
            })
            console.log(validatePassword());

            break;
        }
    }
    return(
        <Form onSubmit={event => {event.preventDefault()}}>
            <Modal open={registered}>
                <div className='image-container'>
                    <IconConfirm className='modal-image' />
                </div>
                
                <p className='modal-text'>
                  Cadastro efetuado com sucesso!
                </p>

                <SmButton onClick={()=> navigate('/')}>
                  Voltar ao menu
                </SmButton>
            </Modal>				
            <Subtitle>
                Cadastro
            </Subtitle>
            <InputGroupCadastro>
                <InputField
                    placeholder='Usuário'
                    type='email'
                    className={classNames({
                        ['error']: error
                    })}
                    value={nome}
                    onChange={(event)=>setNome(event.target.value)}
                    onFocus={()=>showValidation('email')}
                    onBlur={()=>clearRequirements('nome')}

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
                    onBlur={()=>clearRequirements('password')}

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
            <ErrorStatus className={classNames({
                ['error']: error
            })}>
                {errorMessage}
            </ErrorStatus>
            <Button type='submit' onClick={()=> validateForm()}>
                Cadastrar
            </Button>
            <div className='login'>Já possui cadastro? <a onClick={()=>navigate('/')}>Faça login agora</a></div>

        </Form>

    )
}