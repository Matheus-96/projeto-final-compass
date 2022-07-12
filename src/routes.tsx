import Homepage from 'pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

export default function AppRouter() {
    return (
        <main className='container'>

            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<Homepage />} />
                </Routes>
            </Router>
        </main>
    );
}