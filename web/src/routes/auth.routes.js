import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

export function AuthRoutes() {
    const user = localStorage.getItem('@skammbo:user');

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />

            { !user && <Route path="*" element={<Navigate to="/"/>} /> }
        </Routes>
    )
}