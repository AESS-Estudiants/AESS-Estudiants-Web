import { useMemo } from 'react'
import './Hero.css'

const Hero = ({ badge, title, subtitle, description, image, stats, children, poster = false, terminal = false }) => {
  const heroVariant = title
    ? `hero-${title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
    : ''

  const terminalLogs = [
  { code: '[0x456E]', text: '> boot aess-estudiants.service' },

  { code: '[0x686F]', status: '[ OK ]', text: 'mount /upc/etsetb/campus-nord/omega/s203' },
  { code: '[0x7261]', status: '[ OK ]', text: 'detected students who say "això ho podem fer nosaltres"' },

  { code: '[0x626F]', status: '[ OK ]', text: 'load module: aessbot' },
  { code: '[0x6E61]', status: '[ OK ]', text: 'load module: courses' },
  { code: '[0x2120]', status: '[ OK ]', text: 'load module: projects' },

  { code: '[0x504C4134]', status: '[ OK ]', text: 'start daemon: perreo coding' },

  { code: '[0x6C6C]', status: '[ OK ]', text: 'checking 3D printers...' },
  { code: '[0x6572]', status: '[WARN]', text: 'soldering iron temperature: probably too hot' },
  { code: '[0x2072]', status: '[ERR]', text: 'found bug: it was plugged backwards' },

  { code: '[0x756E]', status: '[ OK ]', text: 'fsck /projects: clean, 42 ideas pending' },
  { code: '[0x6120]', status: '[ OK ]', text: 'network: new members welcome' },
  { code: '[0x626972]', status: '[ OK ]', text: 'chmod +rwx /students/ideas' },
  { code: '[0x677261]', status: '[ OK ]', text: 'cron: after-class project days scheduled' },

  { code: '[0x746973]', status: '[ OK ]', text: 'checking curiosity ..... unlimited' },

  { text: '> status: association initialized' },
  { text: '> next: join a workshop · start a project · build something' }
];

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
