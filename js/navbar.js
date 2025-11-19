document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdownToggles = document.querySelectorAll('.dropdown > .nav-link');
  const dropdowns = document.querySelectorAll('.dropdown');
  const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

  if (!mobileMenuToggle || !navMenu) {
    return;
  }

  function updateToggleIcon(toggle, expanded) {
    const icon = toggle.querySelector('i');
    if (!icon) return;
    icon.classList.toggle('fa-chevron-up', expanded);
    icon.classList.toggle('fa-chevron-down', !expanded);
  }

  function setDropdownState(dropdown, expanded) {
    const toggle = dropdown.querySelector('.nav-link');
    if (!toggle) return;
    dropdown.classList.toggle('active', expanded);
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    updateToggleIcon(toggle, expanded);
  }

  function closeAllDropdowns() {
    dropdowns.forEach(dropdown => setDropdownState(dropdown, false));
  }

  dropdownToggles.forEach(toggle => {
    toggle.setAttribute('aria-expanded', 'false');
  });

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
        const dropdown = this.parentElement;
        const isActive = dropdown.classList.contains('active');

        if (!isActive) {
          e.preventDefault();
          closeAllDropdowns();
          setDropdownState(dropdown, true);
        } else {
          // Close dropdown but allow navigation to proceed on second tap
          closeAllDropdowns();
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
        closeAllDropdowns();
      });
    }
  });

  dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      closeAllDropdowns();
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      closeAllDropdowns();
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
      closeAllDropdowns();
    }
  }

  // Add resize event listener
  window.addEventListener('resize', handleResize);
});