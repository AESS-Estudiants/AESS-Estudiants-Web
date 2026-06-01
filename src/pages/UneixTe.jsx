import { Analytics } from '@vercel/analytics/react'
import Hero from '../components/Hero'
import './UneixTe.css'

const whatsappLink = 'https://chat.whatsapp.com/H8rNzFeSTG9BGTsCGX8DL8?mode=gi_t'

const UneixTe = () => {
  return (
    <div className="uneixte-page">
      <Analytics />
      <Hero
        badge="Comença a participar"
        title="Uneix-te"
        description="Vols conèixer AESS, veure el taller o participar en projectes? Pots acostar-te al teu ritme o apuntar-te a una jornada de portes obertes."
        image="/images/logos/aess/CubBlanc.svg"
      />

      <section className="join-options-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Dues maneres de començar</h2>
            <p className="section-subtitle">
              No cal tenir coneixements previs ni venir amb una idea tancada. La millor manera d'entendre AESS és conèixer-nos, veure què fem i decidir com t'agradaria participar.
            </p>
          </div>

          <div className="join-options-grid">
            <article className="join-option-card">
              <div className="join-option-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <span className="join-option-kicker">Opció flexible</span>
              <h3>Uneix-te al teu ritme</h3>
              <p>
                Entra al grup de WhatsApp de noves incorporacions, presenta't i queda amb nosaltres quan hi hagi membres al taller.
              </p>
              <ol className="join-steps">
                <li>Entra al grup de WhatsApp.</li>
                <li>Presenta't breument: nom, estudis i què t'interessa.</li>
                <li>Vine al taller quan et vagi bé.</li>
                <li>Coneix els projectes i decideix si vols participar activament.</li>
              </ol>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fab fa-whatsapp"></i> Entrar al grup
              </a>
            </article>

            <article className="join-option-card join-event-card">
              <div className="join-option-icon">
                <i className="fas fa-door-open"></i>
              </div>
              <span className="join-option-kicker">Proper event</span>
              <h3>Jornada de portes obertes</h3>
              <p>
                Si prefereixes una primera visita guiada, apunta't a la propera jornada. T'ensenyarem el taller, els projectes actius i com pots formar part de l'associació.
              </p>
              <div className="join-event-details">
                <div>
                  <i className="far fa-calendar"></i>
                  <span>19 de juny</span>
                </div>
                <div>
                  <i className="far fa-clock"></i>
                  <span>15:00 - 21:00</span>
                </div>
                <div>
                  <i className="fas fa-location-dot"></i>
                  <span>Aula S203 · Edifici Omega · Campus Nord UPC</span>
                </div>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fas fa-user-plus"></i> Apuntar-me a la jornada
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="join-visit-section section">
        <div className="container">
          <div className="join-visit-panel">
            <div>
              <span className="join-option-kicker">Què trobaràs?</span>
              <h2>Una primera visita sense compromís</h2>
              <p>
                Podràs veure l'espai, preguntar dubtes, descobrir projectes de robòtica i electrònica, i conèixer membres que ja participen a AESS.
              </p>
            </div>
            <div className="join-visit-list">
              <span><i className="fas fa-screwdriver-wrench"></i> Taller i eines</span>
              <span><i className="fas fa-robot"></i> Projectes actius</span>
              <span><i className="fas fa-users"></i> Comunitat d'estudiants</span>
              <span><i className="fas fa-graduation-cap"></i> Aprenentatge pràctic</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UneixTe
