import React from "react";
import styled from "styled-components";

import logo from '../assets/logo.svg';
import iconInstagram from '../assets/logo-instagram.svg';

const FooterContainer = styled.footer`
    background-color: var(--dark-blue);
    width: 100%;

    border-top-left-radius: clamp(1.5rem, 1.5rem + 1vw, 2.5rem);
    border-top-right-radius: clamp(1.5rem, 1.5rem + 1vw, 2.5rem);

    color: var(--text-white);


    /* footer > a {
        display: flex; 
        margin-bottom: 1rem;
        
        color: var(--text-white);
        font-weight: bold;
        
    }

    footer img.logo {
        display: inline;
        margin-bottom: 1rem;
        max-width: 7.5rem;
    }

    footer p {
        margin-bottom: 1rem;
    }

    footer p a {
        color: var(--baby-blue);
    }

    footer img {
        display: block;
        margin: 0 auto;
    } */
`;

function Footer() {
    return(
        <FooterContainer>
                <a href="#">
                    <p>Voltar ao topo</p> 
                </a>
                
                <img src={logo} alt=""/>

                <p>Contate-nos via e-mail para esclarecer dúvidas: <a href="mailto:helloskambee@gmail.com">helloskamboo@gmail.com</a></p>

                <img src={iconInstagram} alt=""/>
                    
        </FooterContainer>
    )
}

export default Footer;