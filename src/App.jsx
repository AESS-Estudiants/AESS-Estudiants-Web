import { BrowserRouter as Router } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'
import ScrollToTop from './components/ScrollToTop'
import './styles/App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  )
}

export default App

