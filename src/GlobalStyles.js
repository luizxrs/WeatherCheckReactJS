import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        background: ${props => props.theme.background};
        min-height: 100vh;
        height: 100%; 
    }

    h1 {   
        font-size: 5rem;
        margin: 0;
        font-weight: 400;
    }
    h2 {   
        font-size: 4rem;
        margin: 0;
        font-weight: 400;
    }
    h3 {   
        font-size: 3rem;
        margin: 0;
        font-weight: 400;
    }
    h4 {   
        font-size: 2rem;
        margin: 0;
        font-weight: 400;
    }
    h5 {   
        font-size: 1.5rem;
        margin: 0;
        font-weight: 400;
    }
    h6 {   
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
    }

    * {
        transition: all .3s ease;
    }
`