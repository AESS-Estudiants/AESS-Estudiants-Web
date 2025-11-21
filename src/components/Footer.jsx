import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img 
              src="/images/logos/aess/CubBlanc.svg" 
              alt="AESS Logo" 
              className="footer-logo-img"
            />
            <span>AESS Estudiants</span>
          </div>
          <p className="footer-description">
            Associació d'estudiants de la UPC dedicada a la tecnologia, robòtica i innovació.
          </p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/aessestudiants" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon" 
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="https://www.linkedin.com/company/aess-upc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon" 
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://github.com/AESS-Estudiants" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon" 
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Enllaços ràpids</h3>
          <ul className="quick-links">
            <li><Link to="/aessbot"><i className="fas fa-chevron-right"></i> AESSBot</Link></li>
            <li><Link to="/cursos"><i className="fas fa-chevron-right"></i> Cursos</Link></li>
            <li><Link to="/projectes"><i className="fas fa-chevron-right"></i> Projectes</Link></li>
            <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contacte</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contacte</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Campus Nord UPC, Barcelona</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:aess.estudiants@upc.edu">aess.estudiants@upc.edu</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+34934137564">+34 934 13 75 64</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 AESS Estudiants. Tots els drets reservats.</p>
          <div className="legal-links">
            <a href="/documents/Política_Privacitat.pdf" target="_blank" rel="noopener noreferrer">
              Política de privacitat
            </a>
            <span className="divider">|</span>
            <a href="/documents/normativa_v3.pdf" target="_blank" rel="noopener noreferrer">
              Normativa
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

