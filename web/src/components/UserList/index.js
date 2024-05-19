import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import EditPersonagemModal from './EditPersonagemModal'
import {
    ListContainer,
    PersonagemCard,
    PersonagemImage,
    PersonagemInfo,
    PersonagemNome,
    PersonagemDescricao,
    Actions,
    ActionButton
} from './styles'

function UserList({refresh, setRefresh}) {
    const [personagens, setPersonagens] = useState([])
    const [editPersonagem, setEditPersonagem] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        fetchPersonagens()
    }, [refresh])

    const fetchPersonagens = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/personagens')
            setPersonagens(response.data)
        } catch (error) {
            console.error('erro ao buscar personagens', error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/personagens/${id}`)
            fetchPersonagens()
        } catch (error) {
            console.error('Erro ao deletar o personagem', error)
        }
    }

    const handleEdit = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/personagens/${id}`)
            setEditPersonagem(response.data)
            setIsModalOpen(true)
        } catch (error) {
            console.error('Erro ao buscar o personagem para edição', error)
        }
    }

    return (
        <ListContainer>
            {personagens.map((personagem) => (
                <PersonagemCard key={personagem.id}>
                    <PersonagemImage src={`http://localhost:5000/uploads/${personagem.foto}`} alt={personagem.nome} style={{ width: '100px' }} />
                    <PersonagemInfo>
                        <PersonagemNome>{personagem.nome}</PersonagemNome>
                        <PersonagemDescricao>{personagem.texto}</PersonagemDescricao>
                        <Actions>
                            <ActionButton onClick={() => handleDelete(personagem.id)}>Deletar</ActionButton>
                            <ActionButton onClick={() => handleEdit(personagem.id)}>Editar</ActionButton>
                        </Actions>
                    </PersonagemInfo>
                </PersonagemCard>
            ))}
            {editPersonagem && (
                <EditPersonagemModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    personagem={editPersonagem}
                    setRefresh={setRefresh}
                    setEditPersonagem={setEditPersonagem}
                />
            )}
        </ListContainer>
    )
}
export default UserList;