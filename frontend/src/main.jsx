import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RoomJoin from './pages/JoinRoom.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RoomJoin /> */}
  </StrictMode>,
)
