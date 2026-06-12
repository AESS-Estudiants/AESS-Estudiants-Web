import { useState } from 'react'
import './FAQ.css'

const FAQ = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? 'active' : ''}`}
        >
          <button
            className="faq-question"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span className="faq-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="faq-toggle" aria-hidden="true">
              [{openIndex === index ? '-' : '+'}]
            </span>
            <span className="faq-question-text">{item.question}</span>
          </button>
          <div className="faq-answer">
            <p><span>ANSWER</span>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQ
