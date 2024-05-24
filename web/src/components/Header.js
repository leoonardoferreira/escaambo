import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import logoSmall from '../assets/logo-small.svg';
import iconActivities from '../assets/icon-atividades.svg';
import iconProfile from '../assets/icon-profile.svg';
import iconHome from '../assets/icon-home.svg';

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

    nav ul {
        display: flex;
        gap: 1rem;
    }
    
    nav li {
        font-size: clamp(.5rem, .5rem + 1vw, 1rem);
        text-align: center;
    }
    
    li img {
        width: clamp(1rem, 1rem + 1vw, 2rem);
    }
`;

const StyledLink = styled(Link)`
    font-weight: bold;
    transition: 1s all ease;
    &:hover{
        text-decoration: underline;
    }
`;

function Header() {
    return(
        <HeaderContainer>
            <img src={logoSmall} alt="" width="300px" height="75px"/>
            <nav>
                <ul>
                    <li>
                        <StyledLink to='/'>    
                            <img src={iconHome} alt=""/>
                            <p>Home</p>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/app'>
                            <img src={iconProfile} alt=""/>
                            <p>Usuários</p>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/cadastro'>
                            <img src={iconActivities} alt=""/>
                            <p>Cadastro</p>
                        </StyledLink>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}

export default Header;