import React, {useState, useRef} from 'react'
import axios from 'axios'

function Form({fetchPersonagens}){
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState(null)
    const [fileInputKey, setFileInputKey] = useState(Date.now())
    const MAX_DESC_LENGTH = 500
    const formRef = useRef(null)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('nome', nome)
        formData.append('texto', descricao)
        formData.append('foto', imagem)

        try{
            await axios.post('http://localhost:5000/api/personagens', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            setNome('')
            setDescricao('')
            setImagem(null)
            setFileInputKey(Date.now())
            // fetchPersonagens();
        } catch (error){
            console.error('Erro ao enviar o personagem', error)
        }
    }

    const handleImageChange = (event) =>{
        setImagem(event.target.files[0])
    }

    const handleDescricaoChange = (e) => {
        const texto = e.target.value
        if(texto.length <= MAX_DESC_LENGTH){
            setDescricao(texto)
        }
    }

    return(
        <form onSubmit={handleSubmit} ref={formRef}>
            <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do Personagem"
            required
            />
            <br/><br/>
            <textarea
            value={descricao}
            onChange={handleDescricaoChange}
            // onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição do Personagem"
            required
            />
            <div>{MAX_DESC_LENGTH - descricao.length} caracteres restantes</div>
            <br/><br/>
            <input
            type="file"
            key={fileInputKey}
            onChange={handleImageChange}
            required
            />
            <br/><br/>
            <button type="submit">Cadastrar</button>
            <br/><br/>
            <hr/>
            <br/><br/>
        </form>
    )
}

export default Form