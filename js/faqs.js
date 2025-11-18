// Codi JavaScript per al funcionament de l'acordió de preguntes freqüents
console.log('faqs.js carregat'); // Missatge de depuració

function initFAQs() {
    console.log('Inicialitzant FAQs...'); // Missatge de depuració
    
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
                    answer.style.opacity = '0';
                    answer.style.transform = 'translateY(-10px)';
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
        
        // Inicialitzar estats
        if (!item.classList.contains('active')) {
            answer.style.maxHeight = '0';
            answer.style.padding = '0 1.5rem';
            answer.style.opacity = '0';
            answer.style.transform = 'translateY(-10px)';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.padding = '0 1.5rem 1.5rem';
            answer.style.opacity = '1';
            answer.style.transform = 'translateY(0)';
        }
        
        // Obrir automàticament la primera pregunta si cap està oberta
        if (index === 0 && !document.querySelector('.faq-item.active')) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.padding = '0 1.5rem 1.5rem';
            answer.style.opacity = '1';
            answer.style.transform = 'translateY(0)';
        }
        
        // Eliminar event listeners existents per evitar duplicats
        const newQuestion = question.cloneNode(true);
        question.parentNode.replaceChild(newQuestion, question);
        
        newQuestion.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle de la classe active
            const isActive = item.classList.contains('active');
            
            // Tancar tots els altres elements
            closeOtherItems(isActive ? null : item);
            
            // Si està actiu, el desactivem
            if (isActive) {
                item.classList.remove('active');
                answer.style.maxHeight = '0';
                answer.style.padding = '0 1.5rem';
                answer.style.opacity = '0';
                answer.style.transform = 'translateY(-10px)';
            } else {
                // Si no està actiu, l'activem
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '0 1.5rem 1.5rem';
                answer.style.opacity = '1';
                answer.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Actualitzar l'alçada de la resposta quan canvia la mida de la finestra
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const activeItems = document.querySelectorAll('.faq-item.active');
            activeItems.forEach(item => {
                const answer = item.querySelector('.faq-answer');
                if (answer) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }, 250);
    });
    
    console.log('Configuració de l\'acordió completada'); // Missatge de depuració
}

// Inicialitzar quan el DOM estigui completament carregat
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFAQs);
} else {
    // DOMContentLoaded ja s'ha disparat, inicialitzar directament
    initFAQs();
}
