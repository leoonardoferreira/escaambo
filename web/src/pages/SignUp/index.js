import React, { useState } from "react";
import { SignUpContainer, Content, StyledLink } from "./styles";
import Form from "../../components/Form";

function SignUp() {
    const setRefresh = useState(false)
 
    return(
        <SignUpContainer>
            <Content>
                <div className="signup">
                    <h1>Cadastre-se</h1>
                    
                    <Form setRefresh={setRefresh}/>
                </div>
            </Content>
        
            <StyledLink to="/login">Já tem uma conta? Entre aqui</StyledLink>
        </SignUpContainer>
       
    )
}

export default SignUp;