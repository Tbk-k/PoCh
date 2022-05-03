import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Darker Grotesque', sans-serif;
    }

    a, button {
        font-family: 'Darker Grotesque', sans-serif;
    }
`;
