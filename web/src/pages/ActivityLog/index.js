import React from "react";
import { ActivityLogContainer } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function ActivityLog() {
    return (
        <ActivityLogContainer>
            <Header />
            <main>
                <ul className="switch">
                    <li>Aprender</li>
                    <li>Ensinar</li>
                </ul>
                <div className="activityCard">
                    <div className="textLeft">
                        <p>Status: Confirmada</p>
                        <p>Assunto: Programação</p>
                        <button>Confirmar</button>
                    </div>
                    <div className="textRight">
                        <p>Professor: Leonardo</p>
                        <p>Data: 15/02/2024</p>
                        <p>Horário: 23:00</p>
                    </div>
                </div>
                <div className="activityCard">
                    <div className="textLeft">
                        <p>Status: Confirmada</p>
                        <p>Assunto: Programação</p>
                        <button>Confirmar</button>
                    </div>
                    <div className="textRight">
                        <p>Professor: Leonardo</p>
                        <p>Data: 15/02/2024</p>
                        <p>Horário: 23:00</p>
                    </div>
                </div>
            </main>
            <Footer />
        </ActivityLogContainer>
    )
}

export default ActivityLog;