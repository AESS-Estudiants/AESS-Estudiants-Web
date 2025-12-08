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
      <Hero
        title="Inscripció AESSBot"
        description="La competició de robòtica més esperada de la UPC. Apunta el teu equip avui perquè les places són limitades i es tanquen aviat."
        image="/images/aessbot/Cartell-original-DIN.png"
        poster={true}
      >
        <div className="hero-badge-container">
          {isClosed ? (
            <div className="countdown-closed">
              <i className="fas fa-lock"></i>
              <span>Inscripcions tancades</span>
            </div>
          ) : (
            <div className="countdown-container">
              <div className="countdown-units">
                <div className="countdown-unit">
                  <div className="countdown-box">
                    <span className="countdown-value">{countdown.days}</span>
                  </div>
                  <span className="countdown-text">dies</span>
                </div>
                <div className="countdown-separator-wrapper">
                  <span className="countdown-separator">:</span>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-box">
                    <span className="countdown-value">{countdown.hours.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="countdown-text">hores</span>
                </div>
                <div className="countdown-separator-wrapper">
                  <span className="countdown-separator">:</span>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-box">
                    <span className="countdown-value">{countdown.minutes.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="countdown-text">min</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Hero>

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

