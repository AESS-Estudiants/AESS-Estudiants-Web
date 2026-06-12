import { Analytics } from '@vercel/analytics/react';
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import FAQ from '../components/FAQ'
import './Home.css'

const Home = () => {
  const activities = [
    '/images/aess/qui-som/qui-som8.png',
    '/images/aess/qui-som/qui-som1.jpeg',
    '/images/aess/qui-som/qui-som3.jpeg',
    '/images/aess/qui-som/qui-som4.jpeg',
    '/images/aess/qui-som/qui-som5.jpeg',
    '/images/aess/qui-som/qui-som6.jpeg',
    '/images/aess/qui-som/qui-som7.jpeg',
    '/images/aess/qui-som/qui-som9.jpeg',
    '/images/aess/qui-som/qui-som2.jpeg',
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

  const aboutRows = [
    {
      eyebrow: './associacio.md',
      title: 'AESS és aprendre fent',
      description: 'Som l\'associació de robòtica de l\'ETSETB, fundada el 1999 i oberta a qualsevol persona amb ganes de crear, provar i compartir hores al taller.',
      image: activities[0],
      alt: 'Membres d\'AESS participant en una activitat de robòtica',
      icon: 'fas fa-terminal',
      tags: ['Projectes pràctics', 'Taller i eines', 'Cursos', 'Competicions'],
      cta: {
        label: 'Vine a conèixer-nos',
        to: '/uneix-te'
      }
    },
    {
      eyebrow: './projectes.md',
      title: 'Fem robots i invents diversos',
      description: 'Barregem electrònica, mecànica, programació i moltes proves fins que allò que teníem al cap comença a funcionar.',
      image: activities[1],
      alt: 'Projecte de robòtica desenvolupat per membres d\'AESS',
      icon: 'fas fa-project-diagram',
      cta: {
        label: 'Veure projectes',
        to: '/projectes'
      }
    },
    {
      eyebrow: './comunitat.md',
      title: 'Persones d\'àmbits diversos',
      description: 'Hi participa gent de Telecos, la FIB, altres escoles de la UPC i persones amb curiositat per aprendre fent.',
      image: activities[2],
      alt: 'Grup de membres d\'AESS compartint una activitat',
      icon: 'fas fa-users'
    },
    {
      eyebrow: './taller.md',
      title: 'Un lloc on provar coses sense por',
      description: 'Tenim eines, material i gent que et pot donar un cop de mà. No cal venir sabent soldar, programar o dissenyar.',
      image: activities[3],
      alt: 'Espai de taller amb material i eines per a projectes',
      icon: 'fas fa-tools'
    },
    {
      eyebrow: './cursos.md',
      title: 'Formació pràctica',
      description: 'Fem tallers i cursos per aprendre electrònica, programació, disseny 3D, robòtica i eines aplicables a projectes reals.',
      image: activities[4],
      alt: 'Sessió formativa organitzada per AESS',
      icon: 'fas fa-graduation-cap',
      cta: {
        label: 'Veure cursos',
        to: '/cursos'
      }
    },
    {
      eyebrow: './aessbot.md',
      title: 'Organitzem competicions de robots',
      description: 'AESSBot és la nostra competició minisumo: cada equip dissenya, construeix i programa el seu robot per competir dins d\'un ring.',
      image: activities[5],
      alt: 'Competició de robots minisumo AESSBot',
      icon: 'fas fa-robot',
      cta: {
        label: 'Anar a AESSBot',
        to: '/aessbot'
      }
    },
    {
      eyebrow: './vida-associativa.md',
      title: 'No tot és soldar, compilar i apretar cargols',
      description: 'Els projectes són l\'excusa perfecta per conèixer gent i formar part d\'una comunitat que es mou més enllà del taller.',
      image: activities[6],
      alt: 'Vida associativa i activitats amb membres d\'AESS',
      icon: 'fas fa-university',
      cta: {
        label: 'Uneix-te',
        to: '/uneix-te'
      }
    }
  ]

  return (
    <div className="home">
      <Analytics />
      <Hero
        title="AESS"
        subtitle="Estudiants"
        description="Som una associació d'estudiants on aprenem construint. Organitzem tallers, competicions i projectes perquè qualsevol persona amb curiositat per la tecnologia pugui començar, equivocar-se, aprendre i acabar fent coses que funcionen."
        terminal
      >
        <div className="home-hero-event">
          <span>Jornada de portes obertes · 19 de juny · 15:00 - 21:00</span>
        </div>
        <div className="home-hero-join">
          <Link to="/uneix-te" className="btn btn-primary">
            <i className="fas fa-terminal"></i> JOIN AESS
          </Link>
          <Link to="/aessbot" className="btn btn-secondary">
            <i className="fas fa-robot"></i> GOTO AESSBot
          </Link>
        </div>
      </Hero>
<section className="que-fem-section section">
  <div className="container">
    <div className="section-header que-fem-header">
      <h2 className="section-title">Qui som i què fem?</h2>
      <p className="section-subtitle">
        Som una associació d'estudiants de la UPC on aprenem tecnologia fent
        projectes reals, compartint taller i construint comunitat.
      </p>
    </div>

    <div className="about-story" aria-label="Informació sobre AESS i les seves activitats">
      {aboutRows.map((row, index) => (
        <article
          className={`about-story-row ${index % 2 === 1 ? 'about-story-row-reverse' : ''}`}
          key={row.eyebrow}
        >
          <div className="about-story-media">
            <img src={row.image} alt={row.alt} loading="lazy" />
          </div>
          <div className="about-story-content">
            <div className="about-story-command">
              <span className="about-story-prompt">aess@web:~$</span>
              <span className="about-story-command-name">cat</span>
              <span>{row.eyebrow}</span>
            </div>
            <div className="about-story-icon" aria-hidden="true">
              <i className={row.icon}></i>
            </div>
            <h3>{row.title}</h3>
            <p>{row.description}</p>
            {row.tags && (
              <div className="about-story-tags" aria-label="Àrees principals d'AESS">
                {row.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}
            {row.cta && (
              <Link to={row.cta.to} className="about-story-link">
                {row.cta.label} <i className="fas fa-arrow-right"></i>
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>

  </div>
</section>
      <section className="esdeveniments-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Esdeveniments</h2>
          </div>
          <div className="events-grid">
            <div className="event-card aessbot-card">
              <div className="event-image">
                <img src="/images/aessbot/Cartell-original-DIN.png" alt="Cartell AESSBot 2026" />
              </div>
              <div className="event-card-content">
                <div className="event-card-header">
                  <div className="event-meta">
                    <span className="event-badge">./aessbot.event</span>
                    <span className="event-status event-status-ended">Finalitzat</span>
                  </div>
                  <h3>AESSBot 2026</h3>
                  <p>Competició de robots minisumo on cada equip dissenya, construeix i programa el seu robot per competir dins del ring.</p>
                  <span className="event-date">18 febrer - 6 maig 2026</span>
                </div>
                <div className="event-actions">
                  <Link to="/aessbot" className="btn btn-primary">
                    <i className="fas fa-info-circle"></i> Més info
                  </Link>
                </div>
              </div>
            </div>

            <div className="event-card cursos-card">
              <div className="event-image">
                <img src="/images/cursos/cursos-aess-26-febrer-fixed.png" alt="Cartell cursos AESS" />
              </div>
              <div className="event-card-content">
                <div className="event-card-header">
                  <div className="event-meta">
                    <span className="event-badge">./cursos.event</span>
                    <span className="event-status event-status-ended">Finalitzat</span>
                  </div>
                  <h3>Cursos</h3>
                  <p>Formacions pràctiques d'AESS per aprendre robòtica, electrònica, programació i eines aplicades a projectes reals.</p>
                  <span className="event-date">Edició febrer 2026</span>
                </div>
                <div className="event-actions">
                  <Link to="/cursos" className="btn btn-primary">
                    <i className="fas fa-info-circle"></i> Més info
                  </Link>
                </div>
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
