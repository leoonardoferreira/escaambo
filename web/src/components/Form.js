import React, {useState, useRef} from 'react';

import { api } from '../services/api';

function Form() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [foto, setFoto] = useState(null)
    const [fileInputKey, setFileInputKey] = useState(Date.now())

    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('nome', nome)
        formData.append('email', email)
        formData.append('foto', foto)

        try {
            await api.post('/usuarios', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            setNome('')
            setEmail('')
            setFoto(null)
            setFileInputKey(Date.now())

        } catch (error) {
            console.error('Erro ao enviar o personagem', error)
        }
    }

    const handleFotoChange = (event) =>{
        setFoto(event.target.files[0])
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
            type="file"
            key={fileInputKey}
            onChange={handleFotoChange}
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