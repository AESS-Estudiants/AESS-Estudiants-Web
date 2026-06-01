import { Analytics } from '@vercel/analytics/react';
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
    '/images/aess/qui-som/qui-som9.jpeg',
  ]

  const faqs = [
    {
      question: 'Per què ser membre?',
      answer: 'Ser membre d\'AESS t\'ofereix múltiples beneficis: aplicar coneixements reals en projectes pràctics, unir-te amb persones amb els mateixos interessos, desenvolupar soft skills com parlar en públic i gestionar projectes, accés al nostre taller amb eines professionals, participar en competicions com l\'AESSBot, cursos amb crèdits ECTS convalidables, i integrar-te en una comunitat multidisciplinar.',
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
      answer: 'Entrar a l\'associació i conèixer-nos és completament gratuït! Hi ha una quota anual de 20€ però només és per als membres actius que ja han vingut a l\'associació uns quants cops. Així que primer vine, coneix-nos i quan decideixis participar activament, podràs pagar la quota. Els diners serveixen perquè l\'associació pugui comprar material i eines a les quals podràs accedir un cop siguis membre. ',
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
      <Analytics />
      <Hero
        badge="Innovant en robòtica i enginyeria"
        title="AESS"
        subtitle="Estudiants"
        description="Som una associació d'estudiants on aprenem construint. Organitzem tallers, competicions i projectes perquè qualsevol persona amb curiositat per la tecnologia pugui començar, equivocar-se, aprendre i acabar fent coses que funcionen."
        image="/images/logos/aess/CubBlanc.svg"
      >
        <div className="home-hero-join">
          <span className="home-hero-event">
            <i className="far fa-calendar"></i>
            Portes obertes · 19 de juny · 15:00 - 21:00
          </span>
          <Link to="/uneix-te" className="btn btn-primary">
            <i className="fas fa-user-plus"></i> Fes-te membre!
          </Link>
        </div>
      </Hero>
<section className="que-fem-section section">
  <div className="container">
    <div className="section-header que-fem-header">
      <h2 className="section-title">Qui som i què fem?</h2>
    </div>

    <div className="about-mosaic" aria-label="Informació sobre AESS i les seves activitats">
      <div className="about-mosaic-card about-mosaic-card-main">
        <div className="about-mosaic-icon">
          <i className="fas fa-cubes"></i>
        </div>
        <span className="about-mosaic-eyebrow">AESS Estudiants</span>
        <h3>L'associació de robòtica de l'ETSETB</h3>
        <p>
          Som una associació sense ànim de lucre de l'ETSETB (UPC), fundada el
          1999, oberta a tota persona amb ganes de fer projectes
          i trobar gent amb qui compartir hores al taller.
        </p>
        <Link to="/uneix-te" className="about-mosaic-link">
          Vine a conèixer-nos <i className="fas fa-arrow-right"></i>
        </Link>
      </div>

      <Link to="/projectes" className="about-mosaic-card about-mosaic-card-tall">
        <div className="about-mosaic-icon">
          <i className="fas fa-project-diagram"></i>
        </div>
        <span className="about-mosaic-eyebrow">Projectes</span>
        <h3>Fem robots i invents diversos</h3>
        <p>
          Barregem electrònica, mecànica, programació i moltes proves fins que
          allò que teníem al cap comença a funcionar.
        </p>
        <p>
          No ens limitem a la robòtica. També hi caben projectes de software,
          automatització, disseny, eines internes o qualsevol idea que els membres
          tinguin ganes de tirar endavant.
        </p>
      </Link>

      <div className="about-mosaic-card">
        <div className="about-mosaic-icon">
          <i className="fas fa-users"></i>
        </div>
        <span className="about-mosaic-eyebrow">Qui hi participa</span>
        <h3>Persones d'àmbits diversos</h3>
        <p>
          La majoria venim de Telecos, la FIB o altres escoles de la UPC, però
          l’associació està oberta a qualsevol persona amb ganes de participar-hi:
          estudiants d’altres centres, gent de batxillerat o persones que ja han
          acabat la universitat.
        </p>
      </div>

      <div className="about-mosaic-card">
        <div className="about-mosaic-icon">
          <i className="fas fa-tools"></i>
        </div>
        <span className="about-mosaic-eyebrow">Taller propi</span>
        <h3>Un lloc on provar coses sense por</h3>
        <p>
          Tenim eines, material i gent que et pot donar un cop de mà. No cal
          venir sabent soldar, programar o dissenyar. I si ja en saps, t'ho passaràs bé!
        </p>
      </div>

      <Link to="/cursos" className="about-mosaic-card">
        <div className="about-mosaic-icon">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <span className="about-mosaic-eyebrow">Cursos</span>
        <h3>Formació</h3>
        <p>
          Fem tallers i cursos impartits per membres de l'associació per a
          qualsevol persona que vulgui aprendre tecnologia d'una manera pràctica,
          tocant electrònica, programació, disseny 3D, robòtica i altres eines que
          després es poden aplicar a projectes reals.
        </p>
      </Link>

      <Link to="/aessbot" className="about-mosaic-card">
        <div className="about-mosaic-icon">
          <i className="fas fa-robot"></i>
        </div>
        <span className="about-mosaic-eyebrow">AESSBot</span>
        <h3>Organitzem competicions de robots</h3>
        <p>
          AESSBot és la nostra competició de robots minisumo on els equips dissenyen,
          construeixen i programen el seu propi robot per enfrontar-se dins d'un ring.
        </p>
      </Link>

      <Link to="/uneix-te" className="about-mosaic-card about-mosaic-card-wide">
        <div className="about-mosaic-icon">
          <i className="fas fa-university"></i>
        </div>
        <span className="about-mosaic-eyebrow">Vida associativa</span>
        <h3>No tot és soldar, compilar i apretar cargols</h3>
        <p>
          Els projectes són l’excusa perfecta per conèixer gent, compartir espai i
          acabar formant part d’una comunitat que es mou més enllà del taller.
        </p>
      </Link>
    </div>

    <div className="carousel-wrapper">
      <Carousel images={activities} />
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
                      <span className="detail-value">Més de 1.000€</span>
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
                      <span className="detail-label">Durada de la competició</span>
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
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfPPmNP2heuAxZne8FewLPJgNdluvf332XoYgQdJmhzzoZDZA/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <i className="fas fa-user-plus"></i> Inscriu-te!
                  </a>
                </div>
              </div>
              <div className="event-image">
                <img src="/images/cursos/cursos-aess-26-febrer-fixed.png" alt="Cursos AESS" />
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
