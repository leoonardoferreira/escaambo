import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AppMain from './pages/AppMain';
import ActivityLog from './pages/ActivityLog';
import Profile from './pages/Profile';
import Scheduling from './pages/Scheduling';


import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles></GlobalStyles>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/app" element={<AppMain/>}/>
        <Route path="/atividades" element={<ActivityLog />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/agendamento" element={<Scheduling />} />
      </Routes>
    </Router>
  );
}

export default App;
