import { useMemo } from 'react'
import './Hero.css'

const Hero = ({
  badge,
  title,
  subtitle,
  description,
  image,
  stats,
  children,
  poster = false,
  terminal = false,
  asciiArt,
  asciiImage,
  asciiEyebrow,
  asciiTitleArt,
  asciiMeta = []
}) => {
  const heroVariant = title
    ? `hero-${title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
    : ''

  const normalizeAsciiArt = (art) => {
    const lines = art.replace(/^\n/, '').replace(/\n$/, '').split('\n')
    const indent = Math.min(
      ...lines
        .filter((line) => line.trim().length > 0)
        .map((line) => line.match(/^ */)?.[0].length ?? 0)
    )

    return lines.map((line) => line.slice(indent)).join('\n')
  }

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

  const renderTerminalText = (text) => {
    const trimmed = text.trim()
    const hasPrompt = trimmed.startsWith('>')
    const body = hasPrompt ? trimmed.slice(1).trimStart() : trimmed
    const firstSpaceIndex = body.indexOf(' ')
    const firstToken = firstSpaceIndex === -1 ? body : body.slice(0, firstSpaceIndex)
    const remainder = firstSpaceIndex === -1 ? '' : body.slice(firstSpaceIndex)

    return (
      <>
        {hasPrompt && <span className="terminal-symbol" aria-hidden="true">&gt;</span>}
        {hasPrompt && ' '}
        <span className="terminal-command">{firstToken}</span>
        {remainder}
      </>
    )
  }

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
            {renderTerminalText(log.text)}
          </span>
        ))}
      </div>
    </section>
  )

  const renderAsciiHero = () => (
    <>
      <div className="ascii-hero-copy">
        {asciiEyebrow !== null && (
          <p className="ascii-hero-path">{asciiEyebrow || `./${heroVariant.replace('hero-', '')}.md`}</p>
        )}
        {asciiTitleArt ? (
          <div className="ascii-hero-title-wrap">
            <h1 className="sr-only">{title}{subtitle ? ` ${subtitle}` : ''}</h1>
            {normalizeAsciiArt(asciiTitleArt).split(/\n\s*\n/).map((block, index) => (
              <pre className="ascii-hero-title ascii-hero-title--art" aria-hidden="true" key={index}>{block}</pre>
            ))}
          </div>
        ) : (
          <h1 className="ascii-hero-title">
            <span>{title}</span>
            {subtitle && <strong>{subtitle}</strong>}
          </h1>
        )}
        {description && <p className="ascii-hero-description">{description}</p>}
        {children && <div className="ascii-hero-actions">{children}</div>}
        {renderStats()}
      </div>
      {asciiImage ? (
        <figure className="ascii-hero-poster">
          <img src={asciiImage} alt={`Cartell ${title}`} />
        </figure>
      ) : (
        <div className="ascii-hero-visual" aria-hidden="true">
          <div className="ascii-hero-bar">
            <span></span>
            <span></span>
            <span></span>
            <strong>render --ascii</strong>
          </div>
          <pre className="ascii-hero-art">{asciiArt}</pre>
          {asciiMeta.length > 0 && (
            <div className="ascii-hero-meta">
              {asciiMeta.map((item) => <span key={item}>{item}</span>)}
            </div>
          )}
        </div>
      )}
    </>
  )

  return (
    <header
      className={`hero ${heroVariant} ${poster ? 'poster-hero' : ''} ${terminal ? 'terminal-hero' : ''} ${asciiArt || asciiImage ? 'ascii-hero' : ''}`}
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
        {asciiArt || asciiImage ? (
          renderAsciiHero()
        ) : terminal && !poster ? (
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
