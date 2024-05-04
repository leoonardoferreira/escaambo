import React from "react";
import { LoginContainer } from "./styles";

function Login() {
    return(
        <LoginContainer>
            <div className="login">
                <h1>Login</h1>
                <input class="email" type="email" aria-label="E-mail" placeholder="E-mail"/>
                <input type="password" aria-label="Senha" placeholder="Senha"/>    
                <button type="submit" value="Entrar">Entrar</button>
                <a href="#">Esqueci minha senha</a>
            </div>
        </LoginContainer>
    )
}

export default Login;