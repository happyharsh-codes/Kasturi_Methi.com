import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Chatbox from './components/Chatbox'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar hamburger={false}/>
    <Chatbox />
  </StrictMode>,
)
