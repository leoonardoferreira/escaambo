import React from "react";
import styled from "styled-components";

function Login() {
    return(
        <>
            <h1>Login</h1>
                <input class="email" type="email" aria-label="E-mail" placeholder="E-mail"/>
                <input type="password" aria-label="Senha" placeholder="Senha"/>    
                <button type="submit" value="Entrar">Entrar</button>
                <a href="#">Esqueci minha senha</a>
        </>
    )
}

export default Login;