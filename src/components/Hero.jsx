import { useMemo } from 'react'
import './Hero.css'

const Hero = ({ badge, title, subtitle, description, image, stats, children, poster = false, terminal = false }) => {
  const heroVariant = title
    ? `hero-${title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
    : ''

  const terminalLogs = [
    { code: '[0x456E686F72]', text: '> boot aess-estudiants.service' },
    { code: '[0x61626F6E61]', status: '[ OK ]', text: 'kernel: robotics-community loaded' },
    { code: '[0x212056696E]', status: '[ OK ]', text: 'mount /campus-nord/upc' },
    { code: '[0x6520616C20]', status: '[ OK ]', text: 'load module: aessbot.minisumo' },
    { code: '[0x74616C6C65]', status: '[ OK ]', text: 'load module: cursos.tallers' },
    { code: '[0x7220692065]', status: '[ OK ]', text: 'load module: projectes.robotica' },
    { code: '[0x7420636F6E]', status: '[ OK ]', text: 'load module: comunitat.estudiants' },
    { code: '[0x766964656D]', text: '> checking materials ........ ready' },
    { code: '[0x206120756E]', text: '> checking motors ........... ready' },
    { code: '[0x6120636572]', text: '> checking sensors .......... ready' },
    { code: '[0x7665736121]', text: '> checking curiosity ........ unlimited' },
    { text: '> status: associacio inicialitzada' }
  ]

  const terminalLogDelays = useMemo(() => {
    const intervals = terminalLogs.map(() => 0.2 + Math.random())
    const total = intervals.reduce((sum, interval) => sum + interval, 0)
    let elapsed = 0

    return intervals.map((interval) => {
      elapsed += interval
      return `${(elapsed / total) * 4.8}s`
    })
  }, [])

  const renderStats = () => (
    stats && (
      <div className={`hero-stats ${poster ? 'hero-stats-poster' : ''}`}>
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-number">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    )
  )

  const renderTerminal = () => (
    <section className="hero-terminal" aria-label="Arrencada del terminal AESS">
      <h1 className="sr-only">{title} {subtitle}</h1>
      <pre className="hero-terminal-brand" aria-hidden="true">{`
█████╗ ███████╗███████╗███████╗
██╔══██╗██╔════╝██╔════╝██╔════╝
███████║█████╗  ███████╗███████╗
██╔══██║██╔══╝  ╚════██║╚════██║
██║  ██║███████╗███████║███████║
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝

███████╗███████╗████████╗██╗   ██╗██████╗ ██╗ █████╗ ███╗   ██╗████████╗███████╗
██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔══██╗████╗  ██║╚══██╔══╝██╔════╝
█████╗  ███████╗   ██║   ██║   ██║██║  ██║██║███████║██╔██╗ ██║   ██║   ███████╗
██╔══╝  ╚════██║   ██║   ██║   ██║██║  ██║██║██╔══██║██║╚██╗██║   ██║   ╚════██║
███████╗███████║   ██║   ╚██████╔╝██████╔╝██║██║  ██║██║ ╚████║   ██║   ███████║
╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝`}</pre>
      {description && <p className="hero-terminal-tagline">{description}</p>}
      <div className="hero-terminal-log">
        {terminalLogs.map((log, index) => (
          <span key={log.code || log.text} style={{ '--log-delay': terminalLogDelays[index] }}>
            {log.code && <strong>{log.code}</strong>}
            {log.code && ' '}
            {log.status && <em>{log.status}</em>}
            {log.status && ' '}
            {log.text}
          </span>
        ))}
      </div>
    </section>
  )

  return (
    <header
      className={`hero ${heroVariant} ${poster ? 'poster-hero' : ''} ${terminal ? 'terminal-hero' : ''}`}
      data-label={title || ''}
    >
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      <div className="hero-content">
        {terminal && !poster ? (
          <>
            {renderTerminal()}
            <div className="terminal-hero-actions">{children}</div>
            {renderStats()}
          </>
        ) : (
          <div className="hero-text">
            {badge && (
              <div className="hero-badge">
                <i className="fas fa-rocket"></i>
                <span>{badge}</span>
              </div>
            )}
            <h1 className="hero-title">
              {title && <span className="gradient-text">{title}</span>}
              {subtitle && <span className="hero-subtext">{subtitle}</span>}
            </h1>
            {description && (
              <p className="hero-description">{description}</p>
            )}
            {children}
            {!poster && renderStats()}
          </div>
        )}
        {image && !terminal && (
          <div className={`hero-visual ${poster ? 'poster-hero' : ''}`}>
            {poster ? (
              <img src={image} alt="Poster" className="poster-image" />
            ) : (
              <div className="floating-cube">
                <img src={image} alt="AESS Cube" className="cube" />
              </div>
            )}
          </div>
        )}
        {/* Stats shown after poster for poster mode - enables mobile reordering */}
        {poster && renderStats()}
      </div>
    </header>
  )
}

export default Hero
