import { UsuarioProvider } from 'common/context/Usuario';
import Cadastro from 'pages/Cadastro';
import Homepage from 'pages/Homepage';
import Login from 'pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <Router>
            <UsuarioProvider>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<Homepage />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                </Routes>
            </UsuarioProvider>
        </Router>
    );
}