import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import FAQ from '../components/FAQ'
import './AESSBot.css'

const AESSBot = () => {
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

  const talleres = [
    { fecha: '18 Feb 2026', hora: '11:00 - 13:00', titulo: 'Introducció', desc: 'Benvinguda, explicació de la competició i planificació del projecte.' },
    { fecha: '25 Feb 2026', hora: '11:00 - 13:00', titulo: 'Actuadors', desc: 'Control de motors (DC, servos, steppers).' },
    { fecha: '2 Mar 2026', hora: '11:00 - 13:00', titulo: 'Sensors', desc: 'Connexió i ús de sensors: pulsadors, ultrasó, sharp i sensors de llum del terra.' },
    { fecha: '9 Mar 2026', hora: '11:00 - 13:00', titulo: 'PCB', desc: 'Disseny de plaques i tècniques de soldadura en placa de topos.' },
    { fecha: '16 Mar 2026', hora: '11:00 - 13:00', titulo: 'Disseny 3D', desc: 'Disseny 3D amb OnShape.' },
    { fecha: '23 Mar 2026', hora: '11:00 - 13:00', titulo: 'Seguiment', desc: 'Acompanyament i seguiment pels equips.' },
    { fecha: '6 Mai 2026', hora: 'TBD', titulo: 'Final AESSBot 2026', desc: 'Gran final de la competició amb tots els participants', final: true }
  ]

  const faqs = [
    {
      question: 'Qui pot participar a l\'AESSBot 2026?',
      answer: 'La competició està oberta a tots els estudiants de la UPC, tant de grau com de màster. Es pot participar en equips de fins a 3 persones.',
      icon: 'fas fa-user-plus'
    },
    {
      question: 'Com em puc inscriure a la competició?',
      answer: 'Pots inscriure\'t fent clic al botó d\'inscripció a la pàgina principal de l\'AESSBot o directament des de la secció d\'inscripcions.',
      icon: 'fas fa-pen-fancy'
    },
    {
      question: 'Hi ha algun cost d\'inscripció?',
      answer: 'La inscripció és totalment gratuïta. A més, els equips disposaran d\'un pressupost per a material.',
      icon: 'fas fa-euro-sign'
    },
    {
      question: 'On puc trobar el reglament complet?',
      answer: 'El reglament complet de la competició està disponible a la secció de normativa.',
      icon: 'fas fa-book'
    },
    {
      question: 'Quins són els límits de mida i pes del robot?',
      answer: 'El robot no ha de superar els 10x10x10 cm en la fase inicial i ha de tenir un pes màxim de 500 grams. Consulta el reglament per a més detalls.',
      icon: 'fas fa-ruler-combined'
    },
    {
      question: 'Quins tallers s\'ofereixen?',
      answer: 'Ofereixim tallers d\'introducció, actuadors, sensors, PCB i disseny 3D. Tots els tallers són impartits per professionals del sector.',
      icon: 'fas fa-chalkboard-teacher'
    },
    {
      question: 'Quin material necessito per als tallers?',
      answer: 'Només cal que portis el teu ordinador portàtil. La resta de materials necessaris seran proporcionats pels organitzadors.',
      icon: 'fas fa-tools'
    },
    {
      question: 'Quan és la final de la competició?',
      answer: 'La final de l\'AESSBot 2026 està programada per al 12 de maig de 2026.',
      icon: 'fas fa-calendar-alt'
    },
    {
      question: 'Hi ha premis pels guanyadors?',
      answer: 'Sí, hi haurà premis per als tres primers classificats, incloent premis en metàl·lic i oportunitats de formació.',
      icon: 'fas fa-trophy'
    }
  ]

  const isClosed = countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0

  return (
    <div className="aessbot-page">
      <Hero
        title="AESSBot 2026"
        description="La competició de robòtica més esperada de la UPC. Dissenya, construeix i competeix amb el teu propi robot sumo."
        stats={[
          { value: '1000€', label: 'En premis' },
          { value: '16', label: 'Equips' },
          { value: '3', label: 'Participants per equip' },
          { value: '1 ECTS', label: 'Convalidable' }
        ]}
        image="/images/aessbot/Cartell-original-DIN.png"
        poster={true}
      >
        <div className="hero-badge-container">
          <div className={`countdown-badge ${isClosed ? 'closed' : countdown.days <= 7 ? 'urgent' : countdown.days <= 14 ? 'warning' : ''}`}>
            <i className="fas fa-circle"></i>
            <span>
              {isClosed ? 'Inscripcions tancades' : `Inscriu-te abans de: ${countdown.days}d ${countdown.hours.toString().padStart(2, '0')}h ${countdown.minutes.toString().padStart(2, '0')}m`}
            </span>
          </div>
          <Link to="/aessbot-inscripcio" className="btn btn-primary">
            <i className="fas fa-user-plus"></i> Inscriu-te ara
          </Link>
        </div>
      </Hero>

      <section className="overview-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">La competició</h2>
            <p className="section-subtitle">
              Entra al ring i demostra qui és el rei del Minisumo! El teu repte? Dissenyar el robot definitiu que
              aconsegueixi fer fora del ring a la resta d'oponents i proclamar-te vencedor.
              Preparat per portar les teves habilitats a un altre nivell?
              La competició t'espera, i només els millors dominaran el ring!
            </p>
          </div>
          <div className="video-container">
            <div className="video-wrapper instagram-embed">
              <iframe
                src="https://www.instagram.com/reel/DPvyA6NjUxa/embed"
                width="540"
                height="900"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allowFullScreen="true"
                title="Instagram Reel AESSBot"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="talleres-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Calendari de Tallers</h2>
            <p className="section-subtitle">Descobreix els tallers preparats per a la competició AESSBot 2026</p>
          </div>
          <div className="talleres-table-container">
            <table className="talleres-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Hora</th>
                  <th>Taller</th>
                  <th>Ubicació</th>
                </tr>
              </thead>
              <tbody>
                {talleres.map((taller, index) => (
                  <tr key={index} className={taller.final ? 'final' : ''}>
                    <td className="fecha" data-label="Data">{taller.fecha}</td>
                    <td className="hora" data-label="Hora">{taller.hora}</td>
                    <td data-label="Taller">
                      <div className="taller-titulo">{taller.titulo}</div>
                      <div className="taller-desc">{taller.desc}</div>
                    </td>
                    <td className="ubicacion" data-label="Ubicació">Campus Nord, {taller.final ? 'per confirmar' : 'aula per determinar'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="talleres-disclaimer">
              <i className="fas fa-info-circle"></i>
              <span>Les dates i hores dels tallers poden canviar.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="normativa-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Normativa</h2>
            <p className="section-subtitle">
              Consulta i descarrega el reglament oficial de la competició AESSBot 2026. 
              Assegura't de llegir-lo atentament abans de participar a la competició.
            </p>
            <div className="normativa-cta">
              <a 
                href="/documents/normativa_v4.pdf" 
                download="AESSBot_2026_Normativa.pdf" 
                className="btn btn-primary btn-large"
              >
                <i className="fas fa-file-pdf"></i> Descarregar Normativa 2026 (subjecte a canvis)
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Patrocinadors i Col·laboradors</h2>
            <p className="section-subtitle">
              Gràcies al suport d'aquestes empreses i entitats per fer possible l'AESSBot 2026
            </p>
          </div>
          <div className="sponsors-container">
            <div className="sponsor-category">
              <h3>Patrocinadors Oficials</h3>
              <div className="sponsor-logos-row">
                <div className="mystery-sponsor-large">
                  <div className="mystery-icon-large">
                    <i className="fas fa-question"></i>
                    <div className="pulse-effect"></div>
                  </div>
                </div>
                <div className="mystery-sponsor-large">
                  <div className="mystery-icon-large">
                    <i className="fas fa-question"></i>
                    <div className="pulse-effect"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sponsor-category">
              <h3>Col·laboradors</h3>
              <div className="sponsor-logos-row">
                <div className="sponsor-item">
                  <img src="/images/logos/logo-telecos.svg" alt="ETSETB" />
                  <span>ETSETB</span>
                </div>
                <div className="sponsor-item">
                  <img src="/images/logos/logo-upc.svg" alt="UPC" />
                  <span>UPC</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sponsor-cta">
            <p>Vols ser patrocinador o col·laborador de l'AESSBot 2026?</p>
            <Link to="/contact" className="btn btn-secondary">
              Contacta'ns
            </Link>
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tens dubtes sobre l'AESSBot 2026?</h2>
            <p className="section-subtitle">Fes clic a cada pregunta per veure'n la resposta</p>
          </div>
          <FAQ items={faqs} />
          <div className="faq-cta">
            <p>No trobes la resposta a la teva pregunta? Contacta amb nosaltres i et respondrem amb molt de gust.</p>
            <Link to="/contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i> Contacta'ns
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AESSBot

