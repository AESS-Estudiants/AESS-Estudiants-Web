import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import './Cursos.css'

const Cursos = () => {
  const cursos = [
    {
      name: 'Arduino Introducció',
      logo: '/images/cursos/logos/logo_arduino_intro.png',
      description: 'Introducció a la programació de microcontroladors Arduino. Control de sensors, actuadors i comunicació bàsica. Perfecte per començar en el món de l\'electrònica.',
      duration: '5 sessions (4 hores cada una)',
      date: 'Properament',
      level: 'Inicial',
      preuUPC: '85',
      preuNoUPC: '105',
      credits: '1',
      requisits: 'Cap',
      ubicacio: 'Campus Nord UPC - Aules per determinar'
    },
    {
      name: 'Arduino Avançat',
      logo: '/images/cursos/logos/logo_arduino_avanzado.svg',
      description: 'Aprofundeix en Arduino amb projectes complexos: comunicació I2C/SPI, interrupcions, control PID i optimització de codi.',
      duration: '5 sessions (4 hores cada una)',
      date: 'Properament',
      level: 'Avançat',
      preuUPC: '85',
      preuNoUPC: '105',
      credits: '1',
      requisits: 'Cap',
      ubicacio: 'Campus Nord UPC - Aules per determinar'
    },
    {
      name: 'Fusion 3D Design',
      logo: '/images/cursos/logos/logo_fusion.png',
      description: 'Aprèn a modelar peces en 3D amb Fusion 360. Des de formes bàsiques fins a dissenys complexos per impressió 3D i fabricació.',
      duration: '5 sessions (4 hores cada una)',
      date: 'Properament',
      level: 'Inicial',
      preuUPC: '85',
      preuNoUPC: '105',
      credits: '1',
      requisits: 'Cap',
      ubicacio: 'Campus Nord UPC - Aules per determinar'
    },
    {
      name: 'Raspberry Pi',
      logo: '/images/cursos/logos/logo_respbaerry_pi.svg',
      description: 'Descobreix les possibilitats de la Raspberry Pi: sistema operatiu Linux, programació GPIO, projectes IoT i automatització.',
      duration: '5 sessions (4 hores cada una)',
      date: 'Properament',
      level: 'Inicial/Intermedi',
      preuUPC: '85',
      preuNoUPC: '105',
      credits: '1',
      requisits: 'Cap',
      ubicacio: 'Campus Nord UPC - Aules per determinar'
    },
    {
      name: 'Programació en Python',
      logo: '/images/cursos/logos/logo_python.png',
      description: 'Aprèn Python des de zero: sintaxi bàsica, estructures de dades, funcions, i aplicacions en automatització i anàlisi de dades.',
      duration: '5 sessions (4 hores cada una)',
      date: 'Properament',
      level: 'Inicial',
      preuUPC: '85',
      preuNoUPC: '105',
      credits: '1',
      requisits: 'Cap',
      ubicacio: 'Campus Nord UPC - Aules per determinar'
    },
    {
      name: 'Programació en C++',
      logo: '/images/cursos/logos/Logo_c++.png',
      description: 'Domina C++ per a sistemes embeguts i aplicacions de rendiment. Gestió de memòria, POO i programació eficient.',
      duration: '5 sessions (4 hores cada una)',
      date: 'Properament',
      level: 'Intermedi',
      preuUPC: '85',
      preuNoUPC: '105',
      credits: '1',
      requisits: 'Cap',
      ubicacio: 'Campus Nord UPC - Aules per determinar'
    }
  ]

  return (
    <div className="cursos-page">
      <Hero
        title="Cursos"
        description="Aprèn amb els nostres cursos pràctics en robòtica, electrònica i programació. Des de iniciació fins a nivell avançat, tenim el curs perfecte per a tu."
        stats={[
          { value: '6', label: 'Cursos disponibles' },
          { value: '100%', label: 'Pràctic' },
          { value: '1-2 ECTS', label: 'Convalidable' },
          { value: 'Places', label: 'Limitades' }
        ]}
        image="/images/cursos/cartell-din4.png"
        poster={true}
      />

      <section className="intro-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cursos</h2>
            <p className="section-subtitle">
              A AESS Estudiants oferim una àmplia varietat de cursos i tallers pràctics per
              desenvolupar habilitats en robòtica, programació, disseny electrònic i molt més.
              Tots els cursos són gratuïts per als membres de l'associació. Usualment oferim una tanda de cursos a finals de Gener a Principis de Febrer, i una altra a finals de Juny a Principis de Juliol.
            </p>
            <div className="cursos-disclaimer">
              <i className="fas fa-info-circle"></i>
              <span>Els cursos de febrer i juliol encara no estan programats. Les dates s'anunciaran properament.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cursos-list-section section">
        <div className="container">
          <div className="cursos-grid">
            {cursos.map((curso, index) => (
              <div key={index} className="curso-card">
                <div className="curso-image">
                  <img src={curso.logo} alt={`${curso.name} logo`} />
                </div>
                <div className="curso-content">
                  <h3>{curso.name}</h3>
                  <p>{curso.description}</p>
                  <div className="curso-details">
                    <div className="detail-row">
                      <strong>Preu:</strong> {curso.preuUPC}€ UPC / {curso.preuNoUPC}€ No UPC
                    </div>
                    <div className="detail-row">
                      <strong>Crèdits ECTS:</strong> {curso.credits}
                    </div>
                    <div className="detail-row">
                      <strong>Requisits:</strong> {curso.requisits}
                    </div>
                    <div className="detail-row">
                      <strong>Ubicació:</strong> {curso.ubicacio}
                    </div>
                    <div className="detail-row">
                      <strong>Durada:</strong> {curso.duration}
                    </div>
                    <div className="detail-row">
                      <strong>Data:</strong> {curso.date}
                    </div>
                    <div className="detail-row">
                      <strong>Nivell:</strong> {curso.level}
                    </div>
                  </div>
                  <button className="btn btn-primary" onClick={(e) => e.preventDefault()}>
                    Més informació
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Vols apuntar-te a un curs?</h2>
            <p>
              Si estàs interessat en algun dels nostres cursos,
              contacta amb nosaltres. Les inscripcions s'anunciaran properament!
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Contacta amb nosaltres
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cursos

