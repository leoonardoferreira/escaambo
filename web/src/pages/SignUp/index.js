import React, { useState } from "react";
import { SignUpContainer, Content, StyledLink } from "./styles";
import Form from "../../components/Form";
import UsuarioList from '../../components/UsuarioList'
import Header from "../../components/Header";


function SignUp() {
    const [refresh, setRefresh] = useState(false)
 
    return(
        <SignUpContainer>
            <Header/>
            <Content>
                <div className="signup">
                    <h1>Cadastre-se</h1>
                    
                    <Form setRefresh={setRefresh}/>

                    <h1>Usuários já cadastrados</h1>
                    <UsuarioList refresh={refresh} setRefresh={setRefresh}/>
                </div>
            </Content>
        
            <StyledLink to="/login">Já tem uma conta? Entre aqui</StyledLink>
        </SignUpContainer>
       
    )
}

export default SignUp;