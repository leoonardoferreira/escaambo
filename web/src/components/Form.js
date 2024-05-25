import React, {useState, useRef} from 'react';

import { api } from '../services/api';
import styled from 'styled-components';

const FormContainer = styled.form`
    background: var(--purple);
    width: 100%;
    border-radius: 20px;
    padding: 2rem;
    max-width: 46.875rem;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    color: white;
`;

function Form() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [texto, setTexto] = useState('')
    const [foto, setFoto] = useState(null)
    const [fileInputKey, setFileInputKey] = useState(Date.now())
    
    const formRef = useRef(null);
    const MAX_DESC_LENGTH = 500

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('nome', nome)
        formData.append('email', email)
        formData.append('texto', texto)
        formData.append('foto', foto)

        try {
            await api.post('/usuarios', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            setNome('')
            setEmail('')
            setTexto('')
            setFoto(null)
            setFileInputKey(Date.now())

        } catch (error) {
            console.error('Erro ao enviar o personagem', error)
        }
    }

    const handleFotoChange = (event) =>{
        setFoto(event.target.files[0])
    }

    const handleTextoChange = (e) => {
        const texto = e.target.value
        if(texto.length <= MAX_DESC_LENGTH){
            setTexto(texto)
        }
    }

    return(
        <FormContainer ref={formRef}>
            <h1>Faça seu cadastro como professor aqui</h1>
            <label for='nome'>Nome*</label>
            <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="João"
            required
            />
            <br/><br/>
            <label for='email'>E-mail*</label>
            <input
            id
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="joao@email.com"
            required
            />
            <br/><br/>
            <label for='texto'>Descreva suas habilidades como professor</label>
            <textarea
            id='texto'
            value={texto}
            onChange={handleTextoChange}
            placeholder="Lorem ipsum..."
            required
            />
            <label>Insira uma foto de perfil*</label>
            <input
            type="file"
            key={fileInputKey}
            onChange={handleFotoChange}
            required
            />
            <br/><br/>
            <button onClick={handleSubmit}>Cadastrar</button>
        </FormContainer>
    )
}

export default Form