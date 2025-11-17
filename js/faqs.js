// Codi JavaScript per al funcionament de l'acordió de preguntes freqüents
console.log('faqs.js carregat'); // Missatge de depuració

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregat'); // Missatge de depuració
    
    const faqItems = document.querySelectorAll('.faq-item');
    console.log('Preguntes trobades:', faqItems.length); // Missatge de depuració
    
    if (faqItems.length === 0) {
        console.error('No s\'han trobat elements amb la classe .faq-item');
        return;
    }
    
    // Funció per tancar totes les respostes excepte la que s'obre
    function closeOtherItems(currentItem) {
        console.log('Tancant altres preguntes...'); // Missatge de depuració
        faqItems.forEach(item => {
            if (item !== currentItem && item.classList.contains('active')) {
                item.classList.remove('active');
                const answer = item.querySelector('.faq-answer');
                if (answer) {
                    answer.style.maxHeight = '0';
                    answer.style.padding = '0 1.5rem';
                }
            }
        });
    }
    
    // Afegir esdeveniment de clic a cada pregunta
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (!question || !answer) {
            console.error('No s\'ha trobat la pregunta o la resposta a l\'índex', index);
            return;
        }
        
        // Obrir automàticament la primera pregunta
        if (index === 0) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.padding = '0 1.5rem 1.5rem';
        }
        
        question.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Clic a la pregunta', index + 1); // Missatge de depuració
            
            // Toggle de la classe active
            const isActive = item.classList.contains('active');
            
            // Tancar tots els altres elements
            closeOtherItems(isActive ? null : item);
            
            // Si està actiu, el desactivem
            if (isActive) {
                console.log('Tancant pregunta', index + 1); // Missatge de depuració
                item.classList.remove('active');
                answer.style.maxHeight = '0';
                answer.style.padding = '0 1.5rem';
            } else {
                // Si no està actiu, l'activem
                console.log('Obrint pregunta', index + 1); // Missatge de depuració
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '0 1.5rem 1.5rem';
            }
        });
    });
    
    // Actualitzar l'alçada de la resposta quan canvia la mida de la finestra
    window.addEventListener('resize', function() {
        const activeItem = document.querySelector('.faq-item.active');
        if (activeItem) {
            const answer = activeItem.querySelector('.faq-answer');
            if (answer) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        }
    });
    
    console.log('Configuració de l\'acordió completada'); // Missatge de depuració
});
