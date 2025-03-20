  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import GlobalStyle from './styles/globalStyles'; // Import the GlobalStyle
  import { Login } from './containers/Login';

  createRoot(document.getElementById('root')).render(
    <StrictMode>
    
        <Login />
        <GlobalStyle />
    

        <ToastContainer
         position="top-right"
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop
         closeOnClick
         rtl={false}
         pauseOnFocusLoss={false}
         draggable
         pauseOnHover={false}
         theme="dark"
          />
    </StrictMode>,
  );
