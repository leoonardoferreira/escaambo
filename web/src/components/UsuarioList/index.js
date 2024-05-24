import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditUsuarioModal from '../EditUsuarioModal'
import {
    ListContainer,
    UsuarioCard,
    UsuarioImage,
    UsuarioInfo,
    UsuarioNome,
    UsuarioDescricao,
    Actions,
    ActionButton
} from './styles'

function UsuarioList({refresh, setRefresh}) {
    const [usuarios, setUsuarios] = useState([])
    const [editUsuario, setEditUsuario] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // useEffect(() => {
    //     fetchUsuarios()
    // }, [refresh])

    const fetchUsuarios = async () => {
        try {
            const response = await axios.get('http://localhost:3333/api/usuarios')
            setUsuarios(response.data)
        } catch (error) {
            console.error('erro ao buscar usuarios', error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3333/api/usuarios/${id}`)
            fetchUsuarios()
        } catch (error) {
            console.error('Erro ao deletar o usuario', error)
        }
    }

    const handleEdit = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3333/api/usuarios/${id}`)
            setEditUsuario(response.data)
            setIsModalOpen(true)
        } catch (error) {
            console.error('Erro ao buscar o usuario para edição', error)
        }
    }

    return (
        <ListContainer>
            {usuarios.map((usuario) => (
                <UsuarioCard key={usuario.id}>
                    <UsuarioImage src={`http://localhost:3333/uploads/${usuario.foto}`} alt={usuario.nome} style={{ width: '100px' }} />
                    <UsuarioInfo>
                        <UsuarioNome>{usuario.nome}</UsuarioNome>
                        <UsuarioDescricao>{usuario.texto}</UsuarioDescricao>
                        <Actions>
                            <ActionButton onClick={() => handleDelete(usuario.id)}>Deletar</ActionButton>
                            <ActionButton onClick={() => handleEdit(usuario.id)}>Editar</ActionButton>
                        </Actions>
                    </UsuarioInfo>
                </UsuarioCard>
            ))}
            {editUsuario && (
                <EditUsuarioModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    usuario={editUsuario}
                    setRefresh={setRefresh}
                    setEditUsuario={setEditUsuario}
                />
            )}
        </ListContainer>
    )
}
export default UsuarioList;