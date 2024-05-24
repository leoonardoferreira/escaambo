import React from "react";
import { LoginContainer } from "./styles";
import logo from '../../assets/logo.svg';

import Footer from "../../components/Footer";


function Login() {
    return(
        <LoginContainer>
            {/* <img className="logo" src={logo} alt="Logo da Skammbo."/> */}
           
            <main> 
                <div className="login">
                    
                    <h1>Login</h1>
                    <input className="email" type="email" aria-label="E-mail" placeholder="E-mail"/>
                    <input type="password" aria-label="Senha" placeholder="Senha"/>    
                    <button type="submit" value="Entrar">Entrar</button>
                </div>
            </main>
            <Footer />
        </LoginContainer>
    )
}

export default Login;