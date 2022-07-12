import { createContext, ReactNode, useState } from 'react';

const DEFAULT_VALUE = {
    nome: '',
    password: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setNome: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setPassword: () => {}
}
export const UsuarioContext = createContext<UsuarioContext>(DEFAULT_VALUE)
UsuarioContext.displayName = 'Usuario'

export const UsuarioProvider = ({children}: Props) => {
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')
    return (
        <UsuarioContext.Provider value={{nome, setNome, password, setPassword}} >
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
	setPassword: React.Dispatch<React.SetStateAction<string>>
}