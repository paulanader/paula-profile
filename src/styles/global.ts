import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --color-white: #ffffff;
    --color-light: #7b7b7b;
    --color-blue: #0966c2;
    --color-pearl: #aa9679;
    --color-dark: #231f20;
    --color-gray: #c8c8c8;
    --color-purple: #660746;
    }

    @font-face {
        font-family: 'Gilmer';
        src: local('Gilmer'), url(./fonts/Gilmer/gilmer-light.otf) format('truetype');
    }

    html, body, #root {
        min-height: 100vh;
    }
    body {
        -webkit-font-smoothing: antialiased;
        background-color: var(--color-white);
    }
    body,input, textarea, button {
        font-family: 'Gilmer';
    }   
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    .cursor-pointer { cursor: pointer; }
`;
