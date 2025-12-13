import { Analytics } from '@vercel/analytics/react';
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
      <Analytics />


      <section className="reminders-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recordatoris Importants</h2>
            <p className="section-subtitle">
              Abans d'inscriure't, assegura't de llegir aquests punts clau
            </p>
          </div>
          <div className="reminders-grid">
            <div className="reminder-card">
              <div className="reminder-icon">
                <i className="fas fa-calendar-times"></i>
              </div>
              <h3>Data Límit d'Inscripció</h3>
              <p>Les inscripcions tanquen el <strong>11 de febrer de 2026</strong> a les 23:59. No deixis la teva inscripció per l'últim moment!</p>
            </div>
            <div className="reminder-card">
              <div className="reminder-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Places Limitades</h3>
              <p>Només hi ha <strong>16 equips disponibles</strong>. Si s'esgoten les places, es seguiran els criteris de prioritat de la normativa.</p>
            </div>
            <div className="reminder-card">
              <div className="reminder-icon">
                <i className="fas fa-euro-sign"></i>
              </div>
              <h3>Fiança Retornable</h3>
              <p>Cal abonar una <strong>fiança de 50€ per equip</strong> que es retornarà al participar a la final. Més informació a la normativa.</p>
            </div>
            <div className="reminder-card">
              <div className="reminder-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3>Requisit d'Estudiant</h3>
              <p>Tots els participants han de ser <strong>estudiants de grau o màster</strong> de qualsevol universitat.</p>
            </div>
            <div className="reminder-card">
              <div className="reminder-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <h3>Llegeix la Normativa</h3>
              <p>Abans d'inscriure't, <strong>llegeix atentament la normativa oficial</strong> per conèixer totes les especificacions tècniques i condicions de participació.{' '}
                <a href="/documents/Reglament%20V2.docx.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                  Descarrega aquí
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="form-section section" id="formulari-inscripcio">
        <div className="container">
          <div className="inscripcio-header">
            <h2>Inscriu el teu equip a l'AESSBot 2026</h2>
            <p className="lead-text">
              Omple el formulari següent per inscriure el teu equip a l'AESSBot 2026.
              Tots els membres de l'equip han de ser estudiants de grau o màster de qualsevol universitat.
            </p>
            {/* Alert removed as per request */}
          </div>

          <div className="google-form-container">
            <div className="form-embed">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScciiXmQMnUtMhncWi28Q-ktjAPgIQtR8Ay9EgmTJtKJdQCVg/viewform?embedded=true"
                width="100%"
                height="1000"
                style={{ height: '1000px' }}
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

      <section className="post-registration-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Què passa després d'inscriure't?</h2>
            <p className="section-subtitle">
              Un cop hagis enviat el formulari, segueix aquests passos
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-paper-plane"></i>
              </div>
              <div className="timeline-content">
                <h3>1. Confirmació de Recepció</h3>
                <p>Rebràs un correu electrònic confirmant que hem rebut la teva inscripció. Si no el reps en 24h, comprova la carpeta de spam.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-hourglass-half"></i>
              </div>
              <div className="timeline-content">
                <h3>2. Espera al Tancament d'Inscripcions</h3>
                <p>Un cop enviada la teva inscripció, cal esperar fins el <strong>11 de febrer de 2026</strong> quan es tanquin les inscripcions oficials per aplicar els criteris de prioritat en cas que hi hagi més de 16 equips.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="timeline-content">
                <h3>3. Validació d'Inscripcions</h3>
                <p>L'equip de l'organització revisarà totes les inscripcions rebudes i validarà que compleixin els requisits de participació.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className="timeline-content">
                <h3>4. Acceptació Oficial</h3>
                <p>Rebràs un correu amb la confirmació d'acceptació i instruccions per abonar la fiança de 50€. Tens 5 dies per completar el pagament.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="timeline-content">
                <h3>5. Correu de Benvinguda i Convocatòria</h3>
                <p>Rebràs un correu de benvinguda amb la convocatòria per al primer taller <strong>abans del 15 de febrer de 2026</strong>. També s'afegirà al vostre equip al grup de WhatsApp on rebreu tota la informació.</p>
              </div>
            </div>
          </div>
          <div className="post-registration-cta">
            <p>Tens dubtes sobre el procés d'inscripció?</p>
            <a href="/contact" className="btn btn-secondary">
              <i className="fas fa-envelope"></i> Contacta'ns
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AESSBotInscripcio

