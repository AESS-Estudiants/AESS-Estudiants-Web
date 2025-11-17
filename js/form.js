document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  // Deshabilitar botó per evitar spam
  const submitButton = this.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = 'Enviant...';
  
  emailjs.sendForm('service_yglpe9q', 'template_p7oi11c', this)
    .then(function () {
      alert('Missatge enviat correctament!');
      document.getElementById('contact-form').reset();
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }, function (error) {
      alert('Error en l\'enviament. Prova-ho més tard.');
      console.log(error);
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    });
});
