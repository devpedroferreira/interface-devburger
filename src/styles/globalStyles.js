import {createGlobalStyle} from 'styled-components'; // Import the createGlobalStyle from styled-components

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

    .Toastify__toast {
        border-radius: 8px;
        padding: 16px;
    }

    .Toastify__progress-bar {
        background: #f27613;
    }

    .Toastify__close-button {
        color: #fff;
        opacity: 0.7;
    }
`;

export default GlobalStyle; // Export the GlobalStyle
