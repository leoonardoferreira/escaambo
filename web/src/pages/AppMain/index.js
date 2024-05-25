import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { AppMainContainer } from './styles';

import Header from '../../components/Header';
import ProfileCard from '../../components/ProfileCard';


function AppMain() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await api.get('/usuarios')
                setUsuarios(response.data)
            } catch(error) {
                console.error('Erro ao buscar o personagem', error)
            }
        }

        fetchUsuarios()
    }, [])

    return (
        <AppMainContainer>
            <Header />
            <div className="categories">
                <h2>O que você quer aprender?</h2>
                <p>Escolha um(a) professor(a) para ver mais detalhes</p>
            </div>
            <main>
                <div className="container">
                    <ProfileCard usuarios={usuarios}/>
                </div>
            </main>
            <footer>
                <p>escaambo.</p>
            </footer>

            
        </AppMainContainer>
    )
}

export default AppMain;