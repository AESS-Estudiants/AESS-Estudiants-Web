import { useState } from 'react'
import { Analytics } from '@vercel/analytics/next';
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
          { value: '6', label: 'Cursos disponibles' },
          { value: '100%', label: 'Pràctic' },
          { value: '1-2 ECTS', label: 'Convalidable' },
          { value: 'Places', label: 'Limitades' }
        ]}
        image="/images/cursos/cartell-din4.png"
        poster={true}
      >
        <div className="hero-note">
          <i className="fas fa-info-circle"></i>
          <span>Pròxima edició dels cursos: Gener - Febrer 2026. Les inscripcions s'obriran aviat!</span>
        </div>
      </Hero>

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
                  <button
                    className="btn btn-secondary btn-disabled"
                    disabled
                    data-tooltip="Les inscripcions s'obriran a Gener 2026"
                  >
                    <i className="fas fa-user-plus"></i> Inscriu-te
                  </button>
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

