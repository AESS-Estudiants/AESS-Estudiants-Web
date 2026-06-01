import { useState, useEffect, useRef, useCallback } from 'react'
import './Carousel.css'

const SLIDE_INTERVAL_MS = 6500

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const isPausedRef = useRef(false)
  const carouselRef = useRef(null)

  useEffect(() => {
    if (images.length <= 1) return undefined

    const timer = setInterval(() => {
      if (isPausedRef.current) return

      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, SLIDE_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [images.length])

  const pauseCarousel = useCallback(() => {
    isPausedRef.current = true
    setIsPaused(true)
  }, [])

  const resumeCarousel = useCallback(() => {
    isPausedRef.current = false
    setIsPaused(false)
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return undefined

    carousel.addEventListener('mouseenter', pauseCarousel)
    carousel.addEventListener('mouseleave', resumeCarousel)
    carousel.addEventListener('pointerenter', pauseCarousel)
    carousel.addEventListener('pointerleave', resumeCarousel)
    carousel.addEventListener('focusin', pauseCarousel)
    carousel.addEventListener('focusout', resumeCarousel)

    return () => {
      carousel.removeEventListener('mouseenter', pauseCarousel)
      carousel.removeEventListener('mouseleave', resumeCarousel)
      carousel.removeEventListener('pointerenter', pauseCarousel)
      carousel.removeEventListener('pointerleave', resumeCarousel)
      carousel.removeEventListener('focusin', pauseCarousel)
      carousel.removeEventListener('focusout', resumeCarousel)
    }
  }, [pauseCarousel, resumeCarousel])

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
    <div
      ref={carouselRef}
      className={`carousel-container ${isPaused ? 'is-paused' : ''}`}
      onMouseEnter={pauseCarousel}
      onMouseOver={pauseCarousel}
      onMouseLeave={resumeCarousel}
      onPointerEnter={pauseCarousel}
      onPointerOver={pauseCarousel}
      onPointerLeave={resumeCarousel}
      onFocusCapture={pauseCarousel}
      onBlurCapture={resumeCarousel}
      data-paused={isPaused}
    >
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
            style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
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
