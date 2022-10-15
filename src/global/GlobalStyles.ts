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



    input, button {
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, svg {
        cursor: pointer;
    }
`
