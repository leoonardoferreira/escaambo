import React, {useState, useEffect} from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import styled from 'styled-components'

Modal.setAppElement('#root')

const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
const ModalHeader = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`

const Button = styled.button`
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background: #007bff;
    color: #fff;
    cursor: pointer;
    &:hover{
        background: #394c73;
    }
`
const CancelButton = styled(Button)`
    background: #ccc;
    &:hover{
        background: #999;
    }
`
// const CharacterCount = styled.div`
//     text-align: right;
//     margin-bottom: 10px;
//     color: #666;
// `
function EditUsuarioModal({isOpen, onRequestClose, usuario, setRefresh, setEditUsuario}){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [foto, setFoto] = useState(null)

    useEffect(() =>{
        if (usuario){
            setNome(usuario.nome)
            setEmail(usuario.email)
        }
    }, [usuario])

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        if (nome) formData.append('nome', nome)
        if (email) formData.append('email', email)
        if (foto) formData.append('foto', foto)

        try {
            const response = await axios.put(`http://localhost:3333/api/usuarios/${usuario.id}`, formData, {
                headers: {
                    'Content-Type':'multipart/form-data',
                }
            })
            setRefresh((prev) => !prev)
            setEditUsuario(null)
            onRequestClose()

        } catch (error) {
            console.error('Erroa ao atualizar os dados', error)
        }
    }
    const handleImageChange = (event) => {
        setFoto(event.target.files[0])
    }
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Editar Usuario"
            style={{
                content:{
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border: 'none',
                    padding: '0',
                    overflow: 'visible',
                },
                overlay:{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
            }}
        >
            <ModalContent>
                <ModalHeader>Editar usuarios</ModalHeader>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome do Usuario"
                    />
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                        required
                    />
                    <Input
                        type="file"
                        onChange={handleImageChange}
                    />
                    <Button type="submit">Atualizar</Button>
                    <CancelButton type="button" onClick={onRequestClose}>Cancelar</CancelButton>
                </Form>
            </ModalContent>
        </Modal>
    )
}

export default EditUsuarioModal