import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import './Projectes.css'

const Projectes = () => {
  const projectes = [
    {
      name: 'Smart Ring',
      icon: 'fas fa-ring',
      status: 'En curs',
      description: 'Desenvolupament d\'un anell intel·ligent amb sensors i connectivitat per monitoritzar activitat física i altres funcions innovadores.',
      estado: 'En desenvolupament'
    },
    {
      name: 'Delta 2.0',
      icon: 'fas fa-robot',
      status: 'En curs',
      description: 'Robot delta de precisió per a tasques d\'automatització i pick-and-place. Segona versió millorada amb millor control i velocitat.',
      estado: 'En desenvolupament'
    },
    {
      name: 'Drons de Velocitat',
      icon: 'fas fa-helicopter',
      status: 'En curs',
      description: 'Projecte de disseny i construcció de drons optimitzats per a competicions de velocitat i races FPV.',
      estado: 'En desenvolupament'
    }
  ]

  const galleryImages = [
    '/images/projectes/delta.jpeg',
    '/images/projectes/humanoide.jpeg',
    '/images/projectes/immove.jpeg',
    '/images/projectes/velocista.jpeg',
    '/images/projectes/velocista2.jpeg',
    '/images/projectes/cnc.jpeg',
    '/images/projectes/aranya.jpeg',
    '/images/projectes/aranya2.jpeg'
  ]

  return (
    <div className="projectes-page">
      <Hero
        title="Els nostres"
        subtitle="Projectes"
        description="Descobreix les iniciatives en robòtica i electrònica que impulsem des del taller."
        image="/images/logos/aess/CubBlanc.svg"
      >
        <div className="hero-buttons">
          <Link to="#participa" className="btn btn-secondary">
            <i className="fas fa-users"></i> Uneix-te a l'equip
          </Link>
        </div>
      </Hero>

      <section className="intro-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Els nostres projectes</h2>
            <p className="section-subtitle">
              A l'associació es fan projectes de robòtica i electrònica molt diversos que donen resposta a les inquietuds dels seus membres.
              Es realitzen projectes com robots delta, minisumos, velocistes, braços robot, drons, etc.
            </p>
          </div>
          <div className="gallery-wrapper">
            <Carousel images={galleryImages} />
          </div>
        </div>
      </section>

      <section className="projectes-actius-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projectes en curs</h2>
            <p className="section-subtitle">
              Actualment s'estan desenvolupant aquests projectes, però si tens propostes de nous projectes es poden començar més!
            </p>
          </div>
          <div className="projectes-grid">
            {projectes.map((projecte, index) => (
              <div key={index} className="projecte-card">
                <div className="project-status">
                  <span className="status-indicator"></span>
                  <span className="status-text">{projecte.status}</span>
                </div>
                <div className="project-icon">
                  <i className={projecte.icon}></i>
                </div>
                <h3>{projecte.name}</h3>
                <p>{projecte.description}</p>
                <div className="project-estado">
                  <strong>Estat:</strong> {projecte.estado}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="legacy-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">També participem en...</h2>
            <p className="section-subtitle">
              A part de fer projectes per la nostra compte, també ens agrada fer més activitats com participar en competicions i fer xerrades.
            </p>
          </div>
          <div className="legacy-grid">
            <div className="legacy-card">
              <div className="legacy-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Competicions i hacks</h3>
              <p>Ens agrada participar en aquest tipus de competicions en equips, passar-nos-ho bé, aprendre i divertir-nos junts.</p>
            </div>
            <div className="legacy-card">
              <div className="legacy-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Xerrades</h3>
              <p>Realitzem xerrades a col·legis, ESO i batxillerat que vénen a la UPC i aquest tipus d'esdeveniments.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="participa" className="participa-section section">
        <div className="container">
          <div className="participa-card">
            <div className="participa-badge">
              <i className="fas fa-hands-helping"></i>
              Vols formar part?
            </div>
            <h2>Vols participar en un projecte?</h2>
            <p>
              Tens una idea de projecte o et vols unir a algun dels nostres projectes actius? A AESS Estudiants valorem la creativitat
              i l'entusiasme de persones com tu. Sigues part del nostre equip i dóna vida a projectes innovadors en robòtica i tecnologia!
            </p>
            <Link to="/#com-participar-section" className="btn btn-primary btn-large">
              <i className="fas fa-paper-plane"></i> Fes-te membre
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projectes

