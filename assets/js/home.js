import Typed from 'typed.js';

document.addEventListener('DOMContentLoaded', function() {
    // Animation du texte avec Typed.js
    const options = {
        strings: [
            'Développeur Full Stack',
            'Passionné par le Web',
            'Expert Symfony',
            'Créateur d\'Applications'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: false
    };

    const typed = new Typed('#typed-text', options);

    // Animation des formes en arrière-plan
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        shape.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
    });
}); 