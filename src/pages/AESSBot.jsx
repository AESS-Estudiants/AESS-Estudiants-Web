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

  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    return () => {
      document.body.removeChild(script)
    }
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
          { value: '940€', label: 'En premis' },
          { value: '15', label: 'Equips' },
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
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/reel/DPvyA6NjUxa/?utm_source=ig_embed&amp;utm_campaign=loading" 
                data-instgrm-version="14"
              >
                <div style={{padding: '16px'}}>
                  <a 
                    href="https://www.instagram.com/reel/DPvyA6NjUxa/?utm_source=ig_embed&amp;utm_campaign=loading" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{background: '#fff', lineHeight: 0, padding: 0, textAlign: 'center', textDecoration: 'none', width: '100%', display: 'block'}}
                  >
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                      <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px'}}></div>
                      <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center'}}>
                        <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px'}}></div>
                        <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px'}}></div>
                      </div>
                    </div>
                    <div style={{padding: '19% 0'}}></div>
                    <div style={{display: 'block', height: '50px', margin: '0 auto 12px', width: '50px'}}>
                      <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                            <g>
                              <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div style={{paddingTop: '8px'}}>
                      <div style={{color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px'}}>Veure aquesta publicació a Instagram</div>
                    </div>
                    <div style={{padding: '12.5% 0'}}></div>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center'}}>
                      <div>
                        <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0) translateY(7px)'}}></div>
                        <div style={{backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px'}}></div>
                        <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)'}}></div>
                      </div>
                      <div style={{marginLeft: '8px'}}>
                        <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px'}}></div>
                        <div style={{width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)'}}></div>
                      </div>
                      <div style={{marginLeft: 'auto'}}>
                        <div style={{width: 0, borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)'}}></div>
                        <div style={{backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)'}}></div>
                        <div style={{width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)'}}></div>
                      </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: '24px'}}>
                      <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '224px'}}></div>
                      <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '144px'}}></div>
                    </div>
                  </a>
                  <p style={{color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', margin: '8px 0 0', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                    <a href="https://www.instagram.com/reel/DPvyA6NjUxa/?utm_source=ig_embed&amp;utm_campaign=loading" style={{color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">Una publicació compartida de AESS Estudiants (@aessestudiants)</a>
                  </p>
                </div>
              </blockquote>
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

