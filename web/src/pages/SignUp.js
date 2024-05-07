import React from "react";
import styled from "styled-components";

const SignUpContainer = styled.div`
    display: grid;
    place-items: center;
    
    height: 100vh;
    
    .signup {
        max-width: 28rem;
        align-items: center;
        
        border-radius: 20px;
        padding: 2rem 1.5rem;
        
        border: .5px var(--grey) solid;
        
        transition: all .25s;
        
        box-shadow: 0px 3px 7px 0 var(--grey);
    }

    h1 {
        color: var(--text-black);
        font-size: 1.25rem;
        margin-bottom: 4rem;
    }

    input {
        border-radius: 15px;
        border: none;
        
        width: 100%;
        padding: 1.25rem;
        margin-bottom: 3rem;
        
        border: 1px solid var(--grey);
        
    }

    input::placeholder {
        color: var(--grey);
        font-weight: 500;
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
    }

    button {
        width: 100%;
        padding: 1rem 0;
        margin-bottom: 1.5rem;
        
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        
        border: 0;
        
        border-radius: 10px;
        
        background-color: #00ec99;
    }

    button:hover {
        cursor: pointer;
    }

    a {
        color: var(--text-black);
        font-weight: bold;
    }
`;

function SignUp() {
    return(
        <SignUpContainer>
            <div className="signup">
                <h1>Cadastre-se</h1>
                <input class="email" type="email" aria-label="E-mail" placeholder="E-mail"/>
                <input type="password" aria-label="Senha" placeholder="Senha"/>    
                <button type="submit" value="Entrar">Entrar</button>
                <a href="#">Já tem uma conta? Entre aqui</a>

            </div>
        </SignUpContainer>
    )
}

export default SignUp;