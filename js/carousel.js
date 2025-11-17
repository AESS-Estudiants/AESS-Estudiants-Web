document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    if (!carousel) return;

    // Array de imágenes del carrusel
    const imageFiles = [
        'images/aessbot/photos/DSC01561.png',
        'images/aessbot/photos/DSC01831.png',
        'images/cursos/cartell-din4.png',
        'images/aessbot/Cartell-original-DIN.png'
    ];
    
    let slides = [];
    let indicators = [];
    let currentIndex = 0;
    let autoplayInterval;
    const slideInterval = 3000; // 3 segundos

    // Inicializar el carrusel
    function initCarousel() {
        // Limpiar el carrusel y los indicadores
        carousel.innerHTML = '';
        if (indicatorsContainer) indicatorsContainer.innerHTML = '';
        
        // Crear slides para cada imagen
        imageFiles.forEach((image, index) => {
            // Crear slide
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            
            // Crear imagen
            const img = document.createElement('img');
            img.src = image;
            img.alt = `Imatge ${index + 1} de la competició AESSBot 2026`;
            img.loading = 'lazy';
            
            slide.appendChild(img);
            carousel.appendChild(slide);
            
            // Crear indicadores
            if (indicatorsContainer) {
                const indicator = document.createElement('span');
                indicator.className = 'indicator';
                indicator.dataset.slide = index;
                indicator.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(indicator);
                indicators.push(indicator);
            }
        });
        
        // Actualizar referencias
        slides = document.querySelectorAll('.carousel-slide');
        
        // Iniciar con el primer slide activo
        updateActiveSlide();
        
        // Iniciar autoplay
        startAutoPlay();
    }

    // Actualizar el slide activo
    function updateActiveSlide() {
        // Remover la clase 'active' de todos los slides e indicadores
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Añadir la clase 'active' al slide actual
        slides[currentIndex].classList.add('active');
        if (indicators[currentIndex]) {
            indicators[currentIndex].classList.add('active');
        }
    }

    // Navegar a un slide específico
    function goToSlide(index) {
        currentIndex = (index + imageFiles.length) % imageFiles.length;
        updateActiveSlide();
    }

    // Slide anterior
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Siguiente slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // Iniciar autoplay
    function startAutoPlay() {
        stopAutoPlay();
        autoplayInterval = setInterval(() => {
            nextSlide();
        }, slideInterval);
    }
    
    // Detener autoplay
    function stopAutoPlay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    // Event Listeners
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
        });
    }
    
    // Pausar al hacer hover
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
        
        // Soporte táctil
        let touchStartX = 0;
        
        carouselContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            stopAutoPlay();
        }, { passive: true });
        
        carouselContainer.addEventListener('touchend', (e) => {
            if (!touchStartX) return;
            
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
            
            touchStartX = 0;
            startAutoPlay();
        }, { passive: true });
    }
    
    // Inicializar el carrusel
    initCarousel();
    
    // Pausar autoplay cuando la pestaña no está activa
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    });
});