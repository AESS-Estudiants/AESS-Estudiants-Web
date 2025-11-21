import { useState, useEffect } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="carousel-container">
      <button 
        className="carousel-nav carousel-prev" 
        onClick={goToPrevious}
        aria-label="Anterior"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <div className="carousel-track">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      
      <button 
        className="carousel-nav carousel-next" 
        onClick={goToNext}
        aria-label="Següent"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel

