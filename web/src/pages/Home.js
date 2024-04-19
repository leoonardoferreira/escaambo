import React from "react";
import styled from "styled-components";

import logo from '../assets/logo.svg';
import illustrationStudying from '../assets/illustration-studying.svg';
import iconProfileOk from '../assets/icon-profile-ok.svg';
import iconLocation from '../assets/icon-location.svg';
import iconVoucher from '../assets/icon-voucher.svg';
import iconSkammboPoints from '../assets/icon-skamboo-points.svg';
import iconInstagram from '../assets/logo-instagram.svg';


const HomeContainer = styled.div``;

function Home() {
    return(
        <HomeContainer>
            <header>
                <a href="login.html">Cadastre-se</a>
                <div class="headline">
                    <h1><span>aprenda</span> algo novo com <span>pessoas reais</span> de forma <span>gratuita</span></h1>
                    <img className="logo" src={logo} alt=""/>
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
                <img src={illustrationStudying} alt=""/>
                <ul>
                    <li>
                        <img src={iconProfileOk} alt=""/>
                        <p>Faça seu cadastro</p>
                    </li>
                    <li>
                        <img src={iconLocation} alt=""/>

                        <p>Encontre alguém que ensine algo do seu interesse</p>
                    </li>
                    <li>
                        <img src={iconVoucher} alt=""/>
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
            <footer>
                <a href="#">
                    <p>Voltar ao topo</p> 
                </a>
                
                <img class="logo" src={logo} alt=""/>

                <p>Contate-nos via e-mail para esclarecer dúvidas: <a href="mailto:helloskambee@gmail.com">helloskamboo@gmail.com</a></p>

                <img src={iconInstagram} alt=""/>
                    
            </footer>
        </HomeContainer>
    
    );
}

export default Home;