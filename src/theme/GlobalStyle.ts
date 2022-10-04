import { createGlobalStyle } from "styled-components";
import { normalize } from "./normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}

    #root {
        display: flex;
        min-height: 100vh;
        min-width: 100%;
    }

    body {
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        background-color: #fff;
        height: 100%;
    }
`;

export default GlobalStyle;
