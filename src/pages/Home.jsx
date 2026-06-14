import { useEffect, useRef, useState } from 'react'
import { Analytics } from '@vercel/analytics/react';
import Hero from '../components/Hero'
import FAQSection from '../components/FAQSection'
import TerminalButton from '../components/TerminalButton'
import './Home.css'

const Home = () => {
  const [activeAboutIndex, setActiveAboutIndex] = useState(0)
  const [activeEventIndex, setActiveEventIndex] = useState(0)
  const eventsListRef = useRef(null)
  const eventCardRefs = useRef([])

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
      description: 'Associació de robòtica de l\'ETSETB, activa des de 1999, on tothom hi pot entrar amb ganes d\'aprendre, construir i proposar idees.',
      image: activities[0],
      alt: 'Membres d\'AESS participant en una activitat de robòtica',
      icon: 'fas fa-terminal',
      highlights: [
        'Projectes reals, des del primer prototip fins a la prova final.',
        'Un taller obert per venir, tocar materials i començar a construir.',
        'No cal saber-ne: la idea és entrar, preguntar i aprendre plegats.',
      ],
      cta: {
        label: 'Vine a conèixer-nos',
        to: '/uneix-te'
      }
    },
    {
      eyebrow: './projectes.md',
      title: 'Robots i invents',
      description: 'Barregem electrònica, mecànica, codi i molta prova-error fins que les idees deixen de ser un esbós i es converteixen en màquines que funcionen.',
      image: activities[1],
      alt: 'Projecte de robòtica desenvolupat per membres d\'AESS',
      icon: 'fas fa-project-diagram',
      highlights: [
        'Electrònica, mecànica i codi treballen plegats en cada etapa.',
        'Iterem ràpid: muntem, provem, detectem errors i millorem.',
        'Cada robot és una excusa per aprendre una mica més que l\'anterior.',
      ],
      cta: {
        label: 'Veure projectes',
        to: '/projectes'
      }
    },
    {
      eyebrow: './comunitat.md',
      title: 'Comunitat UPC',
      description: 'Som gent de Telecos, FIB, altres escoles i perfils ben diversos que acaben trobant un punt en comú: les ganes de fer coses amb tecnologia.',
      image: activities[2],
      alt: 'Grup de membres d\'AESS compartint una activitat',
      icon: 'fas fa-users',
      highlights: [
        'Gent de Telecos, FIB i altres escoles sumant en el mateix espai.',
        'Perfils diferents que es complementen i fan els projectes més rics.',
        'La curiositat entra per la porta i sovint s\'hi queda una bona estona.',
      ]
    },
    {
      eyebrow: './taller.md',
      title: 'Taller sense por',
      description: 'Un espai amb eines, material i ajuda real per provar, equivocar-se i tornar a intentar-ho sense pressa i sense haver de venir amb tot après de casa.',
      image: activities[3],
      alt: 'Espai de taller amb material i eines per a projectes',
      icon: 'fas fa-tools',
      highlights: [
        'Eines i material compartits, amb gent disposada a donar un cop de mà.',
        'No cal venir amb cap idea tancada: també serveix venir a explorar.',
        'És l\'espai ideal per començar a provar coses amb calma.',
      ]
    },
    {
      eyebrow: './cursos.md',
      title: 'Formació pràctica',
      description: 'Organitzem tallers de robòtica, programació, electrònica i disseny 3D pensats perquè surtis amb una base útil i coses que puguis aplicar de seguida.',
      image: activities[4],
      alt: 'Sessió formativa organitzada per AESS',
      icon: 'fas fa-graduation-cap',
      highlights: [
        'Tallers curts, pràctics i directes al gra, sense teoria de més.',
        'Electrònica, programació i 3D amb les mans a l\'obra des del principi.',
        'Tot està pensat perquè després ho puguis portar als projectes reals.',
      ],
      cta: {
        label: 'Veure cursos',
        to: '/cursos'
      }
    },
    {
      eyebrow: './aessbot.md',
      title: 'AESSBot',
      description: 'La nostra competició minisumo: dissenyar, construir i programar un robot que sigui ràpid, robust i prou intel·ligent per plantar cara dins del ring.',
      image: activities[5],
      alt: 'Competició de robots minisumo AESSBot',
      icon: 'fas fa-robot',
      highlights: [
        'Minisumo: disseny, construcció i codi treballant com un sol equip.',
        'La competició és l\'excusa per aprendre més i afinar cada detall.',
        'T\'enganxa si t\'agraden els reptes concrets, curts i amb molta iteració.',
      ],
      cta: {
        label: 'Anar a AESSBot',
        to: '/aessbot'
      }
    },
    {
      eyebrow: './vida-associativa.md',
      title: 'Vida associativa',
      description: 'Els projectes també són una excusa per fer pinya, compartir hores de taller i acabar coneixent gent amb qui després et ve de gust quedar més enllà de l\'associació.',
      image: activities[6],
      alt: 'Vida associativa i activitats amb membres d\'AESS',
      icon: 'fas fa-university',
      highlights: [
        'L\'associació també és fer pinya i compartir el dia a dia.',
        'Hi ha converses, activitats i moments de taller que fan caliu.',
        'Sovint els projectes acaben sent també amistats i plans nous.',
      ],
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
      startDate: '18 febrer 2026',
      endDate: '6 maig 2026',
      location: 'Campus Nord UPC',
      status: 'Finalitzat',
      image: '/images/aessbot/Cartell-original-DIN.png',
      alt: 'Cartell AESSBot 2026',
      to: '/aessbot'
    },
    {
      file: './cursos-hivern-2026',
      title: 'Cursos',
      description: 'Formacions pràctiques d\'AESS per aprendre robòtica, electrònica, programació i eines aplicades a projectes reals.',
      startDate: 'Febrer 2026',
      endDate: 'Febrer 2026',
      location: 'Aula S203, Campus Nord',
      status: 'Finalitzat',
      image: '/images/cursos/cursos-aess-26-febrer-fixed.png',
      alt: 'Cartell cursos AESS',
      to: '/cursos'
    }
  ]

  const activeAbout = aboutRows[activeAboutIndex]
  const aboutMenuColumns = 4
  const aboutMenuFillers = (aboutMenuColumns - (aboutRows.length % aboutMenuColumns)) % aboutMenuColumns

  useEffect(() => {
    const root = eventsListRef.current
    const cards = eventCardRefs.current.filter(Boolean)

    if (!root || cards.length <= 1) return undefined

    let animationFrame

    const updateActiveEvent = () => {
      const rootRect = root.getBoundingClientRect()
      const rootCenter = rootRect.left + rootRect.width / 2
      const closestCard = cards.reduce((closest, card, index) => {
        const cardRect = card.getBoundingClientRect()
        const distance = Math.abs(cardRect.left + cardRect.width / 2 - rootCenter)

        return distance < closest.distance ? { index, distance } : closest
      }, { index: 0, distance: Number.POSITIVE_INFINITY })

      setActiveEventIndex(closestCard.index)
    }

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = window.requestAnimationFrame(updateActiveEvent)
    }

    updateActiveEvent()
    root.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      root.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

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
          <TerminalButton
            to="/uneix-te"
            ariaLabel="Join AESS"
            label="JOIN AESS"
            tone="primary"
            size="lg"
          />
        </div>
      </Hero>

      <div className="home-section-command">
        <div className="container">
          <p className="about-terminal-command">
            <span className="terminal-prompt">aess:~$</span> <span className="terminal-command">ls</span> -la /qui-som
          </p>
        </div>
      </div>

      <div className="home-section-divider" aria-hidden="true"></div>

      <section className="que-fem-section section">
        <div className="container">
          <div className="about-section-content" aria-label="Informació sobre AESS i les seves activitats">
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
                  {Array.from({ length: aboutMenuFillers }).map((_, index) => (
                    <span
                      key={`about-cli-spacer-${index}`}
                      className="about-cli-spacer"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </nav>

              <article
                className="about-cli-output"
                id="about-cli-output"
                role="tabpanel"
                aria-labelledby={`about-cli-tab-${activeAboutIndex}`}
              >
                <div className="about-cli-output-grid">
                  <div className="about-cli-output-copy">
                    <div className="about-cli-copy-panel">
                      <h3>{activeAbout.title}</h3>
                      <p>{activeAbout.description}</p>
                      {activeAbout.highlights && (
                        <ul className="about-story-notes" aria-label="Punts destacats de la secció">
                          {activeAbout.highlights.map((note) => (
                            <li key={note}>
                              <i className="fas fa-circle about-story-icon" aria-hidden="true"></i>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {activeAbout.cta && (
                        <TerminalButton
                          to={activeAbout.cta.to}
                          className="about-story-link"
                          ariaLabel={activeAbout.cta.label}
                          label={activeAbout.cta.label}
                          tone="primary"
                          size="md"
                        />
                      )}
                    </div>
                  </div>
                  <figure className="about-terminal-media about-cli-media">
                    <img src={activeAbout.image} alt={activeAbout.alt} loading="lazy" />
                  </figure>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="home-section-command">
        <div className="container">
          <p className="about-terminal-command">
            <span className="terminal-prompt">aess:~$</span> <span className="terminal-command">ls</span> -la /events
          </p>
        </div>
      </div>

      <section className="esdeveniments-section section">
        <div className="container">
          <div className="events-section-header">
            <h2>Pròxims esdeveniments</h2>
            <p>
              Agenda d'activitats, cursos i competicions: fitxes, estat i preview del
              cartell en una sola vista.
            </p>
          </div>

          <div className="events-section-content" aria-label="Llistat de pròxims esdeveniments d'AESS">
            <p className="sr-only" id="events-scroll-hint">
              Desplaça't horitzontalment per veure més esdeveniments.
            </p>
            <div
              ref={eventsListRef}
              className="events-cli-list"
              role="region"
              aria-label="Targetes de pròxims esdeveniments"
              aria-describedby="events-scroll-hint"
              tabIndex="0"
            >
              {upcomingEvents.map((event, index) => (
                <article
                  className="event-card"
                  key={event.file}
                  data-file={event.file}
                  data-event-index={index}
                  ref={(node) => {
                    eventCardRefs.current[index] = node
                  }}
                  aria-labelledby={`event-card-title-${index}`}
                >
                  <figure className="event-image">
                    <img src={event.image} alt={event.alt} loading="lazy" />
                  </figure>
                  <div className="event-card-content">
                    <div className="event-card-header">
                      <div className="event-meta">
                        <span className="event-badge"><span className="event-badge-hash">##</span> {event.title}</span>
                      </div>
                      <p id={`event-card-title-${index}`}>{event.description}</p>
                      <div className="event-details" aria-label="Detalls de l'esdeveniment">
                        <div className="event-detail">
                          <i className="fas fa-calendar-day" aria-hidden="true"></i>
                          <span>Inici: {event.startDate}</span>
                        </div>
                        <div className="event-detail">
                          <i className="fas fa-calendar-check" aria-hidden="true"></i>
                          <span>Final: {event.endDate}</span>
                        </div>
                        <div className="event-detail">
                          <i className="fas fa-location-dot" aria-hidden="true"></i>
                          <span>Ubicació: {event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="event-actions">
                      <TerminalButton
                        to={event.to}
                        className="about-story-link"
                        ariaLabel={event.title}
                        label={`cd ${event.file}`}
                        tone="primary"
                        size="md"
                        format="command"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {upcomingEvents.length > 1 && (
              <div className="events-pagination" aria-label="Indicadors de desplaçament dels esdeveniments">
                {upcomingEvents.map((event, index) => (
                  <button
                    key={event.file}
                    type="button"
                    className={`events-dot ${index === activeEventIndex ? 'is-active' : ''}`}
                    aria-label={`Veure esdeveniment ${index + 1} de ${upcomingEvents.length}`}
                    aria-current={index === activeEventIndex ? 'true' : undefined}
                    onClick={() => {
                      const root = eventsListRef.current
                      const card = eventCardRefs.current[index]

                      if (!root || !card) return

                      root.scrollTo({
                        behavior: 'smooth',
                        left: card.offsetLeft - root.offsetLeft,
                      })
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <FAQSection
        command="man"
        commandPrefix="aess:~$"
        title="Tens dubtes?"
        items={faqs}
        seeAlso={{
          label: 'Contacta amb nosaltres',
          ariaLabel: 'Contacta amb nosaltres',
          to: '/contact',
          tone: 'primary',
          size: 'md',
        }}
        variant="home"
      />
    </div>
  )
}

export default Home
