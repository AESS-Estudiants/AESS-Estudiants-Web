import { useEffect, useRef } from 'react'
import './AESSBotRegistrationDrawer.css'

const registrationFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScciiXmQMnUtMhncWi28Q-ktjAPgIQtR8Ay9EgmTJtKJdQCVg/viewform?embedded=true'

const AESSBotRegistrationDrawer = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef(null)
  const previouslyFocusedElementRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousBodyPosition = document.body.style.position
    const previousBodyTop = document.body.style.top
    const previousBodyWidth = document.body.style.width
    const previousHtmlOverflow = document.documentElement.style.overflow
    const scrollPosition = window.scrollY
    previouslyFocusedElementRef.current = document.activeElement
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollPosition}px`
    document.body.style.width = '100%'
    document.documentElement.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.body.style.position = previousBodyPosition
      document.body.style.top = previousBodyTop
      document.body.style.width = previousBodyWidth
      document.documentElement.style.overflow = previousHtmlOverflow
      window.scrollTo(0, scrollPosition)
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocusedElementRef.current?.focus()
    }
  }, [isOpen, onClose])

  return (
    <div
      className={`aessbot-registration-drawer ${isOpen ? 'is-open' : ''}`}
      aria-hidden={!isOpen}
    >
      <button
        className="aessbot-registration-backdrop"
        type="button"
        onClick={onClose}
        aria-label="Tancar el formulari d'inscripció"
        tabIndex={isOpen ? 0 : -1}
      />

      <aside
        className="aessbot-registration-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="aessbot-registration-title"
      >
        <header className="aessbot-registration-header">
          <button
            ref={closeButtonRef}
            type="button"
            className="aessbot-registration-close"
            onClick={onClose}
            aria-label="Tancar el formulari d'inscripció"
          >
            [ ESC ] ×
          </button>
          <h2 id="aessbot-registration-title">Inscriu el teu equip</h2>
          <p>Completa el formulari per entrar al ring de l'AESSBot 2026.</p>
        </header>

        <div className="aessbot-registration-form">
          <iframe
            src={registrationFormUrl}
            title="Formulari d'inscripció AESSBot"
            loading="lazy"
            scrolling="no"
          >
            S'està carregant el formulari...
          </iframe>
        </div>
      </aside>
    </div>
  )
}

export default AESSBotRegistrationDrawer
