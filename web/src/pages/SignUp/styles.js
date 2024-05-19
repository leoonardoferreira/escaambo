import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpContainer = styled.div`
   max-width: 1000px;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .signup {
        max-width: 28rem;
        align-items: center;
        
        border-radius: 20px;
        padding: 2rem 1.5rem;
        
        border: .5px var(--grey) solid;
        
        transition: all .25s;
        
        box-shadow: 0px 3px 7px 0 var(--grey);
    }

    h1 {
        color: var(--text-black);
        font-size: 1.25rem;
        margin-bottom: 4rem;
    }

    input {
        border-radius: 15px;
        border: none;
        
        width: 100%;
        padding: 1.25rem;
        margin-bottom: 3rem;
        
        border: 1px solid var(--grey);
        
    }

    input::placeholder {
        color: var(--grey);
        font-weight: 500;
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
    }

    button {
        width: 100%;
        padding: 1rem 0;
        margin-bottom: 1.5rem;
        
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        
        border: 0;
        
        border-radius: 10px;
        
        background-color: #00ec99;
    }

    button:hover {
        cursor: pointer;
    }

    a {
        color: var(--text-black);
        font-weight: bold;
    } 
`;

export const Content = styled.section`
    display: flex;
    flex-direction: row;
    align-item: flex-start;
    width: 50%;
    gap:20px;
    margin-bottom:20px;
    background-color: FFEFD5;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`

export const StyledLink = styled(Link)`
    display: block;
    color: var(--dark-aqua-green);

    font-weight: 600;

    transition: .5s all;

    margin-bottom: 1rem;
    &:hover {
        color: #003335;
    }
`;