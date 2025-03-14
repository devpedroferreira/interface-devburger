import {createGlobalStyle} from 'styled-components'; // Import the createGlobalStyle from styled-components
import '@fontsource/ubuntu'; // Importando a fonte Ubuntu

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }
    button {
        cursor: pointer;
    }
`;

export default GlobalStyle; // Export the GlobalStyle
