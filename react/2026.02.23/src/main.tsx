import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx' //ha nem lenne az App default betenné kapcsos zátójelbe

createRoot(document.getElementById('root')!).render(//referenci, getElementByIdval készíti el | ! - tudom, hogy lehet null, de hidd el nem lesz
  <StrictMode>
    <App />
  </StrictMode>,
)
