import React from "react";
import styled from "styled-components";

import fotoDePerfil from '../assets/foto-de-perfil.png';
import iconPoints from '../assets/icone-pontos.svg';

const CardWrapper = styled.div`
    padding: 1rem;

    background-color: var(--orange);
    border-radius: 1rem;

    img {
        width: clamp(3rem, 4rem + 1vw, 6rem);
    }

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


function ProfileCard() {
    return(
        <CardWrapper>
            <img src={fotoDePerfil} alt="" className="pfp"/>
            <div className="user-info">
                <h3>Leonardo</h3>
                <p>Professor de inglês</p>
                <div className="price">
                    <img src={iconPoints} alt="" className="icon-points"/>
                    <p><b>17</b> pontos por hora</p>
                </div>
            </div>
        </CardWrapper>
    )
}

export default ProfileCard;