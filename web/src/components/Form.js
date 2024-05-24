import React, {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../services/api';

function Form() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    const formRef = useRef(null);

    function handleSubmit() {
        if(!nome || !email || !senha) {
            return alert('Preencha todos os campos!');
        }

        api.post('/usuarios', { nome, email, senha })
        .then(() => {
            alert('Usuário Cadastrado com sucesso');;
            navigate("/app");
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível cadastrar');
            }
        });
    }

    return(
        <form ref={formRef}>
            <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            required
            />
            <br/><br/>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
            />
            <br/><br/>
            <input
            type="password"
            value={senha}
            // key={fileInputKey}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            required
            />
            <br/><br/>
            <button onClick={handleSubmit}>Cadastrar</button>
            <br/><br/>
            <br/><br/>
        </form>
    )
}

export default Form