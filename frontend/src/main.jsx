import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './store/auth.jsx'

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <StrictMode>
    <App />
    <ToastContainer 
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    transition: Slide />
  </StrictMode>,
 </AuthProvider>
)
