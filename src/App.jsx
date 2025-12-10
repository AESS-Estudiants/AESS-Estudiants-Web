import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cursos from './pages/Cursos'
import Projectes from './pages/Projectes'
import Contact from './pages/Contact'
import AESSBot from './pages/AESSBot'
import AESSBotInscripcio from './pages/AESSBotInscripcio'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/projectes" element={<Projectes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aessbot" element={<AESSBot />} />
            <Route path="/aessbot-inscripcio" element={<AESSBotInscripcio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

