import 'antd/dist/antd.css';
import { css } from "styled-components";

export const normalize = css`
    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :focus,
    :active {
        outline: none;
    }

    a,
    a:visited {
        text-decoration: none;
    }

    a:focus,
    a:active {
        outline: none;
    }

    nav,
    footer,
    header,
    aside {
        display: block;
    }

    html,
    body {
        height: 100%;
        width: 100%;
    }

    input,
    button,
    textarea {
        font-family: inherit;
    }

    input::-ms-clear {
        display: none;
    }

    button {
        cursor: pointer;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    a:hover {
        text-decoration: none;
    }

    ul li {
        list-style: none;
    }

    img {
        max-width: 100%;
        display: block;
    }

    svg {
        display: inline-block;
        fill: currentColor;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: inherit;
    }
`;
