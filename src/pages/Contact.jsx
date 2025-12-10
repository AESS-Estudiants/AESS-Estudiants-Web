import { Analytics } from '@vercel/analytics/react';
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Hero from '../components/Hero'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    phone: '',
    'user-type': '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [response, setResponse] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResponse({ type: '', message: '' })

    try {
      await emailjs.sendForm(
        'service_yglpe9q',
        'template_p7oi11c',
        e.target,
        'mLcw4VXd7GiyPflDs'
      )
      setResponse({
        type: 'success',
        message: 'Missatge enviat correctament! Et respondrem el més aviat possible.'
      })
      // Reset form
      e.target.reset()
      setFormData({
        from_name: '',
        reply_to: '',
        phone: '',
        'user-type': '',
        subject: '',
        message: ''
      })
      // Scroll to response message
      setTimeout(() => {
        const responseElement = document.querySelector('.form-response')
        if (responseElement) {
          responseElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    } catch (error) {
      console.error('Error en l\'enviament:', error)
      setResponse({
        type: 'error',
        message: 'Error en l\'enviament. Si us plau, torna-ho a intentar més tard.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <Analytics />
      <Hero
        title="Contacte"
        description="Tens alguna pregunta, suggeriment o vols col·laborar amb nosaltres? Omple el formulari i et respondrem el més aviat possible."
        image="/images/logos/aess/CubBlanc.svg"
      />

      <section className="location-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Com arribar</h2>
            <p className="section-subtitle">
              Ens trobaràs al Campus Nord de la UPC, a l'edifici Omega
            </p>
          </div>
          <div className="location-content">
            <div className="location-info">
              <div className="location-card">
                <div className="location-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3>Adreça</h3>
                  <p>Edifici Omega, Aula S203<br />Campus Nord UPC<br />Carrer de Jordi Girona, 1-3<br />08034 Barcelona</p>
                </div>
              </div>
              <div className="location-card">
                <div className="location-icon">
                  <i className="fas fa-subway"></i>
                </div>
                <div>
                  <h3>Transports Públics</h3>
                  <p><strong>Metro:</strong> L3 (Palau Reial)<br /><strong>Bus:</strong> 7, 33, 54, 63, 67, 68, 75</p>
                </div>
              </div>
              <div className="location-card">
                <div className="location-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h3>Horaris</h3>
                  <p>L'horari varia segons disponibilitat dels membres.<br />Consulta el grup de WhatsApp per saber quan estem al taller.</p>
                </div>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.1!2d2.112706!3d41.389282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f7e64b8b3b%3A0x7e4b8c6e9f1e2f3e!2sCampus%20Nord%20UPC!5e0!3m2!1sca!2ses!4v1701234567890!5m2!1sca!2ses"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicació Campus Nord UPC"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="form-section section">
        <div className="container">
          <div className="form-container">
            <h2 className="form-title">Formulari de contacte</h2>

            {response.message && (
              <div className={`form-response ${response.type}`}>
                {response.message}
              </div>
            )}

            <form id="contact-form" onSubmit={handleSubmit}>
              <fieldset>
                <legend>Dades Personals</legend>
                <div className="form-group">
                  <label htmlFor="name">Nom<sup>*</sup></label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="Escriu el teu nom"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email<sup>*</sup></label>
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    required
                    placeholder="Escriu el teu correu"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telèfon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g., +34 600 123 456"
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend>Informació del Missatge</legend>
                <div className="form-group">
                  <label htmlFor="tema">Tema<sup>*</sup></label>
                  <select
                    id="tema"
                    name="user-type"
                    value={formData['user-type']}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="" disabled>Selecciona un tema</option>
                    <option value="AESS Estudiants">AESS Estudiants</option>
                    <option value="AESSBot">AESSBot</option>
                    <option value="Cursos">Cursos</option>
                    <option value="Altres">Altres</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assumpte<sup>*</sup></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Escriu l'assumpte del missatge"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">El teu missatge<sup>*</sup></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Escriu el teu missatge aquí..."
                    rows="6"
                  ></textarea>
                </div>
              </fieldset>

              <div className="form-group form-group-terms">
                <input
                  type="checkbox"
                  id="accept"
                  name="accept"
                  required
                />
                <label htmlFor="accept">
                  Accepto{' '}
                  <a
                    href="/documents/Política_Privacitat.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    la política de privacitat
                  </a>
                  <sup>*</sup>
                </label>
              </div>

              <div className="form-submit">
                <button type="submit" disabled={isSubmitting}>
                  <span className="button-text">
                    {isSubmitting ? 'Enviant...' : 'Enviar missatge'}
                  </span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

