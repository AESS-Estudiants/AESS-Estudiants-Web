import { useId } from 'react'
import FAQ from './FAQ'
import TerminalButton from './TerminalButton'
import './FAQSection.css'

const FAQSection = ({
  items,
  title = 'Tens dubtes?',
  intro,
  command,
  commandPrefix = 'aess:~$',
  variant = 'home',
  seeAlso,
  className = '',
  ariaLabel,
}) => {
  const questionsId = useId()
  const seeAlsoId = useId()

  const sectionClasses = [
    'faq-section',
    'section',
    `faq-section--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={sectionClasses} aria-label={ariaLabel ?? title}>
      <div className="container">
        {command && (
          <div className="faq-section-command">
            <p>
              <span className="terminal-prompt">{commandPrefix}</span>{' '}
              <span className="terminal-command">{command}</span>
            </p>
          </div>
        )}

        <div className={`faq-manual faq-manual--${variant}`}>
          <div className="faq-man-intro">
            <h2>{title}</h2>
            {intro && <p className="faq-manual-intro">{intro}</p>}
          </div>

          <div className="faq-man-page">
            <section className="faq-man-section" aria-labelledby={questionsId}>
              <h3 id={questionsId}>QUESTIONS</h3>
              <FAQ items={items} />
            </section>

            {seeAlso && (
              <section className="faq-man-section faq-man-see-also" aria-labelledby={seeAlsoId}>
                <h3 id={seeAlsoId}>{seeAlso.heading ?? 'SEE ALSO'}</h3>
                {seeAlso.description && <p className="faq-manual-see-also-copy">{seeAlso.description}</p>}
                <TerminalButton
                  to={seeAlso.to}
                  href={seeAlso.href}
                  label={seeAlso.label}
                  ariaLabel={seeAlso.ariaLabel ?? seeAlso.label}
                  tone={seeAlso.tone ?? 'primary'}
                  size={seeAlso.size ?? 'md'}
                  format={seeAlso.format}
                  className={seeAlso.className}
                />
              </section>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
