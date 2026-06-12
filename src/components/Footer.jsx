import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-command">
          <span>aess:~$</span> tree ./connect --depth=2
        </p>

        <div className="footer-grid">
          <section className="footer-section footer-brand" aria-labelledby="footer-brand-title">
            <h2 id="footer-brand-title" className="sr-only">AESS Estudiants</h2>
            <pre className="footer-ascii" aria-hidden="true">{`+------------------+
| AESS ESTUDIANTS |
+------------------+`}</pre>
            <p className="footer-description">
              Associació d'estudiants de la UPC dedicada a la tecnologia, robòtica i innovació.
            </p>
            <nav className="social-links" aria-label="Xarxes socials">
              <a
                href="https://www.instagram.com/aessestudiants"
                target="_blank"
                rel="noopener noreferrer"
              >
                ./instagram
              </a>
              <a
                href="https://www.linkedin.com/company/aess-estudiants-upc/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                ./linkedin
              </a>
            </nav>
          </section>

          <nav className="footer-section" aria-labelledby="footer-navigation-title">
            <h2 className="footer-heading" id="footer-navigation-title">./navigation/</h2>
            <ul className="quick-links">
              <li><Link to="/aessbot"><span>|--</span> aessbot</Link></li>
              <li><Link to="/cursos"><span>|--</span> cursos</Link></li>
              <li><Link to="/projectes"><span>|--</span> projectes</Link></li>
              <li><Link to="/contact"><span>`--</span> contacte</Link></li>
            </ul>
          </nav>

          <section className="footer-section" aria-labelledby="footer-contact-title">
            <h2 className="footer-heading" id="footer-contact-title">CONTACT</h2>
            <dl className="contact-info">
              <div>
                <dt>location</dt>
                <dd>Campus Nord UPC, Barcelona</dd>
              </div>
              <div>
                <dt>email</dt>
                <dd><a href="mailto:aess.estudiants@upc.edu">aess.estudiants@upc.edu</a></dd>
              </div>
              <div>
                <dt>phone</dt>
                <dd><a href="tel:+34934137564">+34 934 13 75 64</a></dd>
              </div>
            </dl>
          </section>
        </div>

        <div className="footer-bottom">
          <p><span>aess:~$</span> echo "© {new Date().getFullYear()} AESS Estudiants"</p>
          <nav className="legal-links" aria-label="Documents legals">
            <a href="/documents/Política_Privacitat.pdf" target="_blank" rel="noopener noreferrer">
              [privacitat.md]
            </a>
            <a href="/documents/Reglament.pdf" target="_blank" rel="noopener noreferrer">
              [normativa.md]
            </a>
          </nav>
          <p className="footer-status" aria-hidden="true">[ OK ] connection closed cleanly</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
