import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1em 0;
`;

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0 1em;
    &:hover{
        text-decoration: underline;
    }
`;

function NavBar(){
    return(
        <NavBarContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/usuarios">Usuários</StyledLink>
            <StyledLink to="/cadastro">Cadastro</StyledLink>
        </NavBarContainer>
    );
}

export default NavBar;