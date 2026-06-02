import './Hero.css'

const Hero = ({ badge, title, subtitle, description, image, stats, children, poster = false, terminal = false }) => {
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
      <div className="hero-terminal-log">
        <span><strong>[0x456E686F72]</strong> &gt; boot aess-estudiants.service</span>
        <span><strong>[0x61626F6E61]</strong> <em>[ OK ]</em> kernel: robotics-community loaded</span>
        <span><strong>[0x212056696E]</strong> <em>[ OK ]</em> mount /campus-nord/upc</span>
        <span><strong>[0x6520616C20]</strong> <em>[ OK ]</em> load module: aessbot.minisumo</span>
        <span><strong>[0x74616C6C65]</strong> <em>[ OK ]</em> load module: cursos.tallers</span>
        <span><strong>[0x7220692065]</strong> <em>[ OK ]</em> load module: projectes.robotica</span>
        <span><strong>[0x7420636F6E]</strong> <em>[ OK ]</em> load module: comunitat.estudiants</span>
        <span><strong>[0x766964656D]</strong> &gt; checking materials ........ ready</span>
        <span><strong>[0x206120756E]</strong> &gt; checking motors ........... ready</span>
        <span><strong>[0x6120636572]</strong> &gt; checking sensors .......... ready</span>
        <span><strong>[0x7665736121]</strong> &gt; checking curiosity ........ unlimited</span>
        <span>&gt; status: associacio inicialitzada</span>
      </div>
      <pre className="hero-terminal-art" aria-hidden="true">{`
        .-----------------------.
       /  AESSBOT // MINISUMO   \\
      |   [ o ]           [ o ]  |
      |        ___     ___       |
      |       |___|___|___|      |
      |          /  UPC  \\       |
       \\_____.--'--------'--.___/
          O                  O
        sensors: ON  motors: READY
`}</pre>
    </section>
  )

  return (
    <header className={`hero ${poster ? 'poster-hero' : ''} ${terminal ? 'terminal-hero' : ''}`}>
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      <div className="hero-content">
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
          {/* Stats shown inline for non-poster mode */}
          {!poster && renderStats()}
        </div>
        {terminal && !poster && renderTerminal()}
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
