// Gestion du carrousel de projet avec swipes et contrôles personnalisés

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('projectCarousel');
    const playPauseBtn = document.getElementById('carouselPlayPause');
    
    if (!carousel) return;

    // Instance Bootstrap du carrousel
    const bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 4000,
        pause: 'hover',
        touch: true
    });

    let isPlaying = true;

    // Gestion du bouton play/pause
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (isPlaying) {
                bsCarousel.pause();
                icon.className = 'fas fa-play';
                this.setAttribute('title', 'Reprendre le diaporama');
                isPlaying = false;
            } else {
                bsCarousel.cycle();
                icon.className = 'fas fa-pause';
                this.setAttribute('title', 'Mettre en pause');
                isPlaying = true;
            }
        });
    }

    // Gestion des swipes personnalisés (pour améliorer la réactivité)
    let startX = 0;
    let endX = 0;
    let startY = 0;
    let endY = 0;
    const threshold = 50; // Distance minimum pour déclencher un swipe

    carousel.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });

    carousel.addEventListener('touchmove', function(e) {
        // Empêcher le scroll vertical si c'est un swipe horizontal
        const deltaX = Math.abs(e.touches[0].clientX - startX);
        const deltaY = Math.abs(e.touches[0].clientY - startY);
        
        if (deltaX > deltaY) {
            e.preventDefault();
        }
    }, { passive: false });

    carousel.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        
        const deltaX = startX - endX;
        const deltaY = Math.abs(startY - endY);
        
        // Vérifier que c'est bien un swipe horizontal
        if (Math.abs(deltaX) > threshold && deltaY < threshold) {
            if (deltaX > 0) {
                // Swipe vers la gauche = image suivante
                bsCarousel.next();
            } else {
                // Swipe vers la droite = image précédente
                bsCarousel.prev();
            }
        }
    }, { passive: true });

    // Indicateurs tactiles améliorés
    const indicators = carousel.querySelectorAll('.carousel-indicators button');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            bsCarousel.to(index);
        });
    });

    // Animation des contrôles au survol (desktop)
    const controls = carousel.querySelectorAll('.carousel-control-prev, .carousel-control-next');
    controls.forEach(control => {
        control.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-50%) scale(1.1)';
        });
        
        control.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-50%) scale(1)';
        });
    });

    // Gestion du clavier
    document.addEventListener('keydown', function(e) {
        if (!carousel.matches(':hover')) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                bsCarousel.prev();
                break;
            case 'ArrowRight':
                e.preventDefault();
                bsCarousel.next();
                break;
            case ' ':
                e.preventDefault();
                if (playPauseBtn) playPauseBtn.click();
                break;
        }
    });

    // Effet de vibration sur mobile lors des swipes (si disponible)
    function vibrateOnSwipe() {
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }

    // Écouter les événements de changement de slide
    carousel.addEventListener('slide.bs.carousel', function() {
        vibrateOnSwipe();
    });

    // Auto-masquer les contrôles après inactivité
    let controlsTimeout;
    const controlsOverlay = carousel.querySelector('.carousel-controls-overlay');
    const carouselControls = carousel.querySelectorAll('.carousel-control-prev, .carousel-control-next, .carousel-indicators');
    
    function showControls() {
        if (controlsOverlay) controlsOverlay.style.opacity = '1';
        carouselControls.forEach(control => {
            control.style.opacity = '1';
        });
    }
    
    function hideControls() {
        if (controlsOverlay) controlsOverlay.style.opacity = '0.7';
        carouselControls.forEach(control => {
            control.style.opacity = '0.7';
        });
    }
    
    function resetControlsTimeout() {
        clearTimeout(controlsTimeout);
        showControls();
        controlsTimeout = setTimeout(hideControls, 3000);
    }
    
    // Réinitialiser le timeout sur interaction
    ['mouseenter', 'touchstart', 'mousemove'].forEach(event => {
        carousel.addEventListener(event, resetControlsTimeout);
    });
    
    // Cacher les contrôles initialement après 3 secondes
    setTimeout(hideControls, 3000);
}); 