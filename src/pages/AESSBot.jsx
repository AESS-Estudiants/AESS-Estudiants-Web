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
    { fecha: '18 Feb 2026', hora: '11:00 - 13:00', titulo: 'Introducció', desc: 'Benvinguda, explicació de la competició i planificació del projecte.', icon: 'fas fa-lightbulb' },
    { fecha: '25 Feb 2026', hora: '11:00 - 13:00', titulo: 'Actuadors', desc: 'Control de motors (DC, servos, steppers).', icon: 'fas fa-cog' },
    { fecha: '2 Mar 2026', hora: '11:00 - 13:00', titulo: 'Sensors', desc: 'Connexió i ús de sensors: pulsadors, ultrasó, sharp i sensors de llum del terra.', icon: 'fas fa-microchip' },
    { fecha: '9 Mar 2026', hora: '11:00 - 13:00', titulo: 'PCB', desc: 'Disseny de plaques i tècniques de soldadura en placa de topos.', icon: 'fas fa-memory' },
    { fecha: '16 Mar 2026', hora: '11:00 - 13:00', titulo: 'Disseny 3D', desc: 'Disseny 3D amb OnShape.', icon: 'fas fa-cube' },
    { fecha: '23 Mar 2026', hora: '11:00 - 13:00', titulo: 'Seguiment', desc: 'Acompanyament i seguiment pels equips.', icon: 'fas fa-tasks' },
    { fecha: '6 Mai 2026', hora: 'TBD', titulo: 'Final AESSBot 2026', desc: 'Gran final de la competició amb tots els participants', icon: 'fas fa-trophy', final: true }
  ]

  const faqs = [
    // General
    {
      question: 'Quin és el repte?',
      answer: 'El teu repte serà dissenyar i construir un robot autònom capaç d\'empènyer el robot oponent fora del ring de combat (Dohyo), seguint la normativa oficial de la competició.',
      icon: 'fas fa-flag-checkered'
    },
    {
      question: 'Quan és la competició?',
      answer: 'La gran final de l\'AESSBot 2026 tindrà lloc el 6 de maig de 2026 al Campus Nord de la UPC.',
      icon: 'fas fa-calendar-day'
    },
    {
      question: 'Qui pot participar?',
      answer: 'La competició està oberta a estudiants de grau i màster de totes les universitats.',
      icon: 'fas fa-users'
    },
    {
      question: 'Les places són limitades?',
      answer: 'Sí, la competició està limitada a 16 equips de màxim 3 persones. En cas que hi hagi més sol·licituds, se seguiran els criteris de prioritat estipulats a la normativa.',
      icon: 'fas fa-sort-amount-down'
    },

    // Equips
    {
      question: 'Puc participar sol?',
      answer: 'Sí. Tot i això, si s\'esgoten les places, una de les prioritats és seleccionar equips amb més membres per facilitar la participació del màxim nombre d\'estudiants.',
      icon: 'fas fa-user'
    },
    {
      question: 'No vull participar sol, però no tinc equip',
      answer: 'No et preocupis, nosaltres te\'n busquem un! Inscriu-te tu sol i marca l\'opció que vols buscar equip al formulari.',
      icon: 'fas fa-handshake'
    },

    // Costos
    {
      question: 'La participació és gratuïta?',
      answer: 'Sí. La inscripció és gratuïta, però cal dipositar una fiança de 50€ per equip, que serà retornada al final de la competició si l\'equip hi participa.',
      icon: 'fas fa-wallet'
    },
    {
      question: 'Com funciona la subvenció del robot?',
      answer: 'Subvencionem fins a 100€ en material per equip. Els equips compren el material necessari i, si participen a la final, es tramita el reemborsament presentant les factures. Consulteu els detalls a la normativa.',
      icon: 'fas fa-coins'
    },

    // Construcció i Tallers
    {
      question: 'Com construeixo el robot?',
      answer: 'Teniu total llibertat per construir el robot que vulgueu, sempre que compleixi la normativa. Posem a la vostra disposició tallers per aprendre noves eines i tecnologies. A més, es facilitarà accés al taller de l\'associació en horari no lectiu per utilitzar eines i rebre seguiment.',
      icon: 'fas fa-robot'
    },
    {
      question: 'Què aprendré als tallers?',
      answer: 'Tant si tens coneixements previs com si no, aprendràs noves eines i tecnologies que podràs aplicar al teu robot (disseny 3D, electrònica, sensors...) i que et serviran pel teu futur professional.',
      icon: 'fas fa-lightbulb'
    },
    {
      question: 'Quin material necessito per als tallers?',
      answer: 'Cada taller és diferent, però en general haureu de portar ordinador i material per prendre notes.',
      icon: 'fas fa-laptop'
    },
    {
      question: 'Puc construir el robot només assistint als tallers?',
      answer: 'No. Els tallers no estan pensats per ser una guia pas a pas de com construir un robot, sinó per donar-vos recursos. Haureu de treballar fora de les hores de taller.',
      icon: 'fas fa-tools'
    },

    // Premis i Crèdits
    {
      question: 'Hi ha premis?',
      answer: 'Sí, es repartiran més de 900€ en premis entre els millors equips classificats.',
      icon: 'fas fa-trophy'
    },
    {
      question: 'Puc convalidar crèdits ECTS?',
      answer: 'Sí. Pels estudiants de l\'ETSETB, es reconeixerà 1 ECTS de forma automàtica. Pels estudiants d\'altres facultats de la UPC, s\'informarà a l\'escola corresponent, però serà l\'escola qui decideixi finalment si convalidar el crèdit.',
      icon: 'fas fa-graduation-cap'
    },
    {
      question: 'Què s\'ha de fer per convalidar el crèdit?',
      answer: 'Per obtenir els crèdits és necessari: assistir a tots els tallers, preparar el robot i participar a la competició final amb un robot reglamentari.',
      icon: 'fas fa-check-circle'
    },

    // Normativa
    {
      question: 'On puc trobar la normativa?',
      answer: 'El reglament complet de la competició està disponible a la secció de "Normativa" d\'aquesta mateixa pàgina.',
      icon: 'fas fa-book-open'
    }
  ]

  const isClosed = countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0

  return (
    <div className="aessbot-page">
      <Hero
        title="AESSBot 2026"
        description="La competició de robòtica més esperada de la UPC. Apunta el teu equip avui perquè les places són limitades i es tanquen aviat."
        image="/images/aessbot/Cartell-original-DIN.png"
        poster={true}
        stats={[
          { value: '+900€', label: 'En premis' },
          { value: '16', label: 'Equips' },
          { value: '3', label: 'Participants per equip' },
          { value: '1', label: 'ECTS' }
        ]}
      >
        <div className="hero-badge-container">
          <Link to="/aessbot-inscripcio" className="btn btn-primary">
            <i className="fas fa-pen-fancy"></i> Inscriu-te
          </Link>
          {isClosed ? (
            <div className="countdown-closed">
              <i className="fas fa-lock"></i>
              <span>Inscripcions tancades</span>
            </div>
          ) : (
            <div className="countdown-container">
              <span className="countdown-label">Les inscripcions tanquen en:</span>
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
            <div className="video-label">
              <i className="fas fa-video"></i>
              <span>Vídeo resum AESSBot 2025</span>
            </div>
            <div className="video-wrapper youtube-embed">
              <iframe
                src="https://www.youtube.com/embed/tPKSWS5g-3Y"
                title="AESSBot Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Informació</h2>
            <p className="section-subtitle">
              Tot el que necessites saber sobre costos, materials i requisits per participar a l'AESSBot.
            </p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-gift"></i>
              </div>
              <h3>Inscripció gratuïta</h3>
              <p>La inscripció a la competició és totalment gratuïta. Només cal abonar una fiança de 50€ retornable un cop hagueu participat a la final.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Ajut econòmic</h3>
              <p>Subvencionem fins a 100€ en material per equip per a que pugueu consegueir el robot definitiu.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>+900€ en premis</h3>
              <p>Repartirem més de 900€ en premis entre els millors equips classificats. A què esperes per guanyar?</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>1 crèdit ECTS</h3>
              <p>Es pot obtenir 1 crèdit ECTS convalidable. Consulta les condicions a la <a href="#normativa" onClick={(e) => { e.preventDefault(); document.getElementById('normativa').scrollIntoView({ behavior: 'smooth' }) }}>normativa</a>.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3>Obert a tots els estudiants</h3>
              <p>La competició està oberta a tots els estudiants de qualsevol universitat.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Més informació</h3>
              <p>Per a més detalls sobre el reglament, límits tècnics i condicions, consulta la <a href="/documents/normativa_v4.pdf" target="_blank" rel="noopener noreferrer">normativa oficial</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="talleres-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Calendari
            </h2>
            <p className="section-subtitle">Consulta les dates clau de la competició.</p>
          </div>
          <div className="talleres-table-container">
            <table className="talleres-table">
              <thead>
                <tr>
                  <th><i className="fas fa-calendar-alt"></i> Data</th>
                  <th><i className="fas fa-clock"></i> Hora</th>
                  <th><i className="fas fa-tools"></i> Event</th>
                  <th><i className="fas fa-map-marker-alt"></i> Ubicació</th>
                </tr>
              </thead>
              <tbody>
                {talleres.map((taller, index) => (
                  <tr key={index} className={taller.final ? 'final' : ''}>
                    <td className="fecha" data-label="Data">{taller.fecha}</td>
                    <td className="hora" data-label="Hora">{taller.hora}</td>
                    <td data-label="Taller">
                      <div className="taller-titulo">
                        <i className={taller.icon}></i> {taller.titulo}
                      </div>
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

      <section id="normativa" className="normativa-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Normativa</h2>
            <p className="section-subtitle">
              Consulta i descarrega el reglament oficial de la competició.
              Assegura't de llegir-lo atentament abans de participar a la competició.
            </p>
            <div className="normativa-cta">
              <a
                href="/documents/normativa_v4.pdf"
                download="AESSBot_2026_Normativa.pdf"
                className="btn btn-primary btn-large"
              >
                <i className="fas fa-file-pdf"></i> Descarregar Normativa 2026
              </a>
              <p className="small-disclaimer">* Subjecte a canvis</p>
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

