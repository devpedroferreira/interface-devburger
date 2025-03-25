  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { RouterProvider } from 'react-router-dom'; // rotas

  import { router } from './routes';
  import GlobalStyle from './styles/globalStyles'; // Import the GlobalStyle
  

  createRoot(document.getElementById('root')).render(
    <StrictMode>
    
        <RouterProvider router={router} />
        <GlobalStyle />
        <ToastContainer // Login
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
