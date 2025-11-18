document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdownToggles = document.querySelectorAll('.dropdown > .nav-link');

  // Toggle mobile menu
  mobileMenuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Toggle dropdown menus on mobile
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const dropdown = this.nextElementSibling;
        const isOpen = dropdown.style.display === 'block';
        
        // Close all other open dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== dropdown) {
            menu.style.display = 'none';
            menu.previousElementSibling.querySelector('i').classList.remove('fa-chevron-up');
            menu.previousElementSibling.querySelector('i').classList.add('fa-chevron-down');
          }
        });
        
        // Toggle current dropdown
        if (isOpen) {
          dropdown.style.display = 'none';
          this.querySelector('i').classList.remove('fa-chevron-up');
          this.querySelector('i').classList.add('fa-chevron-down');
        } else {
          dropdown.style.display = 'block';
          this.querySelector('i').classList.remove('fa-chevron-down');
          this.querySelector('i').classList.add('fa-chevron-up');
        }
      }
    });
  });

  // Close mobile menu when clicking on a nav link (except dropdown toggles)
  navLinks.forEach(link => {
    if (!link.parentElement.classList.contains('dropdown')) {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });

  // Add active class to current page link
  const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });

  // Handle window resize
  function handleResize() {
    if (window.innerWidth > 1024) {
      // Reset mobile menu state on desktop
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      // Reset dropdown menus
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = '';
      });
    }
  }

  // Add resize event listener
  window.addEventListener('resize', handleResize);
});