import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react';
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import FAQ from '../components/FAQ'
import './Home.css'

const Home = () => {
  const [activeAboutIndex, setActiveAboutIndex] = useState(0)

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
      description: 'Associació de robòtica de l\'ETSETB, activa des de 1999 i oberta a gent amb ganes de crear.',
      image: activities[0],
      alt: 'Membres d\'AESS participant en una activitat de robòtica',
      icon: 'fas fa-terminal',
      tags: ['Projectes', 'Taller', 'Cursos', 'Competicions'],
      cta: {
        label: 'Vine a conèixer-nos',
        to: '/uneix-te'
      }
    },
    {
      eyebrow: './projectes.md',
      title: 'Robots i invents',
      description: 'Electrònica, mecànica, codi i proves fins que la idea arrenca.',
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
      title: 'Comunitat UPC',
      description: 'Gent de Telecos, FIB, altres escoles i perfils curiosos.',
      image: activities[2],
      alt: 'Grup de membres d\'AESS compartint una activitat',
      icon: 'fas fa-users'
    },
    {
      eyebrow: './taller.md',
      title: 'Taller sense por',
      description: 'Eines, material i ajuda. No cal venir sabent-ho tot.',
      image: activities[3],
      alt: 'Espai de taller amb material i eines per a projectes',
      icon: 'fas fa-tools'
    },
    {
      eyebrow: './cursos.md',
      title: 'Formació pràctica',
      description: 'Tallers de robòtica, programació, electrònica i disseny 3D.',
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
      title: 'AESSBot',
      description: 'Competició minisumo: dissenya, construeix i programa el robot.',
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
      title: 'Vida associativa',
      description: 'Els projectes també són una excusa per conèixer gent.',
      image: activities[6],
      alt: 'Vida associativa i activitats amb membres d\'AESS',
      icon: 'fas fa-university',
      cta: {
        label: 'Uneix-te',
        to: '/uneix-te'
      }
    }
  ]

  const upcomingEvents = [
    {
      file: './aessbot-2026.md',
      title: 'AESSBot 2026',
      description: 'Competició de robots minisumo on cada equip dissenya, construeix i programa el seu robot per competir dins del ring.',
      date: '18 febrer - 6 maig 2026',
      status: 'Finalitzat',
      image: '/images/aessbot/Cartell-original-DIN.png',
      alt: 'Cartell AESSBot 2026',
      to: '/aessbot'
    },
    {
      file: './cursos-hivern-2026',
      title: 'Cursos',
      description: 'Formacions pràctiques d\'AESS per aprendre robòtica, electrònica, programació i eines aplicades a projectes reals.',
      date: 'Edició febrer 2026',
      status: 'Finalitzat',
      image: '/images/cursos/cursos-aess-26-febrer-fixed.png',
      alt: 'Cartell cursos AESS',
      to: '/cursos'
    }
  ]

  const activeAbout = aboutRows[activeAboutIndex]

  return (
    <div className="home">
      <Analytics />
      <Hero
        title="AESS"
        subtitle="Estudiants"
        description="L'associació de robòtica de l'ETSETB"
        terminal
      >
        <div className="home-hero-join">
          <Link to="/uneix-te" className="cli-join-button" aria-label="Join AESS">
            <pre aria-hidden="true">{`┌────────────────┐
│ `}<b>&gt;</b>{` JOIN AESS `}<i>█</i>{` │
└────────────────┘`}</pre>
          </Link>
        </div>
      </Hero>
      <section className="que-fem-section section">
        <div className="container">
          <div className="about-terminal" aria-label="Informació sobre AESS i les seves activitats">
            <div className="about-terminal-bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <strong>cd /qui-som</strong>
            </div>

            <div className="about-terminal-intro">
              <div className="about-terminal-copy">
                <h2>Qui som i què fem?</h2>
                <p>
                  Som una associació d'estudiants on aprenem construint: projectes,
                  tallers, competicions i moltes proves al taller.
                </p>
              </div>
            </div>

            <div className="about-cli-shell">
              <nav className="about-cli-menu" aria-label="Menú de seccions sobre AESS">
                <p className="about-cli-prompt">
                  <span>aess:~$</span> select --section
                </p>
                <div className="about-cli-options" role="tablist" aria-label="Apartats de Qui som i què fem">
                  {aboutRows.map((row, index) => (
                    <button
                      type="button"
                      className={`about-cli-option ${index === activeAboutIndex ? 'is-active' : ''}`}
                      key={row.eyebrow}
                      onClick={() => setActiveAboutIndex(index)}
                      role="tab"
                      aria-selected={index === activeAboutIndex}
                      aria-controls="about-cli-output"
                      id={`about-cli-tab-${index}`}
                    >
                      <span className="about-cli-index">{String(index + 1).padStart(2, '0')}</span>
                      <span className="about-cli-caret">&gt;</span>
                      <span>{row.eyebrow}</span>
                    </button>
                  ))}
                </div>
              </nav>

              <article
                className="about-cli-output"
                id="about-cli-output"
                role="tabpanel"
                aria-labelledby={`about-cli-tab-${activeAboutIndex}`}
              >
                <div className="about-cli-output-command">
                  <span>aess:~$</span> cat {activeAbout.eyebrow}
                </div>
                <div className="about-cli-output-grid">
                  <div className="about-cli-output-copy">
                    <div className="about-story-icon" aria-hidden="true">
                      <i className={activeAbout.icon}></i>
                    </div>
                    <h3>{activeAbout.title}</h3>
                    <p>{activeAbout.description}</p>
                    {activeAbout.tags && (
                      <div className="about-story-tags" aria-label="Àrees principals d'AESS">
                        {activeAbout.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                    {activeAbout.cta && (
                      <Link to={activeAbout.cta.to} className="about-story-link">
                        {activeAbout.cta.label} <i className="fas fa-arrow-right"></i>
                      </Link>
                    )}
                  </div>
                  <figure className="about-terminal-media about-cli-media">
                    <img src={activeAbout.image} alt={activeAbout.alt} loading="lazy" />
                    <figcaption>preview: {activeAbout.eyebrow}</figcaption>
                  </figure>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="esdeveniments-section section">
        <div className="container">
          <div className="events-terminal" aria-label="Llistat de pròxims esdeveniments d'AESS">
            <div className="about-terminal-bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <strong>cd /events</strong>
            </div>

            <div className="events-terminal-intro">
              <div className="about-terminal-copy">
                <h2>Pròxims esdeveniments</h2>
                <p>
                  Agenda d'activitats, cursos i competicions en mode directori:
                  fitxes, estat i preview del cartell en una sola sortida.
                </p>
              </div>
            </div>

            <div className="events-cli-list">
              <p className="events-cli-command">
                <span>aess:~/events$</span> ls -la --with-preview
              </p>
              {upcomingEvents.map((event, index) => (
                <article
                  className="event-card"
                  key={event.file}
                  data-file={event.file}
                  aria-labelledby={`event-card-title-${index}`}
                >
                  <div className="event-cli-tree" aria-hidden="true">
                    <span>{index === upcomingEvents.length - 1 ? '└──' : '├──'}</span>
                  </div>
                  <figure className="event-image">
                    <img src={event.image} alt={event.alt} loading="lazy" />
                  </figure>
                  <div className="event-card-content">
                    <div className="event-card-header">
                      <div className="event-meta">
                        <span className="event-index">{String(index + 1).padStart(2, '0')}</span>
                        <span className="event-permissions" aria-hidden="true">drwxr-xr-x</span>
                        <span className="event-badge">{event.title}</span>
                        <span className="event-status event-status-ended">{event.status}</span>
                      </div>
                      <p id={`event-card-title-${index}`}>{event.description}</p>
                      <span className="event-date-badge">{event.date}</span>
                    </div>
                    <div className="event-actions">
                      <Link to={event.to} className="event-cli-link">
                        cd {event.file} <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          <div className="faq-manual" aria-label="Preguntes freqüents sobre AESS">
            <div className="faq-man-intro">
              <h2>Tens dubtes?</h2>
              <p>Manual ràpid per resoldre les preguntes més habituals sobre AESS.</p>
              <p className="about-terminal-command">
                <span>aess:~$</span> man aess-faq
              </p>
            </div>

            <div className="faq-man-page">
              <section className="faq-man-section" aria-labelledby="faq-man-questions">
                <h3 id="faq-man-questions">QUESTIONS</h3>
                <p className="faq-man-hint">Selecciona una entrada per desplegar-ne la resposta.</p>
                <FAQ items={faqs} />
              </section>

              <section className="faq-man-section faq-man-see-also" aria-labelledby="faq-man-see-also">
                <h3 id="faq-man-see-also">SEE ALSO</h3>
                <Link to="/contact" className="event-cli-link" aria-label="Contacta'ns">
                  Contacta amb nosaltres <i className="fas fa-arrow-right"></i>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
