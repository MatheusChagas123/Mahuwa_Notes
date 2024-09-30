import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Details }from './assets/Pages/Details.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Details/>
  </StrictMode>,
)
