import React from 'react';
import styled from 'styled-components';

import logoSmall from '../assets/logo-small.svg';
import iconActivities from '../assets/icon-atividades.svg';
import iconProfile from '../assets/icon-profile.svg';

const HeaderContainer = styled.header`
    padding: 0 1rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
    
    margin-bottom: 2rem;
    margin-top: 1rem;
    padding: clamp(0px, 0px + .5vw, 1rem) 1;

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
`;

function Header() {
    return(
        <HeaderContainer>
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
        </HeaderContainer>
    )
}

export default Header;