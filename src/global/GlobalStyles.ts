import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

      *:focus, *:active {
      -webkit-tap-highlight-color: transparent;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Manrope";
    }

    body, #root {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        display: grid;
    }


    input, button {
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`
