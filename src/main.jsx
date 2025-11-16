import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*//This gives us the routing capabilities when we use the Link component*/}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
