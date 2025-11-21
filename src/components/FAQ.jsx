import { useState } from 'react'
import './FAQ.css'

const FAQ = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0)

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
            <i className={item.icon || 'fas fa-question-circle'}></i>
            <span>{item.question}</span>
            <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
          </button>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQ

