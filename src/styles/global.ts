import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --color-white: #f3f2ef;
    --color-light: #7b7b7b;
    --color-blue: #0966c2;
    --color-pearl: #aa9679;
    }
    html, body, #root {
        min-height: 100vh;
    }
    body {
        -webkit-font-smoothing: antialiased;
        background-color: var(--color-white);
    }
    body,input, textarea, button {
        font-family: 'Montserrat';
    }   
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    label {
        font-size: 0.7rem;
    }
    .error {
        position: absolute;
        color: var(--color-red);
        font-size: 0.9rem;
        font-weight: bold;
    }
    .cursor-pointer { cursor: pointer; }
`;
