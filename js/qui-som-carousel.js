document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  const indicators = document.querySelectorAll('.carousel-indicator');
  
  let currentIndex = 0;
  let slideInterval;
  const slideDuration = 5000; // 5 seconds
  
  // Set initial active slide
  updateActiveSlide(0);
  
  // Auto-advance slides
  function startCarousel() {
    slideInterval = setInterval(nextSlide, slideDuration);
  }
  
  // Stop auto-advancing when user interacts with carousel
  function pauseCarousel() {
    clearInterval(slideInterval);
  }
  
  // Resume auto-advancing after a delay
  function resumeCarousel() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideDuration);
  }
  
  // Go to next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateActiveSlide(currentIndex);
  }
  
  // Go to previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateActiveSlide(currentIndex);
  }
  
  // Update active slide and indicators
  function updateActiveSlide(index) {
    // Update carousel track position
    carousel.style.transform = `translateX(-${index * 100}%)`;
    
    // Update active indicator
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    
    // Update slide classes for animations
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  
  // Event listeners
  prevButton.addEventListener('click', () => {
    prevSlide();
    pauseCarousel();
    setTimeout(resumeCarousel, 10000); // Resume after 10 seconds of inactivity
  });
  
  nextButton.addEventListener('click', () => {
    nextSlide();
    pauseCarousel();
    setTimeout(resumeCarousel, 10000); // Resume after 10 seconds of inactivity
  });
  
  // Indicator click events
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateActiveSlide(currentIndex);
      pauseCarousel();
      setTimeout(resumeCarousel, 10000); // Resume after 10 seconds of inactivity
    });
  });
  
  // Pause on hover
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.addEventListener('mouseenter', pauseCarousel);
  carouselContainer.addEventListener('mouseleave', resumeCarousel);
  
  // Touch events for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  carouselContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    pauseCarousel();
  }, { passive: true });
  
  carouselContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
    setTimeout(resumeCarousel, 10000); // Resume after 10 seconds of inactivity
  }, { passive: true });
  
  function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance to consider it a swipe
    const difference = touchStartX - touchEndX;
    
    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }
  
  // Start the carousel
  startCarousel();
  
  // Pause carousel when tab is not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      pauseCarousel();
    } else {
      resumeCarousel();
    }
  });
});
