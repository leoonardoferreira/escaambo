import React, { useState } from "react";
import { SignUpContainer, Content } from "./styles";
import Form from "../../components/Form";
import UsuarioList from '../../components/UsuarioList'
import Header from "../../components/Header";


function SignUp() {
    const [refresh, setRefresh] = useState(false)
 
    return(
        <SignUpContainer>
            <Header/>
            <Content>
                <Form setRefresh={setRefresh}/>

                {/* <h1>Usuários já cadastrados</h1>
                <UsuarioList refresh={refresh} setRefresh={setRefresh}/> */}
            </Content>
            <footer>
                <p>escaambo.</p>
            </footer>
        </SignUpContainer>
       
    )
}

export default SignUp;