// Efecto de transición en la barra de navegación al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    // Añadir clase 'scrolled' al cargar la página si hay scroll
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    }
    
    // Añadir o quitar clase 'scrolled' al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Marcar el enlace activo en la barra de navegación
    function setActiveNavItem() {
        const currentLocation = window.location.pathname;
        const navLinks = document.querySelectorAll('.navbar a');
        
        navLinks.forEach(link => {
            // Obtener la ruta del enlace
            const linkPath = new URL(link.href).pathname;
            
            // Comprobar si la ruta actual coincide con la ruta del enlace
            if (currentLocation.endsWith(linkPath)) {
                // Eliminar la clase 'active' de todos los enlaces
                navLinks.forEach(link => link.classList.remove('active'));
                // Añadir la clase 'active' al enlace actual
                link.classList.add('active');
            }
            
            // Caso especial para la página de inicio
            if (currentLocation.endsWith('/') || currentLocation.endsWith('index.html')) {
                const homeLink = document.querySelector('.navbar a[href="index.html"]');
                if (homeLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    homeLink.classList.add('active');
                }
            }
        });
    }
    
    // Ejecutar la función cuando se cargue la página
    setActiveNavItem();
});
