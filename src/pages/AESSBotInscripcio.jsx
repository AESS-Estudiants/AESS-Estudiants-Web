import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import './AESSBotInscripcio.css'

const AESSBotInscripcio = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const updateCountdown = () => {
      const countdownDate = new Date('2026-02-11T23:59:59').getTime()
      const now = new Date().getTime()
      const distance = countdownDate - now

      if (distance <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

      setCountdown({ days, hours, minutes })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60000)
    return () => clearInterval(interval)
  }, [])

  const isClosed = countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0

  return (
    <div className="inscripcio-page">


      <section className="form-section section" id="formulari-inscripcio">
        <div className="container">
          <div className="inscripcio-header">
            <h2>Inscriu el teu equip a l'AESSBot 2026</h2>
            <p className="lead-text">
              Omple el formulari següent per inscriure el teu equip a l'AESSBot 2026.
              Tots els membres de l'equip han de ser estudiants de la UPC.
            </p>
            {/* Alert removed as per request */}
          </div>

          <div className="google-form-container">
            <div className="form-embed">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScciiXmQMnUtMhncWi28Q-ktjAPgIQtR8Ay9EgmTJtKJdQCVg/viewform?embedded=true"
                width="100%"
                height="3800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Formulari d'inscripció AESSBot"
              >
                S'està carregant el formulari...
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AESSBotInscripcio

