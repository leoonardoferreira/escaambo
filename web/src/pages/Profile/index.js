import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

import { ProfileContainer } from "./styles";

import Header from "../../components/Header";

import EditUsuarioModal from '../../components/EditUsuarioModal'

function Profile({refresh, setRefresh}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);
    const [editUsuario, setEditUsuario] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3333/api/usuarios/${id}`)
            navigate('/app')
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

    useEffect(() => {
        const fetchUsuario = async () => {
        try {
            const response = await axios.get(`http://localhost:3333/api/usuarios/${id}`);
            setUsuario(response.data);
        } catch (error) {
            console.error('Erro ao buscar usuário', error);
        }
        };

        fetchUsuario();
    }, [id]);

    if (!usuario) {
        return <div>Carregando...</div>;
    }

    return(
        <ProfileContainer>
            <Header />
            <main>
                <div className="headline">
                    <img src={`http://localhost:3333/uploads/${usuario.foto}`}alt={usuario.nome}/>
                    <div className="h1">
                        <h1>{usuario.nome}</h1>
                        <button onClick={() => handleEdit(usuario.id)}>Editar perfil</button>
                    </div>
                </div>
                <div className="categories">
                    <h2>O que eu posso te ensinar</h2>
                    <p>
                        {usuario.texto}
                    </p>
                </div>
                <div className="buttons">
                    <button onClick={() => handleDelete(usuario.id)}>Deletar conta</button>
                </div>
            </main>
            <footer>
                <p>escaambo.</p>
            </footer>
            {editUsuario && (
                <EditUsuarioModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    usuario={editUsuario}
                    setRefresh={setRefresh}
                    setEditUsuario={setEditUsuario}
                />
            )}
        </ProfileContainer>
    );
}

export default Profile;