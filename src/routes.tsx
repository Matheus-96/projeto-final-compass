import { UsuarioProvider } from 'common/context/Usuario';
import Homepage from 'pages/Homepage';
import Login from 'pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main className='container'>

            <Router>
                <UsuarioProvider>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/home' element={<Homepage />} />
                    </Routes>
                </UsuarioProvider>
            </Router>
        </main>
    );
}