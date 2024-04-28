import React from "react";
import styled from "styled-components";

import logo from '../assets/logo-baby-blue.svg';
import iconInstagram from '../assets/logo-instagram.svg';

const FooterContainer = styled.footer`
    background-color: var(--dark-blue);
    width: 100%;

    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;

    color: var(--text-white);


    a {
        display: flex; 
        margin-bottom: 1rem;
        
        color: var(--text-white);
        font-weight: bold;
        
    }

    img.logo {
        display: inline;
        margin-bottom: 1rem;
        max-width: 7.5rem;
        fill: var(--baby-blue);
    }

    p {
        margin-bottom: 1rem;
    }

    p a {
        color: var(--baby-blue);
    }

    img {
        fill: aqua;
    }
`;

function Footer() {
    return(
        <FooterContainer>
                <a href="#">
                    <p>Voltar ao topo</p> 
                </a>
                
                <img className="logo" src={logo} alt=""/>

                <p>Contate-nos via e-mail para esclarecer dúvidas: <a href="mailto:helloskambee@gmail.com">helloskamboo@gmail.com</a></p>

                <img src={iconInstagram} alt="Ícone do Instagram"/>
                    
        </FooterContainer>
    )
}

export default Footer;