import './Hero.css'

const Hero = ({ badge, title, subtitle, description, image, stats, children, poster = false }) => {
  return (
    <header className={`hero ${poster ? 'poster-hero' : ''}`}>
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
          {/* Stats shown in hero-text for all modes - CSS handles mobile reordering */}
          {stats && (
            <div className={`hero-stats ${poster ? 'hero-stats-poster' : ''}`}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {image && (
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
      </div>
    </header>
  )
}

export default Hero

