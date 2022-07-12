import classNames from 'classnames';
import Button from 'Components/Button';
import Input from 'Components/Input';
import Subtitle from 'Components/Subtitle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ErrorStatus from './ErrorStatus';
const Form = styled.form`
width: 100%;
`


export default function LoginForm(){
    const [counter, setCounter] = useState(0)
    const navigate = useNavigate()

    function increaseCounter(){
        setCounter(counter+1)
        if(counter >= 3){
            navigate('home')
        }
    }

    return(
        <Form>
            <Subtitle>
                Login {counter}
            </Subtitle>
            <Input  error={counter>=2} />
            <Input error={counter>=2} type='password' />
            <ErrorStatus className={classNames({
                ['error']: counter>=2
            })}>
                Ops, usuário ou senha inválidos.<br />
                Tente novamente!
            </ErrorStatus>
            <Button type='button' onClick={()=> increaseCounter()}>
                Continuar
            </Button>
        </Form>
    )
}