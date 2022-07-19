/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const DEFAULT_VALUE = {
    nome: '',
    password: '',
    setNome: () => {},
    setPassword: () => {},
    getTimer: ()=> 0

}
export const UsuarioContext = createContext<UsuarioContext>(DEFAULT_VALUE)
UsuarioContext.displayName = 'Usuario'

export const UsuarioProvider = ({children}: Props) => {
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')

    function getTimer(){
        const token = localStorage.getItem('token')
        
        if(token){
            const decoded:Ijwt = jwtDecode(token)
            const expiry = decoded.exp
            const today = new Date().getTime() / 1000
            const timer = Math.floor(expiry - today)
            
            
            return timer
        }
        return 0
    }

    return (
        <UsuarioContext.Provider value={{nome, setNome, password, setPassword, getTimer}} >
            {children}
        </UsuarioContext.Provider>
    )
}

interface Props {
  children: ReactNode
}

interface UsuarioContext {
  nome: string,
  setNome: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  getTimer: ()=>number
}

interface Ijwt {
  exp:number,
  iat:number
}