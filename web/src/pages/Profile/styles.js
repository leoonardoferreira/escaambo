import styled from "styled-components";

export const ProfileContainer = styled.div`
    max-width: 75rem;
    margin: 0 auto;

    main {
        padding: 0 1rem;
    }

    div.headline {
        max-width: 37.5rem;
        margin: 0 auto 1rem;

        & img {
            width: clamp(4rem, 4rem + 10vw, 8rem);
        }
    }
    
    div.h1 {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    div.headline button {
        background-color: var(--aqua-green);
        border: none;
        padding: 1rem;
        color: var(--text-black);
        border-radius: 2rem;
        font-weight: 600;
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

    .images {
        display: flex;
        gap: 1rem;
        overflow-x: auto;
        max-width: min-content;
        margin: 0 auto 1rem;
    }
    
    .images img {
        flex-shrink: 0;
        background-color: #ebd2be;
        height: 22.5rem;
        width: 12.5rem;
        border-radius: 1rem;
        border: 0;
        outline: 0;

    }

    div.buttons {
        display: flex;
        justify-content: space-between;
        max-width: 38rem;
        margin: 0 auto 1rem;
        align-items: center;

        &>:first-child {
            background-color: #C90000;
            border: none;
            padding: 1rem;
            color: var(--text-white);
            border-radius: 2rem;
            font-weight: 600;
        }

        &>:last-child {
            background-color: var(--shock-pink);
            border: none;
            padding: 1rem;
            color: var(--text-white);
            border-radius: 2rem;
            font-weight: 600;
            font-size: 1rem;
        }
    }
`;