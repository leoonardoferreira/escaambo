import { Routes, Route, Navigate } from 'react-router-dom';

import AppMain from '../pages/AppMain';
import Profile from '../pages/Profile';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/app" element={<AppMain/>}/>
            <Route path="/perfil" element={<Profile />} />

            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    )
}