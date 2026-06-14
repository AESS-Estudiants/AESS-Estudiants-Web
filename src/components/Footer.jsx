import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-command">
          <span className="terminal-prompt">aess:~$</span> <span className="terminal-command">tree</span> ./connect --depth=2
        </p>

        <div className="footer-grid">
          <section className="footer-section footer-brand" aria-labelledby="footer-brand-title">
            <h2 id="footer-brand-title" className="sr-only">AESS Estudiants</h2>
            <pre className="footer-ascii" aria-hidden="true">{`+------------------+
|  AESS ESTUDIANTS |
+------------------+`}</pre>
            <p className="footer-description">
              Associació d'estudiants de la UPC dedicada a la tecnologia, robòtica i innovació.
            </p>
          </section>

          <section className="footer-section" aria-labelledby="footer-social-title">
            <h2 className="footer-heading" id="footer-social-title">SOCIAL MEDIA</h2>
            <div className="footer-social-buttons" aria-label="Xarxes socials">
              <a
                className="footer-cli-link"
                href="https://www.instagram.com/aessestudiants"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <span className="footer-cli-link-icon" aria-hidden="true"><i className="fab fa-instagram"></i></span>
              </a>
              <a
                className="footer-cli-link"
                href="https://www.linkedin.com/company/aess-estudiants-upc/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <span className="footer-cli-link-icon" aria-hidden="true"><i className="fab fa-linkedin-in"></i></span>
              </a>
            </div>
          </section>

          <section className="footer-section" aria-labelledby="footer-contact-title">
            <h2 className="footer-heading" id="footer-contact-title">CONTACT</h2>
            <dl className="contact-info">
              <div>
                <dt><span className="contact-prefix-icon" aria-hidden="true"><i className="fas fa-location-dot"></i></span> location</dt>
                <dd>Campus Nord UPC, Barcelona</dd>
              </div>
              <div>
                <dt><span className="contact-prefix-icon" aria-hidden="true"><i className="fas fa-envelope"></i></span> email</dt>
                <dd><a href="mailto:aess.estudiants@upc.edu">aess.estudiants@upc.edu</a></dd>
              </div>
              <div>
                <dt><span className="contact-prefix-icon" aria-hidden="true"><i className="fas fa-phone"></i></span> phone</dt>
                <dd><a href="tel:+34934137564">+34 934 13 75 64</a></dd>
              </div>
            </dl>
          </section>
        </div>

        <div className="footer-bottom">
          <p><span className="terminal-prompt">aess:~$</span> <span className="terminal-command">echo</span> "© {new Date().getFullYear()} AESS Estudiants"</p>
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
