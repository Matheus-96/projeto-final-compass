import styled from 'styled-components'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useLayoutEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Container = styled.div`
min-height: 100vh;
display:flex;
flex-direction:column;

		
`

const WhiteScreen = styled.div`
    position:absolute;
    width:100vw;
    height:100vh;
    background-color:white;
    &.hidden {
      display:none;
    }
`

export default function Homepage(){
    const navigate = useNavigate()
    const [autenticado, setAutenticado] = useState(false)
    useLayoutEffect(()=> {
        async function validaToken(): Promise<number>{
            const token = localStorage.getItem('token')
            if(token){
                const request = await fetch('http://127.0.0.1:8000/usuario/validaToken',{
                    method: 'POST',
                    headers: new Headers({'Authorization': `bearer ${token}`}),
                })
                return request.status
            }
            return 0
        }

        validaToken().then(status => {
            if(status !== 200){
                navigate('/')
            } else {
                setAutenticado(true)
            }
        })
            
    },[])

    return(
        <Container>
            <WhiteScreen className={`${autenticado ? 'hidden': ''}`}/>
            <Header />
            <Main />
            <Footer />
        </Container>

    )
}