import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react';
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import CourseModal from '../components/CourseModal'
import './Cursos.css'

const Cursos = () => {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (curso) => {
    setSelectedCourse(curso)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedCourse(null), 200)
  }
  const enrollLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfPPmNP2heuAxZne8FewLPJgNdluvf332XoYgQdJmhzzoZDZA/viewform?usp=header'

  const cursos = [
    {
      name: 'Arduino Introducció',
      logo: '/images/cursos/logos/logo_arduino_intro.png',
      description: 'Arrenca des de zero i construeix el teu primer projecte real amb sensors i actuadors, aprenent les bases d\'Arduino i les bones pràctiques de cablejat.',
      detailedContent: 'Dia 1: bases d\'Arduino, E/S digitals, sensors i lectures segures. Dia 2: actuadors, drivers, bones pràctiques de cablejat i mini projecte guiat per consolidar-ho.',
      duration: '2 sessions (10 hores cada una)',
      date: '31 de gener i 1 de febrer',
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
      description: 'Fes el salt als projectes complexos: busos I2C/SPI, interrupcions, PID per motors i optimització de codi amb integració de sensors avançats.',
      detailedContent: 'Busos I2C/SPI, interrupcions i timers, control PID per motors, optimització de codi i projecte final integrant diversos sensors i actuadors.',
      duration: '5 sessions (4 hores cada una)',
      date: '2 al 6 de febrer · tardes',
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
      description: 'Porta a la realitat totes les teves idees! Aprèn a dissenyar peces i estructures des dels fonaments del 3D fins a aplicacions habituals al món laboral.',
      detailedContent: 'Sketches paramètrics, extrusions i lofts, assemblatges, juntes i restriccions, preparació per impressió 3D i exportació. Eines aplicables a Fusion, SolidWorks o Onshape.',
      duration: '5 sessions (4 hores cada una)',
      date: '26 al 30 de gener · tardes',
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
      description: 'Domina la Raspberry Pi amb Linux pràctic, GPIO amb Python i automatització. Ideal per muntar projectes IoT lleugers amb serveis propis.',
      detailedContent: 'Linux bàsic i terminals, configuració de GPIO amb Python, serveis i systemd, IoT lleuger i mini projecte final aplicat.',
      duration: '5 sessions (4 hores cada una)',
      date: '2 al 6 de febrer · matins',
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
      description: 'Aprèn Python des de zero amb enfocament pràctic en scripts útils, automatització i projectes ràpids per al dia a dia.',
      detailedContent: 'Sintaxi base, llistes i diccionaris, lectura d\'arxius, llibreries i petit projecte pràctic aplicat.',
      duration: '5 sessions (4 hores cada una)',
      date: '26 al 30 de gener · matins',
      level: 'Inicial',
      preuUPC: '85',
      preuNoUPC: '105',
      credits: '1',
      requisits: 'Cap',
      ubicacio: 'Campus Nord UPC - Aules per determinar'
    }
  ]

  const cursosImages = [
    '/images/cursos/photos/cursos1.jpeg',
    '/images/cursos/photos/cursos2.jpeg',
    '/images/cursos/photos/cursos3.jpeg',
  ]

  return (
    <div className="cursos-page">
      <Analytics />
      <Hero
        title="Cursos"
        description="Aprèn amb els nostres cursos pràctics en robòtica, electrònica i programació. Des de iniciació fins a nivell avançat, tenim el curs perfecte per a tu."
        stats={[
          { value: '5', label: 'Cursos disponibles' },
          { value: '100%', label: 'Pràctic' },
          { value: '1 ECTS', label: 'Convalidable' },
          { value: 'Places', label: 'Limitades' }
        ]}
        image="/images/cursos/cursos-aess-26-febrer-fixed.png"
        poster={true}
      />

      <section className="intro-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cursos</h2>
            <p className="section-subtitle">
              A AESS Estudiants oferim una àmplia varietat de cursos i tallers pràctics per
              desenvolupar habilitats en robòtica, programació, disseny electrònic i molt més.
              Tots els cursos són gratuïts per als membres de l'associació. Oferim dues edicions anuals: <strong>Gener-Febrer</strong> i <strong>Juny-Juliol</strong>.
            </p>
          </div>
          <div className="carousel-wrapper">
            <Carousel images={cursosImages} />
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
                      <i className="fas fa-euro-sign"></i>
                      <span><strong>Preu:</strong> {curso.preuUPC}€ UPC / {curso.preuNoUPC}€ No UPC</span>
                    </div>
                    <div className="detail-row">
                      <i className="fas fa-certificate"></i>
                      <span><strong>Crèdits ECTS:</strong> {curso.credits}</span>
                    </div>
                    <div className="detail-row">
                      <i className="fas fa-check-circle"></i>
                      <span><strong>Requisits:</strong> {curso.requisits}</span>
                    </div>
                    <div className="detail-row">
                      <i className="fas fa-map-marker-alt"></i>
                      <span><strong>Ubicació:</strong> {curso.ubicacio}</span>
                    </div>
                    <div className="detail-row">
                      <i className="fas fa-clock"></i>
                      <span><strong>Durada:</strong> {curso.duration}</span>
                    </div>
                    <div className="detail-row">
                      <i className="fas fa-calendar-alt"></i>
                      <span><strong>Data:</strong> {curso.date}</span>
                    </div>
                    <div className="detail-row">
                      <i className="fas fa-signal"></i>
                      <span><strong>Nivell:</strong> {curso.level}</span>
                    </div>
                  </div>
                  <button className="btn btn-primary" onClick={() => handleOpenModal(curso)}>
                    <i className="fas fa-info-circle"></i> Més informació
                  </button>
                  <a
                    className="btn btn-secondary"
                    href={enrollLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-user-plus"></i> Inscriu-te
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default Cursos

