import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SchedulingContainer = styled.div`
    max-width: 75rem;
    margin: 0 auto;

    main {
        padding: 0 1rem;
    }

    form {
        max-width: 37.5rem;
        margin: 0 auto 1rem;
    }

    h1 {
        margin-bottom: 1rem;
    }

    .input-wrapper {
        margin-bottom: 1rem;
    }

    label {
        display: block;
        margin-bottom: 1rem;
    }
    
    input {
        display: block;
    }

    textarea {
        background-color: var(--aqua-green);
        border: 0;
        width: 100%;
        max-width: 37.5rem;
        height: 3rem;
        border-radius: 1rem;
        font-size: 1rem;
        padding: 1rem;
        height: fit-content;
        resize: none;
        font-family: sans-serif;
    }

    input[type="date"] {
        padding: 1rem;
        border: 0;
        border-radius: 1rem;
        font-family: Arial, sans-serif;
        font-size: 14px;
        background-color: var(--orange);
    }

    input[type="time"] {
        background-color: var(--baby-blue);
        padding: 1rem;
        border: 0;
        border-radius: 1rem;
        font-family: Arial, sans-serif;
        font-size: 14px;
    }

    button {
        background-color: #ebd2be;
        color: var(--text-black);
        font-weight: 600;
        padding: 1rem;
        display: block;
        margin-left: auto;
        border-radius: 2rem;
        border: 0;
    }
`;

function Scheduling() {
    return (
        <SchedulingContainer>
            <Header />
            <main>
                <form>
                    <h1>Agendar uma aula</h1>
                    <div className="input-wrapper">
                        <label for="content">Escreva brevemente o que você precisa aprender, qual é o seu nível de conhecimento hoje nesse assunto? (máximo 140 caracteres)</label>
                        <textarea type="text" name="content" id="content" maxlength="365" rows="6"></textarea>
                    </div>
                    <div className="input-wrapper">
                        <label for="date">Escolha uma data:</label>
                        <input type="date" name="classDate" id="date"/>

                    </div>
                    <div className="input-wrapper">
                        <label for="time">Escolha um horário:</label>
                        <input type="time" name="classHour" id="time"/>
                    </div>
                    <button type="submit">Confirmar</button>
                </form>
            </main>
            <Footer />
        </SchedulingContainer>
    )
}

export default Scheduling;