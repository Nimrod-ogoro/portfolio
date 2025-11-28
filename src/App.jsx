

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import WhatsAppAIAssistant from './pages/WhatsAppAIAssistant'
import LamakiConstruction from './pages/LamakiConstruction'
import EventsWebsite from './pages/EventsWebsite'
import ConstructionSite from './pages/ConstructionSite'
import AIProjects from './pages/AIProjects'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/projects/whatsapp-bot" element={<WhatsAppAIAssistant />} />
      <Route path="/projects/lamaki" element={<LamakiConstruction />} />
      <Route path="/projects/events" element={<EventsWebsite />} />
      <Route path="/projects/construction" element={<ConstructionSite />} />
      <Route path="/projects/ai-projects" element={<AIProjects />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
