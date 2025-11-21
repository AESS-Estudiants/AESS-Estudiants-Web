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
      <Hero
        title="Contacte"
        description="Tens alguna pregunta, suggeriment o vols col·laborar amb nosaltres? Omple el formulari i et respondrem el més aviat possible."
        image="/images/logos/aess/CubBlanc.svg"
      />

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

