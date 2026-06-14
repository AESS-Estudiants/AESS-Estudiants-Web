import { Analytics } from '@vercel/analytics/react'
import Hero from '../components/Hero'
import TerminalButton from '../components/TerminalButton'
import './AESSBotInscripcio.css'

const reminders = [
  {
    icon: 'fas fa-calendar-times',
    label: 'DEADLINE',
    title: "Data límit d'inscripció",
    text: <>Les inscripcions tanquen l'<strong>11 de febrer de 2026</strong> a les 23:59. No deixis la teva inscripció per l'últim moment!</>,
  },
  {
    icon: 'fas fa-users',
    label: 'TEAM_LIMIT',
    title: 'Places limitades',
    text: <>Només hi ha <strong>16 equips disponibles</strong>. Si s'esgoten les places, se seguiran els criteris de prioritat de la normativa.</>,
  },
  {
    icon: 'fas fa-euro-sign',
    label: 'DEPOSIT',
    title: 'Fiança retornable',
    text: <>Cal abonar una <strong>fiança de 50€ per equip</strong> el primer dia de taller. Consulta el reglament per a les condicions de retorn.</>,
  },
  {
    icon: 'fas fa-user-graduate',
    label: 'REQUIREMENTS',
    title: "Requisit d'estudiant",
    text: <>Tots els participants han de ser <strong>estudiants de grau o màster</strong> de qualsevol universitat.</>,
  },
]

const registrationSteps = [
  {
    icon: 'fas fa-hourglass-half',
    title: "Espera al tancament d'inscripcions",
    text: <>Un cop enviada la teva inscripció, cal esperar fins a l'<strong>11 de febrer de 2026</strong>, quan es tanquen les inscripcions oficials i s'apliquen els criteris de prioritat.</>,
  },
  {
    icon: 'fas fa-check-circle',
    title: "Validació d'inscripcions",
    text: <>L'organització revisarà totes les inscripcions i validarà que compleixin els requisits. Recordeu que la fiança es paga al primer taller en metàl·lic i amb l'import exacte.</>,
  },
  {
    icon: 'fas fa-rocket',
    title: 'Correu de benvinguda i convocatòria',
    text: <>Rebràs un correu <strong>com a màxim el 13 de febrer de 2026 a les 23:59</strong> confirmant si el teu equip ha estat admès o queda a la llista d'espera.</>,
  },
]

const renderSectionCommand = (command, argument) => (
  <>
    <div className="inscripcio-section-command">
      <div className="container">
        <p>
          <span className="terminal-prompt">aessbot:~$</span>{' '}
          <span className="terminal-command">{command}</span> {argument}
        </p>
      </div>
    </div>
    <div className="inscripcio-section-divider" aria-hidden="true"></div>
  </>
)

const TerminalBar = ({ children }) => (
  <div className="inscripcio-terminal-bar" aria-hidden="true">
    <span></span>
    <span></span>
    <span></span>
    <strong>{children}</strong>
  </div>
)

const AESSBotInscripcio = () => (
  <div className="inscripcio-page">
    <Analytics />

    <Hero
      title="AESSBot"
      subtitle="Inscripció"
      description="Prepara l'equip, revisa els requisits i completa la inscripció per entrar al ring."
      asciiImage="/images/aessbot/Cartell-original-DIN.png"
      asciiEyebrow="./inscripcio-aessbot-2026.md"
    >
      <div className="hero-badge-container">
        <TerminalButton
          href="#formulari-inscripcio"
          ariaLabel="Anar al formulari d'inscripció"
          label="Anar al formulari"
          tone="primary"
          size="lg"
        />
        <TerminalButton
          to="/aessbot"
          ariaLabel="Tornar a la pàgina AESSBot"
          label="Veure AESSBot"
          tone="accent"
          size="sm"
          symbol="<"
        />
      </div>
    </Hero>

    {renderSectionCommand('check', '--all ./abans-d-inscriure')}
    <section className="reminders-section section">
      <div className="container">
        <div className="inscripcio-terminal">
          <TerminalBar>./aessbot --check requirements</TerminalBar>
          <div className="inscripcio-terminal-header">
            <p className="inscripcio-command">aessbot:~$ check --all ./abans-d-inscriure</p>
            <h2>Abans d'inscriure't</h2>
            <p>Revisa aquests punts clau abans d'enviar les dades del teu equip.</p>
          </div>
          <div className="reminders-grid">
            {reminders.map((reminder, index) => (
              <article className="reminder-card" key={reminder.label}>
                <div className="reminder-prompt">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <i className={reminder.icon} aria-hidden="true"></i>
                  <span>{reminder.label}</span>
                </div>
                <h3>{reminder.title}</h3>
                <p>{reminder.text}</p>
              </article>
            ))}
          </div>
          <div className="rules-callout">
            <div>
              <span className="rules-callout-icon" aria-hidden="true"><i className="fas fa-book-open"></i></span>
              <p><strong>Llegeix la normativa oficial</strong> per conèixer totes les especificacions tècniques i condicions de participació.</p>
            </div>
            <TerminalButton
              href="/documents/Reglament.pdf"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Descarregar normativa oficial"
              label="Descarregar normativa"
              tone="primary"
              size="sm"
            />
          </div>
        </div>
      </div>
    </section>

    {renderSectionCommand('run', './formulari-inscripcio')}
    <section className="form-section section" id="formulari-inscripcio">
      <div className="container">
        <div className="form-terminal">
          <TerminalBar>./aessbot --run registration-form</TerminalBar>
          <div className="inscripcio-terminal-header">
            <p className="inscripcio-command">aessbot:~$ run ./formulari-inscripcio</p>
            <h2>Inscriu el teu equip</h2>
            <p>Omple el formulari per inscriure el teu equip a l'AESSBot 2026.</p>
          </div>
          <div className="form-embed">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScciiXmQMnUtMhncWi28Q-ktjAPgIQtR8Ay9EgmTJtKJdQCVg/viewform?embedded=true"
              width="100%"
              height="1000"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Formulari d'inscripció AESSBot"
            >
              S'està carregant el formulari...
            </iframe>
          </div>
          <div className="form-terminal-footer"><span>[ READY ]</span> formulari carregat · connexió segura</div>
        </div>
      </div>
    </section>

    {renderSectionCommand('next', '--after=registration')}
    <section className="post-registration-section section">
      <div className="container">
        <div className="inscripcio-terminal">
          <TerminalBar>./aessbot --show next-steps</TerminalBar>
          <div className="inscripcio-terminal-header">
            <p className="inscripcio-command">aessbot:~$ next --after=registration</p>
            <h2>Què passa després?</h2>
            <p>Un cop enviat el formulari, aquest és el procés fins a l'admissió de l'equip.</p>
          </div>
          <ol className="registration-steps">
            {registrationSteps.map((step, index) => (
              <li className="registration-step" key={step.title}>
                <div className="registration-step-node" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="registration-step-content">
                  <span className="registration-step-status"><i className={step.icon}></i> STEP_{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="post-registration-cta">
            <p>Tens dubtes sobre el procés d'inscripció?</p>
            <TerminalButton to="/contact" ariaLabel="Contacta amb nosaltres" label="Contacta'ns" tone="accent" size="md" />
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default AESSBotInscripcio
