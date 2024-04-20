import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --aqua-green: #00ec99;
        --dark-aqua-green: #007174;
        --orange: #ffa400;
        --baby-blue: #88CCF1;
        --dark-blue: #2a2a72;
        --purple: #8163bf;
        --shock-pink: #E60B64;
        --text-black: #000;
        --text-white: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        list-style: none;
    }

    ::-webkit-scrollbar {
        width: 1.125rem;
    }

    ::-webkit-scrollbar-thumb {
        background: #c8c8c8;
        background-clip: content-box;
        border: 6px solid transparent;
        border-radius: .625rem;
    }

    body {
        font-family: 'Inter', sans-serif;
    }
`;

export default GlobalStyles;