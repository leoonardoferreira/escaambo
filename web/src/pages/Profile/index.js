import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

import { ProfileContainer } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Profile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);

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
                        <button>Editar perfil</button>
                    </div>
                    {/* <p>
                        {usuario.texto}
                    </p> */}
                </div>
                <div className="categories">
                    <h2>O que eu posso te ensinar</h2>
                    <ul>
                        <li>Inglês</li>
                        <li>Espanhol</li>
                        <li>Matemática</li>
                        <li>Português</li>
                        <li>Arte</li>
                        <li>Design</li>
                    </ul>
                </div>
                <div className="images">
                    <img alt=""/>
                    <img alt=""/>
                    <img alt=""/>
                </div>
                <div className="buttons">
                    <button>Deletar conta</button>
                </div>
            </main>
            <Footer />
        </ProfileContainer>
    );
}

export default Profile;