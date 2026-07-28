import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //StrinctMode is used to debug the error before render
  <StrictMode>
    <App />
  </StrictMode>
)
