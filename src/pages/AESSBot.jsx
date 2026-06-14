import { Analytics } from '@vercel/analytics/react';
import { Fragment, useState } from 'react'
import Hero from '../components/Hero'
import FAQSection from '../components/FAQSection'
import TerminalButton from '../components/TerminalButton'
import AESSBotRegistrationDrawer from '../components/AESSBotRegistrationDrawer'
import './AESSBot.css'

const AESSBot = () => {
  const previousEditions = [
    {
      year: '2025',
      title: 'AESSBot 2025',
      videoTitle: 'resum-aessbot-2025.mp4',
      videoUrl: 'https://www.youtube.com/embed/tPKSWS5g-3Y',
      albumUrl: 'https://photos.app.goo.gl/',
      prizes: [
        { place: '1r premi', team: 'Equip guanyador', members: 'Integrants pendents de confirmar' },
        { place: '2n premi', team: 'Equip finalista', members: 'Integrants pendents de confirmar' },
        { place: '3r premi', team: 'Equip semifinalista', members: 'Integrants pendents de confirmar' },
      ],
    },
    {
      year: '2024',
      title: 'AESSBot 2024',
      videoTitle: 'resum-aessbot-2024.mp4',
      videoUrl: 'https://www.youtube.com/embed/tPKSWS5g-3Y',
      albumUrl: 'https://photos.app.goo.gl/',
      prizes: [
        { place: '1r premi', team: 'Equip guanyador', members: 'Integrants pendents de confirmar' },
        { place: '2n premi', team: 'Equip finalista', members: 'Integrants pendents de confirmar' },
        { place: '3r premi', team: 'Equip semifinalista', members: 'Integrants pendents de confirmar' },
      ],
    },
    {
      year: '2023',
      title: 'AESSBot 2023',
      videoTitle: 'resum-aessbot-2023.mp4',
      videoUrl: 'https://www.youtube.com/embed/tPKSWS5g-3Y',
      albumUrl: 'https://photos.app.goo.gl/',
      prizes: [
        { place: '1r premi', team: 'Equip guanyador', members: 'Integrants pendents de confirmar' },
        { place: '2n premi', team: 'Equip finalista', members: 'Integrants pendents de confirmar' },
        { place: '3r premi', team: 'Equip semifinalista', members: 'Integrants pendents de confirmar' },
      ],
    },
  ]

  const [activeEditionIndex, setActiveEditionIndex] = useState(0)
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const activeEdition = previousEditions[activeEditionIndex]

  const navigateEdition = (direction) => {
    setActiveEditionIndex((currentIndex) => (
      (currentIndex + direction + previousEditions.length) % previousEditions.length
    ))
  }

  const heroBannerArt = `
 █████╗ ███████╗███████╗███████╗██████╗  ██████╗ ████████╗
██╔══██╗██╔════╝██╔════╝██╔════╝██╔══██╗██╔═══██╗╚══██╔══╝
███████║█████╗  ███████╗███████╗██████╔╝██║   ██║   ██║
██╔══██║██╔══╝  ╚════██║╚════██║██╔══██╗██║   ██║   ██║
██║  ██║███████╗███████║███████║██████╔╝╚██████╔╝   ██║
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═════╝  ╚═════╝    ╚═╝

██████╗  ██████╗ ██████╗  ██████╗
╚════██╗██╔═████╗╚════██╗██╔════╝
 █████╔╝██║██╔██║ █████╔╝███████╗
██╔═══╝ ████╔╝██║██╔═══╝ ██╔═══██╗
███████╗╚██████╔╝███████╗╚██████╔╝
╚══════╝ ╚═════╝ ╚══════╝ ╚═════╝`

  const renderSectionCommand = (command, argument) => (
    <>
      <div className="aessbot-section-command">
        <div className="container">
          <p>
            <span className="terminal-prompt">aessbot:~$</span>{' '}
            <span className="terminal-command">{command}</span> {argument}
          </p>
        </div>
      </div>
      <div className="aessbot-section-divider" aria-hidden="true"></div>
    </>
  )

  const talleres = [
    { fecha: '18 Feb 2026', hora: '12:00 - 14:00', titulo: 'Introducció', desc: 'Benvinguda, explicació de la competició i planificació del projecte.', icon: 'fas fa-lightbulb', aula: 'Biblioteca Gabriel Ferreter' },
    { fecha: '25 Feb 2026', hora: '12:00 - 14:00', titulo: 'Actuadors', desc: 'Control de motors (DC, servos, steppers).', icon: 'fas fa-cog', aula: 'C4S102C i C4S102B' },
    { fecha: '4 Mar 2026', hora: '12:00 - 14:00', titulo: 'Disseny 3D', desc: 'Disseny 3D amb OnShape.', icon: 'fas fa-cube', aula: 'C4S102C i C4S102B' },
    { fecha: '18 Mar 2026', hora: '12:00 - 14:00', titulo: 'Sensors', desc: 'Connexió i ús de sensors: pulsadors, ultrasó, sharp i sensors de llum del terra.', icon: 'fas fa-microchip', aula: 'C4S102C i C4S102B' },
    { fecha: '25 Mar 2026', hora: '12:00 - 14:00', titulo: 'PCB', desc: 'Disseny de plaques i tècniques de soldadura en placa de topos.', icon: 'fas fa-memory', aula: 'C4S102C i C4S102B' },
    { fecha: '22 Apr 2026', hora: '12:00 - 14:00', titulo: 'Seguiment', desc: 'Acompanyament i seguiment pels equips.', icon: 'fas fa-tasks', aula: 'C4S102C i C4S102B' },
    { fecha: '6 Mai 2026', hora: '11:00 - 15:00', titulo: 'Final AESSBot 2026', desc: 'Gran final de la competició amb tots els participants', icon: 'fas fa-trophy', final: true, aula: 'Plaça Telecomunicacions' }
  ]

  const calendarMonthMap = {
    Jan: 'GEN',
    Feb: 'FEB',
    Mar: 'MAR',
    Apr: 'ABR',
    May: 'MAI',
    Jun: 'JUN',
    Jul: 'JUL',
    Aug: 'AGO',
    Sep: 'SET',
    Oct: 'OCT',
    Nov: 'NOV',
    Dec: 'DES',
  }

  const formatCalendarDate = (dateText) => {
    const [day, month, year] = dateText.split(' ')
    return `${day.padStart(2, '0')} ${calendarMonthMap[month] || month.toUpperCase()} ${year}`
  }

  const formatCalendarTime = (timeText) => timeText.replace(/\s-\s/g, '–')

  const infoCards = [
    {
      id: '01',
      prompt: 'OPEN TO ALL',
      title: 'Oberta a tothom',
      description: 'La competició està oberta a estudiants de grau i màster de qualsevol universitat.',
      icon: 'fas fa-users',
      image: '/images/aessbot/photos/DSC01831.png',
      imageAlt: 'Participants d’AESSBot durant una activitat a l’aire lliure',
    },
    {
      id: '02',
      prompt: 'MATERIAL_AID',
      title: 'Ajut econòmic',
      description: 'Es reemborsaran fins a 100€ en material per equip participant, presentant les factures originals a nom d’AESS Estudiants.',
      icon: 'fas fa-coins',
      image: '/images/aessbot/photos/DSC01561.png',
      imageAlt: 'Robot AESSBot en fase de muntatge sobre una taula de treball',
    },
    {
      id: '03',
      prompt: 'TRAINING',
      title: 'Tallers i formació',
      description: 'Posarem a la vostra disposició tallers per aprendre noves eines i tecnologies aplicables al robot.',
      icon: 'fas fa-tools',
      image: '/images/aess/qui-som/qui-som4.jpeg',
      imageAlt: 'Sessió de tallers amb persones treballant en equip',
    },
    {
      id: '04',
      prompt: 'PRIZE_POOL',
      title: 'Premis',
      description: 'Més de 1000€ en premis repartits entre els millors equips classificats de la competició.',
      icon: 'fas fa-trophy',
      image: '/images/projectes/humanoide.jpeg',
      imageAlt: 'Robot en una taula de treball',
    },
    {
      id: '05',
      prompt: 'ECTS_CREDIT',
      title: 'Crèdits',
      description: 'Es pot obtenir 1 crèdit ECTS convalidable complint les condicions de participació.',
      icon: 'fas fa-certificate',
      image: '/images/aess/qui-som/qui-som1.jpeg',
      imageAlt: 'Membres d’AESS en una fotografia de grup a l’exterior',
    },
    {
      id: '06',
      prompt: 'WORKSHOP_TOOLS',
      title: 'Eines',
      description: 'Disposeu d’eines al nostre taller per avançar en el muntatge i les proves del robot.',
      icon: 'fas fa-screwdriver-wrench',
      image: '/images/projectes/cnc.jpeg',
      imageAlt: 'Eines i materials de taller per a fabricació i muntatge',
    },
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
      answer: 'La competició està oberta a estudiants de grau i màster de qualsevol universitat.',
      icon: 'fas fa-users'
    },
    {
      question: 'Les places són limitades?',
      answer: 'Sí, la competició està limitada a 16 equips de màxim 3 persones. En cas que hi hagi més sol·licituds, es prioritzen: (1) equips més grans, (2) estudiants ETSETB, (3) estudiants UPC, (4) data d\'inscripció.',
      icon: 'fas fa-sort-amount-down'
    },
    {
      question: 'Com funciona el procés d\'inscripció?',
      answer: 'Les inscripcions es tanquen l\'11 de febrer de 2026. Abans del 15 de febrer, rebreu un correu electrònic confirmant si heu estat admesos a la competició. Els equips acceptats hauran de portar la fiança de 50€ en efectiu el primer dia de taller. Si algun equip admès causa baixa, se li comunicarà immediatament al següent equip de la llista d\'espera.',
      icon: 'fas fa-clipboard-check'
    },

    // Equips
    {
      question: 'Puc participar sol?',
      answer: 'Sí. Tot i això, si s\'esgoten les places, es prioritzen equips amb més membres per facilitar la participació del màxim nombre d\'estudiants.',
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
      answer: 'Sí. La inscripció és gratuïta, però cal dipositar una fiança de 50€ per equip. Les condicions de retorn de la fiança estan detallades al reglament.',
      icon: 'fas fa-wallet'
    },
    {
      question: 'Reben els equips ajut econòmic pel material?',
      answer: 'Sí. Es reemborsarà fins a un màxim de 100€ (IVA inclòs) per equip en despeses justificades de material per a la construcció del robot. Per a tots els detalls sobre requisits, procediment i condicions, consulteu el reglament.',
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
      answer: 'Sí, es repartiran més de 1000€ en premis entre els millors equips classificats.',
      icon: 'fas fa-trophy'
    },
    {
      question: 'Puc convalidar crèdits ECTS?',
      answer: 'Sí. Per a estudiants de l\'ETSETB i FIB de la UPC, es reconeix 1 ECTS de forma automàtica complint els requisits. Per a estudiants d\'altres escoles de la UPC, s\'informarà a la vostra escola. Per a estudiants d\'altres universitats, consulteu amb nosaltres les opcions de reconeixement.',
      icon: 'fas fa-graduation-cap'
    },
    {
      question: 'Què s\'ha de fer per convalidar el crèdit?',
      answer: 'Per obtenir el crèdit ECTS és necessari: (1) Assistir a tots els tallers programats, i (2) Participar a la competició final amb un robot reglamentari i funcional. Per a estudiants de l\'ETSETB i FIB, el reconeixement és automàtic. Per a altres escoles de la UPC o altres universitats, contacta amb nosaltres.',
      icon: 'fas fa-check-circle'
    },

    // Format de la competició
    {
      question: 'Com funciona la competició?',
      answer: 'La competició té tres fases: (1) Fase de Lliga: cada equip disputa 8 combats contra oponents assignats aleatòriament. S\'atorguen 3 punts per victòria. Els 7 millors equips es classifiquen directament per a la Fase 3. (2) Fase de Repesca (Battle Royale): els equips no classificats participen en una batalla en un ring més gran. El guanyador obté la 8a plaça. (3) Fase d\'Eliminatòries: els 8 equips classificats disputen quarts de final, semifinals i final fins determinar el campió.',
      icon: 'fas fa-trophy'
    },

    // Retirada
    {
      question: 'Què passa si em retiro abans de la final?',
    answer: 'En cas de retirada sense causa justificada, la fiança no serà retornada. Per als detalls complets sobre les condicions de retirada, consulta el reglament amb el botó de descàrrega de la secció de competició.',
      icon: 'fas fa-exclamation-triangle'
    },

    // Materials
    {
      question: 'Hi ha restriccions sobre els materials del robot?',
      answer: 'Sí. El robot no pot incorporar armes tallants/perforants, dispositius d\'interferència electromagnètica, làsers que saturin sensors, ni elements que puguin danyar el Dohyo. Consulta la normativa per a la llista completa de restriccions.',
      icon: 'fas fa-ban'
    },

    // Accés al taller
    {
      question: 'Tinc accés al taller de l\'associació?',
      answer: 'Sí, els equips participants tindran accés al taller de l\'AESS per utilitzar eines i rebre seguiment. Els horaris es comunicaran després de l\'acceptació.',
      icon: 'fas fa-tools'
    }
  ]

  return (
    <div className="aessbot-page">
      <Analytics />
      <Hero
        title="AESSBot 2026"
        description="Dissenya, construeix i programa un minisumo autònom. Del primer prototip al combat final."
        asciiImage="/images/aessbot/Cartell-original-DIN.png"
        asciiTitleArt={heroBannerArt}
        asciiEyebrow={null}
      >
        <div className="hero-badge-container">
          <TerminalButton
            onClick={() => setIsRegistrationOpen(true)}
            ariaLabel="Inscriu-te a l'AESSBot"
            label="Inscriu-te"
            tone="primary"
            size="lg"
          />
        </div>
      </Hero>

      {renderSectionCommand('cat', './la-competicio.md')}
      <section className="overview-section section">
        <div className="container">
          <div className="competition-terminal">
            <div className="competition-terminal-bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <strong>./aessbot --show competition</strong>
            </div>
            <div className="competition-terminal-grid">
              <div className="competition-terminal-copy">
                <p className="competition-command">aessbot:~$ cat ./la-competicio.md</p>
                <h2>La competició</h2>
                <p>
                  Entra al ring i demostra qui és el rei del Minisumo. Dissenya un robot autònom
                  capaç de detectar l'oponent, atacar i mantenir-se dins del dohyo fins al combat final.
                </p>
                <ul className="competition-highlights">
                  <li>
                    <span className="competition-highlight-icon" aria-hidden="true">
                      <i className="fas fa-users"></i>
                    </span>
                    <span className="competition-highlight-text">Màxim 16 equips de fins a 3 persones.</span>
                  </li>
                  <li>
                    <span className="competition-highlight-icon" aria-hidden="true">
                      <i className="fas fa-university"></i>
                    </span>
                    <span className="competition-highlight-text">Obert a estudiants de qualsevol universitat.</span>
                  </li>
                  <li>
                    <span className="competition-highlight-icon" aria-hidden="true">
                      <i className="fas fa-trophy"></i>
                    </span>
                    <span className="competition-highlight-text">Més de 1000€ en premis.</span>
                  </li>
                  <li>
                    <span className="competition-highlight-icon" aria-hidden="true">
                      <i className="fas fa-certificate"></i>
                    </span>
                    <span className="competition-highlight-text">Convalida 1 crèdit ECTS.</span>
                  </li>
                </ul>
                <div className="competition-download">
                  <TerminalButton
                    href="/documents/Reglament.pdf"
                    download="AESSBot_Reglament.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel="Descarregar reglament"
                    label="Descarregar reglament"
                    tone="primary"
                    size="md"
                    className="competition-download-button"
                  />
                </div>
              </div>
              <figure className="competition-terminal-media">
                <img src="/images/aess/qui-som/qui-som6.jpeg" alt="Participants d'AESS treballant en un projecte" loading="lazy" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {renderSectionCommand('inspect', '--all ./participacio')}
      <section className="info-section section">
        <div className="container">
          <div className="info-terminal">
            <div className="info-terminal-bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <strong>./aessbot --show info</strong>
            </div>
            <div className="info-terminal-header">
              <p className="info-command">aessbot:~$ inspect --all ./participacio</p>
              <h2>Informació</h2>
              <p>Costos, ajuts i beneficis principals per preparar l'equip abans d'entrar al ring.</p>
            </div>
            <div className="info-grid">
              {infoCards.map((card) => (
                <article className="info-card" key={card.id}>
                  <figure className="info-card-media">
                    <img src={card.image} alt={card.imageAlt} loading="lazy" />
                  </figure>
                  <div className="info-card-content">
                    <div className="info-card-prompt">
                      <span>{card.id}</span>
                      <span className="info-card-prompt-icon" aria-hidden="true">
                        <i className={card.icon}></i>
                      </span>
                      <span className="info-card-prompt-label">{card.prompt}</span>
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {renderSectionCommand('timeline', '--sort=date ./sessions')}
      <section className="talleres-section section">
        <div className="container">
          <div className="calendar-terminal">
            <div className="calendar-terminal-bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <strong>./aessbot --show schedule</strong>
            </div>
            <div className="calendar-terminal-header">
              <p className="calendar-command">aessbot:~$ timeline --sort=date ./sessions</p>
              <h2>Calendari</h2>
              <p>Dates clau, tallers tècnics i seguiment fins a la gran final.</p>
            </div>
            <div className="calendar-ascii-wrap">
              <div className="calendar-ascii-heading" aria-hidden="true">
                <span>┌─ CALENDARI AESSBOT 2026</span>
                <span>7 NODES · FEB → MAI</span>
              </div>
              <ol className="calendar-list" aria-label="Calendari AESSBot 2026">
                {talleres.map((taller, index) => (
                  <li className={`calendar-entry${taller.final ? ' is-final' : ''}`} key={`${taller.fecha}-${taller.titulo}`}>
                    <div className="calendar-node" aria-hidden="true">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="calendar-entry-date">
                      <time>{formatCalendarDate(taller.fecha)}</time>
                      <span>{formatCalendarTime(taller.hora)}</span>
                    </div>
                    <div className="calendar-entry-copy">
                      <div className="calendar-entry-title">
                        <span>{taller.final ? '[ FINAL ]' : `[ SESSIÓ ${String(index + 1).padStart(2, '0')} ]`}</span>
                        <h3>{taller.titulo}</h3>
                      </div>
                      <p>{taller.desc}</p>
                    </div>
                    <div className="calendar-entry-location">
                      <span className="calendar-entry-location-label">
                        <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                        <span className="calendar-entry-location-name">{taller.aula}</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="calendar-ascii-end" aria-hidden="true">└─ END OF TIMELINE</div>
            </div>
            <div className="calendar-terminal-footer">
              <span>[ OK ]</span> 7 events loaded · ascii schedule ready
            </div>
          </div>
        </div>
      </section>

      {renderSectionCommand('dependencies', '--production')}
      <section className="sponsors-section section">
        <div className="sponsors-terminal-header sponsors-free-header">
          <h2>Amb l'ajuda de...</h2>
          <p>Entitats que fan possible l'AESSBot 2026.</p>
        </div>
        <div className="sponsors-free-stack">
          <section className="sponsor-category sponsor-category-free">
            <h2>Patrocinadors</h2>
            <div className="sponsor-logos-row sponsor-logos-row--pair">
              <div className="sponsor-item">
                <img src="/images/logos/logo-telecos.svg" alt="ETSETB" />
              </div>
              <div className="sponsor-item sponsor-item-official">
                <img
                  src="/images/logos/vento-build.svg"
                  alt="Vento.build"
                  className="sponsor-logo-wide"
                />
              </div>
            </div>
          </section>
          <section className="sponsor-category sponsor-category-free">
            <h2>Col·laboradors</h2>
            <div className="sponsor-logos-row">
              <div className="sponsor-item">
                <img src="/images/logos/logo-upc.svg" alt="UPC" />
              </div>
            </div>
          </section>
        </div>
      </section>

      {renderSectionCommand('history', '--editions')}
      <section className="editions-section section">
        <div className="container">
          <div className="editions-terminal">
            <div className="editions-terminal-bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <strong>./aessbot history --editions</strong>
            </div>
            <div className="editions-terminal-copy">
              <div className="editions-heading-row">
                <h2>Edicions Anteriors</h2>
              </div>

              <div className="editions-navigation-row" aria-label="Navegació d'edicions">
                <TerminalButton
                  type="button"
                  label="Següent"
                  ariaLabel="Edició següent"
                  tone="primary"
                  size="md"
                  symbol="<"
                  onClick={() => navigateEdition(-1)}
                />

                <div className="editions-timeline-shell">
                  <div className="editions-timeline" role="tablist" aria-label="Timeline d'edicions AESSBot">
                    <div className="editions-ascii-track">
                      {previousEditions.map((edition, index) => (
                        <Fragment key={edition.year}>
                          <button
                            className={`editions-year-node${index === activeEditionIndex ? ' is-active' : ''}`}
                            type="button"
                            role="tab"
                            aria-label={`Edició ${edition.year}`}
                            aria-selected={index === activeEditionIndex}
                            onClick={() => setActiveEditionIndex(index)}
                          >
                            <span className="editions-year-ascii" aria-hidden="true">
                              <span className="editions-year-ascii-top">┌────┐</span>
                              <span className="editions-year-ascii-year">{edition.year}</span>
                              <span className="editions-year-ascii-bottom">└────┘</span>
                            </span>
                          </button>
                          {index < previousEditions.length - 1 && (
                            <span className="editions-year-bridge" aria-hidden="true">────┼────</span>
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <TerminalButton
                  type="button"
                  label="Anterior"
                  ariaLabel="Edició anterior"
                  tone="primary"
                  size="md"
                  onClick={() => navigateEdition(1)}
                />
              </div>

              <div className="editions-history-panel">
                <div className="editions-video">
                  <div className="competition-video-label">
                    <span>REC</span>
                    <strong>{activeEdition.videoTitle}</strong>
                  </div>
                  <div className="video-wrapper youtube-embed">
                    <iframe
                      src={activeEdition.videoUrl}
                      title={`Vídeo ${activeEdition.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="editions-prizes">
                  <p className="editions-prizes-kicker">./premis/{activeEdition.year}.txt</p>
                  <h3>{activeEdition.title}</h3>
                  <ul>
                    {activeEdition.prizes.map((prize) => (
                      <li key={`${activeEdition.year}-${prize.place}`}>
                        <span>{prize.place}</span>
                        <strong>{prize.team}</strong>
                        <em>{prize.members}</em>
                      </li>
                    ))}
                  </ul>
                  <TerminalButton
                    href={activeEdition.albumUrl}
                    label="Àlbum de fotos"
                    ariaLabel="Àlbum de fotos"
                    tone="primary"
                    size="sm"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {renderSectionCommand('man', 'aessbot')}
      <FAQSection
        title="Tens dubtes?"
        intro="Manual ràpid per resoldre les preguntes més habituals de l'AESSBot 2026."
        items={faqs}
        variant="aessbot"
        seeAlso={{
          heading: 'SEE ALSO',
          label: 'Contacta amb nosaltres',
          ariaLabel: 'Contacta amb nosaltres',
          to: '/contact',
          tone: 'accent',
          size: 'sm',
        }}
      />
      <AESSBotRegistrationDrawer
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </div>
  )
}

export default AESSBot
