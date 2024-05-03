import React from 'react';
import styled from 'styled-components';

import logoSmall from '../assets/logo-small.svg';
import iconActivities from '../assets/icon-atividades.svg';
import iconProfile from '../assets/icon-profile.svg';
import iconPoints from '../assets/icone-pontos.svg';

import fotoDePerfil from '../assets/foto-de-perfil.png';

const AppMainContainer = styled.div`
    header, div.categories, div.container {
        padding: 0 1rem;
    }

    header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        margin-bottom: 2rem;
        padding: clamp(0px, 0px + .5vw, 1rem) 1;
    }

    nav {
        display: flex;
        gap: clamp(0rem, 0.1rem + 1vw, 1rem);
        
    }

    nav li {
        font-size: clamp(.5rem, .5rem + 1vw, 1rem);
        text-align: center;
    }

    li img {
        width: clamp(1rem, 1rem + 1vw, 2rem);
    }

    div.categories {
        margin: 0 auto 2rem;
        max-width: fit-content;
    }

    h2 {
        margin-bottom: 1rem;
    }

    div.categories>ul {
        display: flex;
        gap: 1rem;
        overflow-x: scroll;
        max-width: 53rem;
    }

    div.categories>ul>li {
        border-radius: 2.5rem;
        padding: .5rem .75rem;
        border: 1px solid #ccc;
        text-wrap: nowrap;
    }

    div.categories>ul>li:hover {
        cursor: pointer;
    }

    div.categories>ul>li:checked {
        background-color: var(--dark-aqua-green);
        color: var(--text-white);
    }

    main {
        margin-bottom: 2rem;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: space-between;
        max-width: 100rem;

        margin: 0 auto;
        overflow-y: scroll;
        max-height: 70vh;
        gap: 1rem;
        padding: 0 1rem;
    }


    div.card {
        padding: 1rem;

        background-color: var(--orange);
        border-radius: 1rem;
    }

    .card img {
        width: clamp(3rem, 4rem + 1vw, 6rem);
    }

    div.user-info {
        margin: auto;
    }

    div.price {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-top: 1rem;

        &>img {
            max-width: 1.5rem;
        }
    }
    
    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: var(--text-white);

        border-top: 1px solid #ccc; 
        text-align: center;
    }

    @media (max-width: 375px) {
        .container {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (min-width: 768px) {
        .container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .container {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (min-width: 1440px) {
        .container {
            grid-template-columns: repeat(5, 1fr);
        }
    }
`;

function AppMain() {
    return (
        <AppMainContainer>
            <header>
                <img src={logoSmall} alt="" width="300px" height="75px"/>
                <nav>
                    <ul>
                        <li>
                            <img src={iconActivities} alt=""/>
                            <p>Registro de atividades</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src={iconProfile} alt=""/>
                            <p>Meu perfil</p>
                        </li>
                    </ul>
                </nav>
            </header>
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
                    <div className="card">
                        <img src={fotoDePerfil} alt="" className="pfp"/>
                        <div className="user-info">
                            <h3>Leonardo</h3>
                            <p>Professor de inglês</p>
                            <div className="price">
                                <img src={iconPoints} alt="" className="icon-points"/>
                                <p><b>17</b> pontos por hora</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={fotoDePerfil} alt="" className="pfp"/>
                        <div className="user-info">
                            <h3>Leonardo</h3>
                            <p>Professor de inglês</p>
                            <div className="price">
                                <img src={iconPoints} alt="" className="icon-points"/>
                                <p><b>17</b> pontos por hora</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={fotoDePerfil} alt="" className="pfp"/>
                        <div className="user-info">
                            <h3>Leonardo</h3>
                            <p>Professor de inglês</p>
                            <div className="price">
                                <img src={iconPoints} alt="" className="icon-points"/>
                                <p><b>17</b> pontos por hora</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={fotoDePerfil} alt="" className="pfp"/>
                        <div className="user-info">
                            <h3>Leonardo</h3>
                            <p>Professor de inglês</p>
                            <div className="price">
                                <img src={iconPoints} alt="" className="icon-points"/>
                                <p><b>17</b> pontos por hora</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={fotoDePerfil} alt="" className="pfp"/>
                        <div className="user-info">
                            <h3>Leonardo</h3>
                            <p>Professor de inglês</p>
                            <div className="price">
                                <img src={iconPoints} alt="" className="icon-points"/>
                                <p><b>17</b> pontos por hora</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <p>escaambo.</p>
            </footer>
        </AppMainContainer>
    )
}

export default AppMain;