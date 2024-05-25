import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpContainer = styled.div`
    margin: auto;
    align-items: center;

    h1 {
        color: var(--text-black);
        font-size: 1.25rem;
        margin-bottom: 4rem;
    }

    label {
        margin-bottom: 1rem;
        display: block;
    }

    input {
        border-radius: 15px;
        border: none;
        background-color: var(--purple);
        color: white;
        
        width: 100%;
        padding: 1.25rem;
        margin-bottom: 3rem;
        
    }

    input::placeholder {
        color: var(--grey);
        font-weight: 500;
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
    }

    textarea {
        border-radius: 15px;
        border: none;
        background-color: var(--purple);
        color: white;
        
        width: 100%;
        padding: 1.25rem;
        margin-bottom: 3rem;
        resize: none;
    }

    textarea::placeholder {
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
        
        background-color: #80655B;

        color: white;
        transition: all .25s ease;
    }

    button:hover {
        cursor: pointer;
        background-color: var(--shock-pink);
    }

    a {
        color: var(--dark-blue);
        font-weight: bold;
    } 
`;

export const Content = styled.section`
    display: flex;
    flex-direction: row;
    align-item: flex-start;
    margin: 0 auto;
    gap:20px;
    margin-bottom:20px;
    border-radius: 20px;

`

export const StyledLink = styled(Link)`
    display: block;
    color: #666;

    font-weight: 600;

    transition: .5s all;

    margin-bottom: 1rem;
    &:hover {
        color: #003335;
    }
`;