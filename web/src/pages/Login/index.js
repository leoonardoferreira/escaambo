import React, { useState } from "react";

// import { useAuth } from "../../hooks/auth";

import { LoginContainer } from "./styles";
import logo from '../../assets/logo.svg';

import Footer from "../../components/Footer";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // function handleLogIn() {
    //     logIn({ email, senha });
    // }

    return(
        <LoginContainer>
            <img className="logo" src={logo} alt="Logo da Skammbo."/>
           
            <main> 
                <div className="login">
                    
                    <h1>Login</h1>
                    <input 
                        className="email" 
                        type="email" 
                        aria-label="E-mail" 
                        placeholder="E-mail" 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        aria-label="Senha" 
                        placeholder="Senha"
                        onChange={e => setSenha(e.target.value)}

                    />    
                    {/* <button onClick={handleLogIn}>Entrar</button> */}
                </div>
            </main>
            <Footer />
        </LoginContainer>
    )
}

export default Login;