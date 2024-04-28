import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

import logo from '../assets/logo.svg';
import illustrationStudying from '../assets/illustration-studying.svg';
import iconProfileOk from '../assets/icon-profile-ok.svg';
import iconLocation from '../assets/icon-location.svg';
import iconVoucher from '../assets/icon-voucher.svg';
import iconSkammboPoints from '../assets/icon-skamboo-points.svg';

const HomeContainer = styled.div`
    header, main, section, footer {
        padding: 1.25rem;
    }


    header {
        
        background-color: var(--aqua-green);

        border-end-start-radius: 2rem;
        border-end-end-radius: 2rem;

        text-align: center;
    }

    header>a {
        display: block;
        color: var(--dark-aqua-green);

        font-weight: 600;

        transition: .5s all;

        margin-bottom: 1rem;
    }

    header>a:hover {
        color: #003335;
    }

    h1 {
        color: var(--dark-aqua-green);
        max-width: 37.5rem;
        font-weight: 900;

        font-size: clamp(2rem, 2rem + 1vw, 6rem);

        margin: 0 auto 2rem;
    }

    h1>span {
        background-color: var(--dark-aqua-green);
        color: var(--aqua-green);
    }

    img.logo {
        max-width: 14rem;
        display: block;
        margin: 0 auto;
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        font-size: clamp(1rem, 1rem + .4vw, 2rem);

        margin-top: 1rem;
    }

    main>* {
        margin: 0 auto;
    }

    h2 {
        color: var(--purple);
        max-width: fit-content;

        margin-bottom: 1rem;
    }

    section {
        text-align: center;
    }

    .highlight {
        background-color: var(--baby-blue);
        font-weight: 500;
    }

    main div.text-left {
        max-width: 23.25rem;

        margin: 0 auto;
    }

    main>img {
        max-width: 14rem;

        margin-bottom: 1rem;
    }

    main ul {
        max-width: 17.5rem;
    }

    main ul li {
        display: flex;
        align-items: center;
        gap: .75rem;

        margin-bottom: 1rem;

        font-size: clamp(1rem, 1rem+.25vw, 2rem);
    }

    div.carousel {
        display: flex;
        overflow-x: scroll;
        gap: 1rem;
    }

    div.carousel-item {
        display: grid;
        place-items: center;

        font-size: clamp(1.5rem, 1.5rem + 1vw, 2rem);

        background-color: var(--orange);
        width: 490px;
        height: 24.5rem;
        flex-shrink: 0;
        border-radius: 20px;
        background-image: url(img/aula-de-ingles.jpeg);
        background-size: contain;
    }

    div.carousel-item img {
        width: clamp(1rem, 1rem + 1vw, 1.5rem);
    }




    a.register {
        text-align: center;
        width: 100%;
        max-width: 37.5rem;
        display: block;
        margin: 0 auto;
        background-color: #88CCF1;
        border-radius: 30px;
        font-size: 1.5rem;
        font-weight: bold;
        padding: .5rem 1rem;
        border: 0;
        color: #2a2a72;
        text-decoration: none;
        margin-bottom: 1rem;
    }

    @keyframes trocarImagens {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            background-image: url('imagem2.jpg'); /* Troca para a segunda imagem */
            opacity: 1;
        }
    }

    @media (min-width: 1024px) {
        header, main, section, footer {
            padding: 3rem 12rem;
        }

        .headline {
            display: flex;
            justify-content: space-between;
        }

        h1 {
            margin-bottom: 0;
        }

        main {
            flex-direction: row;
        }

        main ul {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    @media (min-width: 1440px) {
        header, main, section, footer {
            padding: 3rem 24rem;
        }
    }

    
`;

// const Header = styled.header`
//     padding: 1.25rem;

//     background-color: var(--aqua-green);

//     border-end-start-radius: 2rem;
//     border-end-end-radius: 2rem;

//     text-align: center;

//     & h1 {

//     }
// `

const StyledLink = styled(Link)`
    display: block;
    color: var(--dark-aqua-green);

    font-weight: 600;

    transition: .5s all;

    margin-bottom: 1rem;
    &:hover {
        color: #003335;
    }
`;

// const Title = styled.h1`
//     color: var(--dark-aqua-green);
//     max-width: 37.5rem;
//     font-weight: 900;

//     font-size: clamp(2rem, 2rem + 1vw, 6rem);

//     margin: 0 auto 2rem;
// `;

const TitleHighlight = styled.span`
    background-color: var(--dark-aqua-green);
    color: var(--aqua-green);
`

const ImgLogo = styled.img`
    max-width: 14rem;
    display: block;
    margin: 0 auto;
`

// const Main = styled.main`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     font-size: clamp(1rem, 1rem + .4vw, 2rem);

//     margin-top: 1rem;

//     &>* {
//         margin: 0 auto;
//     }
// `

function Home() {
    return(
        <HomeContainer>
            <header>
                <StyledLink to="/login">Cadastre-se</StyledLink>
                <div>
                    <h1><span>aprenda</span> algo novo com <span>pessoas reais</span> de forma <span>gratuita</span></h1>
                    <img className="logo" src={logo} alt="Logo da Skammbo."/>
                </div>
            </header>
            <main>
                <div className="text-left">
                    <h2>Aprenda algo novo de graça!</h2>
                    <p>
                        Aprender uma habilidade nova com uma pessoa online <span className="highlight">é totalmente gratuito na Skamboo.</span>
                    </p>
                    
                    <p>
                        Encontre uma pessoa que esteja disposta a ensinar o que <span className="highlight">você precisa aprender</span>. Como troca, você também deve ensinar para as outras pessoas.
                    </p>
                    
                    <p>
                        Tem alguma habilidade que as outras pessoas gostariam de aprender? <span class="highlight">Ensine e, em troca</span>, você pode também ter aulas em assuntos diversos.
                    </p>
                </div>
                <img src={illustrationStudying} alt="Ilustração de álguem estudando, lendo um livro laranja"/>
                <ul>
                    <li>
                        <img src={iconProfileOk} alt="Ícone de perfil cadastrado"/>
                        <p>Faça seu cadastro</p>
                    </li>
                    <li>
                        <img src={iconLocation} alt="Ícone de marcação de localização"/>

                        <p>Encontre alguém que ensine algo do seu interesse</p>
                    </li>
                    <li>
                        <img src={iconVoucher} alt="Ícone de voucher, ou Skammbo. Points"/>
                        <p>Para agendar uma aula, você não utiliza dinheiro nenhum. Você utiliza o Skamboo points.</p>
                    </li>
                    <li>
                        <img src={iconSkammboPoints} alt=""/>
                        <p>Ganhe Skamboo points lecionando para outras pessoas.</p>
                    </li>
                </ul>

            </main>
            <section>
                <h2>O que você pode aprender ou ensinar dentro da Skamboo?</h2>
                <div className="carousel">
                    <div className="carousel-item">
                        <div className="content-wrapper">
                            <img src="img/icon-english.svg" alt=""/>
                            <h3>Inglês</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                    </div>
                    <div className="carousel-item">
                        <img src="" alt=""/>
                    </div>
                    <div className="carousel-item"></div>
                    <div className="carousel-item"></div>
                </div>
            </section>
            <section>
                <a class="register" href="login.html">Comece por aqui, faça seu cadastro</a>
            </section>
            <Footer></Footer>
        </HomeContainer>
    
    );
}

export default Home;