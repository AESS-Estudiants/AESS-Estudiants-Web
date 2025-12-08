import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import FAQ from '../components/FAQ'
import './Home.css'

const Home = () => {
  const activities = [
    '/images/aess/qui-som/qui-som1.jpeg',
    '/images/aess/qui-som/qui-som2.jpeg',
    '/images/aess/qui-som/qui-som3.jpeg',
    '/images/aess/qui-som/qui-som5.jpeg',
    '/images/aess/qui-som/qui-som6.png',
    '/images/aess/qui-som/qui-som7.jpeg',
    '/images/aess/qui-som/qui-som8.png',
  ]

  const faqs = [
    {
      question: 'Per què ser membre?',
      answer: 'Ser membre d\'AESS t\'ofereix múltiples beneficis: aplicar coneixements reals en projectes pràctics, unir-te amb persones amb els mateixos interessos, desenvolupar soft skills com parlar en públic i gestionar projectes, accés al nostre taller amb eines professionals, participar en competicions com l\'AESSBot, cursos amb crèdits ECTS convalidables, i integrar-te en una comunitat multidisciplinar. Descobreix més sobre els beneficis a la secció "Per què participar a AESS?".',
      icon: 'fas fa-users'
    },
    {
      question: 'Com formar part d\'AESS?',
      answer: 'Segueix els passos de la secció de dalt per unir-te a la nostra associació.',
      icon: 'fas fa-user-plus'
    },
    {
      question: 'Cal tenir coneixements previs?',
      answer: 'No! La gràcia és poder aprendre tots junts. No cal tenir coneixements previs per començar a formar part de la nostra comunitat.',
      icon: 'fas fa-graduation-cap'
    },
    {
      question: 'Quan estem al despatx?',
      answer: 'No tenim un horari fixe ja que depenem dels horaris dels membres. Per aquest motiu el millor és entrar al grup de WhatsApp per poder saber quan pots venir. Tot i així, els divendres acostumem a estar.',
      icon: 'far fa-clock'
    },
    {
      question: 'Com puc estar al dia de les activitats?',
      answer: 'Via el grup de WhatsApp per participar i Instagram per veure què fem.',
      icon: 'fas fa-bell'
    },
    {
      question: 'On està ubicat el taller?',
      answer: 'El nostre taller està ubicat a l\'aula S203 de l\'edifici Omega al campus Nord de la UPC.',
      icon: 'fas fa-map-marker-alt'
    },
    {
      question: 'Hi ha algun cost per ser membre?',
      answer: 'No! La participació a AESS és totalment gratuïta per als membres. Els cursos tenen un preu reduït per estudiants de la UPC i les activitats com l\'AESSBot tenen inscripció gratuïta amb material subvencionat.',
      icon: 'fas fa-euro-sign'
    },
    {
      question: 'Puc participar si no estudio a l\'ETSETB?',
      answer: 'Sí! Som una comunitat multidisciplinar oberta a estudiants de totes les escoles de la UPC (ETSETB, FIB, ETSEIB, etc.). La diversitat de perfils enriqueix els nostres projectes.',
      icon: 'fas fa-user-check'
    }
  ]

  return (
    <div className="home">
      <Hero
        badge="Innovant en robòtica i enginyeria"
        title="AESS"
        subtitle="Estudiants"
        description="Impulsant el futur de la tecnologia a la UPC. Una comunitat d'estudiants units per la passió per la robòtica, la tecnologia i la innovació."
        image="/images/logos/aess/CubBlanc.svg"
      />

      <section className="about-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Qui som?</h2>

            <div className="sponsor-logo-item">
              <img
                src="/images/logos/aess/Logo_aess_blanc.png"
                alt="AESS Logo"
                className="sponsor-logo-img"
              />
            </div>

            <div className="about-content">
              <p>
                <strong>AESS Estudiants</strong> (Aerospace and Electronic Systems Society) és una associació sense ànim de lucre de l'ETSETB (UPC) fundada el 1999.
              </p>
              <p>
                Formem una comunitat d'estudiants multidisciplinar (ETSETB, FIB, ETSEIB, etc.), units per la passió per la robòtica i la tecnologia. <strong>Organitzem competicions, cursos, tallers i projectes</strong> que complementen la formació acadèmica i fomenten la innovació i l'aprenentatge pràctic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="que-fem-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Què fem?</h2>
          </div>
          <div className="cards-grid">
            <div className="feature-card">
              <div className="card-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3>Projectes</h3>
              <p>Participa en projectes de robòtica amb altres estudiants. Disposem de taller propi amb eines i equipament perquè puguis desenvolupar els teus projectes aplicant els coneixements adquirits a la universitat.</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>AESSBot</h3>
              <p>La nostra competició de robots minisumo, on dissenyes i construeixes robots autònoms que s'enfronten en emocionants combats. Aprèn electrònica, programació i mecànica.</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Cursos</h3>
              <p>Oferim cursos pràctics sobre programació, electrònica i disseny 3D. Aprèn i posa en pràctica els teus coneixements des del primer dia, i a més a més, emporta't fins a 2 crèdits ECTS.</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">
                <i className="fas fa-university"></i>
              </div>
              <h3>Vida universitària</h3>
              <p>Més enllà de les aules, organitzem activitats i sortides per compartir experiències. Perque de tant en tant, també cal desconectar.</p>
            </div>
          </div>
          <div className="carousel-wrapper">
            <Carousel images={activities} />
          </div>
        </div>
      </section>

      <section className="perque-participar-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Per què participar a AESS?</h2>
            <p className="section-subtitle">
              Participar a AESS et permet aprofundir no només en allò més acadèmic, sinó també et permetrà desenvolupar-te en altres discliplines.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Aplicar coneixements reals</h3>
              <p>Com a estudiants, podem agafar els coneixements que aprenem a la universitat i aplicar-los a la vida real. Això ens permet entendre millor el que estudiem i veure'n l'aplicació pràctica.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Comunitat i connexió</h3>
              <p>Ser curiosos i unir-nos amb altres persones amb els mateixos interessos. Creem una comunitat on tots aprenem junts i compartim la passió per la robòtica i la tecnologia.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-microphone"></i>
              </div>
              <h3>Desenvolupament de soft skills</h3>
              <p>Treballem habilitats més complicades d'aprendre a les aules com parlar en públic, gestionar projectes i organitzar esdeveniments. Aquestes habilitats són essencials per al teu desenvolupament professional.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Valor de les associacions</h3>
              <p>Les associacions estudiantils són un espai per compartir interessos i créixer, tant personalment com professionalment. Molts membres han fet de la seva experiència a AESS un primer assaig per a la seva carrera, desenvolupant-hi habilitats i descobrint vocacions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="com-participar-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Com fer-te membre</h2>
            <p className="section-subtitle">
              Fer-te membre d'AESS és molt fàcil. Només has de tenir ganes d'aprendre i participar. No hi ha cap requisit d'assistència mínima ni de coneixements.
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3>Uneix-te al nostre grup</h3>
              <p>Accedeix al nostre grup de WhatsApp per a noves incorporacions per estar al corrent de totes les nostres activitats i coneixer la resta de membres.</p>
              <a
                href="https://chat.whatsapp.com/CXzyvcUaoLNK9m5VdRNvnR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fab fa-whatsapp"></i> Uneix-te al grup de WhatsApp
              </a>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <i className="fas fa-comment-alt"></i>
              </div>
              <h3>Presenta't</h3>
              <p>Explica'ns una mica sobre tu: el teu nom, què estudies i per què vols formar part d'AESS. Coneix-nos sense cap compromís!</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Vine a conèixer-nos</h3>
              <p>Quedem al nostre taller per a una primera trobada. Podràs conèixer l'espai, els nostres projectes i resoldre tots els teus dubtes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="esdeveniments-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Propers esdeveniments</h2>
          </div>
          <div className="events-grid">
            <div className="event-card aessbot-card">
              <div className="event-card-content">
                <div className="event-card-header">
                  <div className="event-badge">Competició Anual</div>
                  <h3>AESSBot 2026</h3>
                  <p>La competició de robòtica més esperada de la UPC. Construeix el teu propi robot minisumo i competeix contra altres equips en una batalla d'enginyeria i estratègia.</p>
                </div>
                <div className="event-details">
                  <div className="detail-item">
                    <i className="fas fa-trophy"></i>
                    <div>
                      <span className="detail-value">Més de 900€</span>
                      <span className="detail-label">En premis</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-certificate"></i>
                    <div>
                      <span className="detail-value">1 ECTS</span>
                      <span className="detail-label">Per arribar a la final</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-calendar-alt"></i>
                    <div>
                      <span className="detail-value">Feb 18 - Mai 6</span>
                      <span className="detail-label">Durada del competició</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-robot"></i>
                    <div>
                      <span className="detail-value">16 robots</span>
                      <span className="detail-label">3 persones per equip</span>
                    </div>
                  </div>
                </div>
                <div className="event-actions">
                  <Link to="/aessbot" className="btn btn-primary">
                    <i className="fas fa-info-circle"></i> Més informació
                  </Link>
                  <Link to="/aessbot-inscripcio" className="btn btn-secondary">
                    <i className="fas fa-user-plus"></i> Inscriu-te!
                  </Link>
                </div>
              </div>
              <div className="event-image">
                <img src="/images/aessbot/Cartell-original-DIN.png" alt="AESSBot 2026" />
              </div>
            </div>

            <div className="event-card cursos-card">
              <div className="event-card-content">
                <div className="event-card-header">
                  <div className="event-badge">Cursos semestrals</div>
                  <h3>Cursos</h3>
                  <p>Desenvolupa habilitats pràctiques en robòtica i electrònica amb els nostres cursos intensius. Tots els cursos es fan en períodes no lectius (gener-febrer i juny-juliol).</p>
                </div>
                <div className="event-details">
                  <div className="detail-item">
                    <i className="fas fa-certificate"></i>
                    <div>
                      <span className="detail-value">1 ECTS</span>
                      <span className="detail-label">Per curs aprovat</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-users"></i>
                    <div>
                      <span className="detail-value">Places limitades</span>
                      <span className="detail-label">Reserva la teva aviat</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-calendar-alt"></i>
                    <div>
                      <span className="detail-value">Properament</span>
                      <span className="detail-label">Properament</span>
                    </div>
                  </div>
                </div>
                <div className="event-actions">
                  <Link to="/cursos" className="btn btn-primary">
                    <i className="fas fa-info-circle"></i> Més informació
                  </Link>
                  <button className="btn btn-secondary btn-disabled" disabled>
                    <i className="fas fa-user-plus"></i> Inscriu-te!
                  </button>
                </div>
              </div>
              <div className="event-image">
                <img src="/images/cursos/cartell-din4.png" alt="Cursos AESS" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tens dubtes?</h2>
            <p className="section-subtitle">Fes clic a cada pregunta per veure'n la resposta</p>
          </div>
          <FAQ items={faqs} />
          <div className="faq-cta">
            <p>No trobes el que busques?</p>
            <Link to="/contact" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Contacta'ns
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

