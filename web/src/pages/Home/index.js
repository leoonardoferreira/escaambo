import React from "react";
import styled from "styled-components";
import { HomeContainer } from "./styles";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

import logo from '../../assets/logo.svg';
import illustrationStudying from '../../assets/illustration-studying.svg';
import iconProfileOk from '../../assets/icon-profile-ok.svg';
import iconLocation from '../../assets/icon-location.svg';
import iconVoucher from '../../assets/icon-voucher.svg';
import iconSkammboPoints from '../../assets/icon-skamboo-points.svg';

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

function Home() {
    return(
        <HomeContainer>
            <header>
                <StyledLink to="/login">Cadastre-se</StyledLink>
                <div className="headline">
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
                        Tem alguma habilidade que as outras pessoas gostariam de aprender? <span className="highlight">Ensine e, em troca</span>, você pode também ter aulas em assuntos diversos.
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
                        <p>Ganhe Skammbo points lecionando para outras pessoas.</p>
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
                           

                            {/* <div className="content-wrapper">
                                <img src ="img/icon-reforco-escolar.svg"/>
                                <h4> Esforço escolar</h4>
                            </div> */}
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
                <a className="register" href="login.html">Comece por aqui, faça seu cadastro</a>
            </section>
            <Footer></Footer>
        </HomeContainer>
    
    );
}

export default Home;