import React from "react";
import { ProfileContainer } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import fotoDePerfil from '../../assets/foto-de-perfil.png'

function Profile() {
    return(
        <ProfileContainer>
            <Header />
            <main>
                <div className="headline">
                    <img src={fotoDePerfil} alt=""/>
                    <div className="h1">
                        <h1>Leonardo Ferreira</h1>
                        <button>Editar perfil</button>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae ultricies eget, tempor sit amet ante. Donec eu libero sit amet quam egestas semper. Quisque sed dapibus nisl. Nunc eget tortor in tellus interdum fringilla. Donec rutrum congue leo eget malesuada. Praesent laoreet malesuada cursus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                </div>
                <div className="categories">
                    <h2>O que eu posso te ensinar</h2>
                    <ul>
                        <li>Inglês</li>
                        <li>Espanhol</li>
                        <li>Matemática</li>
                        <li>Português</li>
                        <li>Arte</li>
                        <li>Design</li>
                    </ul>
                </div>
                <div className="images">
                    <img alt=""/>
                    <img alt=""/>
                    <img alt=""/>
                </div>
                <div className="buttons">
                    <button>Deletar conta</button>
                    <button>Agendar aula</button>
                </div>
            </main>
            <Footer />
        </ProfileContainer>
    );
}

export default Profile;