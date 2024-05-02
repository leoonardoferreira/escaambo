import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
// import SignUp from './pages/SignUp';
import AppMain from './pages/AppMain';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles></GlobalStyles>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/app" element={<AppMain/>}/>
      </Routes>
    </Router>
  );
}

export default App;
