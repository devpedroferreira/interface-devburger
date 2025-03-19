  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'

  import GlobalStyle from './styles/globalStyles'; // Import the GlobalStyle
  import { Login } from './containers/Login';

  createRoot(document.getElementById('root')).render(
    <StrictMode>
    
        <Login />
        <GlobalStyle />
    
    </StrictMode>,
  );
