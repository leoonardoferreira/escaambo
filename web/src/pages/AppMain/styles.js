import styled from "styled-components";

export const AppMainContainer = styled.div`
    max-width: 100rem;
    margin: 0 auto;

    div.categories, div.container {
        padding: 0 1rem;
    }

    div.categories {
        margin: 0 auto 2rem;
        max-width: fit-content;
    }

    h2 {
        margin-bottom: 1rem;
    }

    div.categories>ul {
        display: flex;
        gap: 1rem;
        overflow-x: scroll;
        max-width: 53rem;
    }

    div.categories>ul>li {
        border-radius: 2.5rem;
        padding: .5rem .75rem;
        border: 1px solid #ccc;
        text-wrap: nowrap;
    }

    div.categories>ul>li:hover {
        cursor: pointer;
    }

    div.categories>ul>li:checked {
        background-color: var(--dark-aqua-green);
        color: var(--text-white);
    }

    main {
        margin-bottom: 2rem;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: space-between;
        max-width: 100rem;

        margin: 0 auto;
        overflow-y: scroll;
        max-height: 70vh;
        gap: 1rem;
    }

    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: var(--text-white);

        border-top: 1px solid #ccc; 
        text-align: center;
    }

    @media (max-width: 375px) {
        .container {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (min-width: 768px) {
        .container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .container {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (min-width: 1440px) {
        .container {
            grid-template-columns: repeat(5, 1fr);
        }
    }
`;