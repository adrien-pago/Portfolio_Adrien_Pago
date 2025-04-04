import Typed from 'typed.js';

document.addEventListener('DOMContentLoaded', function() {
    // Animation du texte avec Typed.js
    const options = {
        strings: [
            'Développeur Full Stack ',
            'Développeur Web & Mobile',
            'Créateur d\'Applications Desktop',
            'Architecte Solutions Web'
        ],
        typeSpeed: 50,
        backSpeed: 20,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500
    };

    const typed = new Typed('#typed-text', options);

    // Animation des formes en arrière-plan
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        shape.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
    });
}); 