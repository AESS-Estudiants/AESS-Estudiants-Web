document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const formResponse = document.getElementById('form-response');
  
  function showResponse(type, message) {
    formResponse.className = '';
    formResponse.classList.add(type);
    formResponse.textContent = message;
    formResponse.style.display = 'block';
    
    // Scroll to the response message
    formResponse.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Deshabilitar botó per evitar spam
      const submitButton = this.querySelector('button[type="submit"]');
      const buttonText = submitButton.querySelector('.button-text');
      const originalText = buttonText.textContent;
      
      // Actualizar estado del botón
      submitButton.disabled = true;
      buttonText.textContent = 'Enviant...';
      
      // Enviar formulario con EmailJS
      emailjs.sendForm('service_yglpe9q', 'template_p7oi11c', this)
        .then(function() {
          showResponse('success', 'Missatge enviat correctament! Et respondrem el més aviat possible.');
          contactForm.reset();
        }, function(error) {
          console.error('Error en l\'enviament:', error);
          showResponse('error', 'Error en l\'enviament. Si us plau, torna-ho a intentar més tard.');
        })
        .finally(() => {
          // Restaurar estado del botón
          submitButton.disabled = false;
          buttonText.textContent = originalText;
        });
    });
  }
});
