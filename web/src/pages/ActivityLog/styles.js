import styled from "styled-components";

export const ActivityLogContainer = styled.div`
    max-width: 75rem;
    margin: 0 auto;
    
    .switch {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: .5rem;

        background-color: #eee;
        border-radius: 2rem;

        font-weight: 600;

        padding: .5rem;
        margin-bottom: 1rem;
    }

    .switch li {
        background-color: #ddd;
        width: 100%;
        text-align: center;

        padding: .5rem 0;

        border-radius: 2rem;
    }

    .activityCard {
        background-color: #eee;
        padding: 2rem;
        border-radius: 2rem;

        font-weight: 500;
        margin-bottom: 1rem;
    }

    .activityCard button {
        background-color: var(--orange);
        color: var(--text-black);
        border-radius: 1rem;
        padding: .5rem 1rem;
        border: none;
        margin-bottom: .5rem;

        font-weight: bold;

    }

    .activityCard p {
       margin-bottom: .25rem;
    }


    main {
        min-height: 65vh;
        padding: 0 1rem;
    }

    @media(min-width: 768px) {
        .activityCard {
            display: flex;
            justify-content: space-between;
        }
    }
`;