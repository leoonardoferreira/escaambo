import React from 'react';
import { AppMainContainer } from './styles';

import Header from '../../components/Header';
import ProfileCard from '../../components/ProfileCard';


function AppMain() {
    return (
        <AppMainContainer>
            <Header />
            <div className="categories">
                <h2>O que você quer aprender?</h2>
                <ul>
                    <li>Inglês</li>
                    <li>Espanhol</li>
                    <li>Matemática</li>
                    <li>Português</li>
                    <li>Arte</li>
                    <li>Design</li>
                    <li>Programação</li>
                    <li>Violão</li>
                    <li>Piano</li>
                    <li>Canto</li>
                    <li>Guitarra</li>
                    <li>Surfe</li>
                    <li>Dança</li>
                    <li>Pilates</li>
                </ul>
            </div>
            <main>
                <div className="container">
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                </div>
            </main>
            <footer>
                <p>escaambo.</p>
            </footer>
        </AppMainContainer>
    )
}

export default AppMain;