import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'


const CardWrapper = styled.div`
    padding: 1rem;

    background-color: var(--orange);
    border-radius: 1rem;

    div.user-info {
        margin: auto;
    }

    div.price {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-top: 1rem;

        &>img {
            max-width: 1.5rem;
        }
    }
`; 

const StyledImage = styled.img`
    width: clamp(3rem, 4rem + 1vw, 6rem);
    border-radius: 50%;
    object-fit: fill;
`;

const Button = styled.button`
    width: 50%;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #394c73;
    }
`

function ProfileCard({usuarios}) {
    const navigate = useNavigate()

    const handleLearnMore = (id) =>{
        navigate(`/perfil/${id}`)
    }

    return(
        <>
            {usuarios.map((usuario)=>(
                <CardWrapper key={usuario.id}>
                    <StyledImage src={`http://localhost:3333/uploads/${usuario.foto}`} alt={usuario.nome} />
                    <h3>{usuario.nome}</h3>
                    <Button onClick={() => handleLearnMore(usuario.id)}>Ver mais</Button>
                </CardWrapper>
                ))}
        </>
    )
}

export default ProfileCard;