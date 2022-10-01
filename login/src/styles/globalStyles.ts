import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        background-color: ${props => props.theme.colors.backgroundColor};
        color: ${props => props.theme.colors.text};
    }
`