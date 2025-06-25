// ============================================
// 📱 TOUCH MANAGER - Gestionnaire tactile moderne
// ============================================

class TouchManager {
    constructor() {
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
        this.minSwipeDistance = 50;
        this.maxSwipeTime = 300;
        this.touchStartTime = 0;
        
        this.isScrolling = false;
        this.scrollTimeout = null;
        this.lastScrollTop = 0;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.initScrollReveal();
        this.initTouchFeedback();
    }

    // ============================================
    // 🎯 GESTION DES SWIPE GESTURES
    // ============================================
    
    bindEvents() {
        // Touch events
        document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
        document.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
        document.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
        
        // Scroll events optimisés
        document.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16), { passive: true });
        
        // Resize events
        window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
    }

    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.touchStartTime = Date.now();
    }

    handleTouchMove(e) {
        if (!e.touches[0]) return;
        
        this.touchEndX = e.touches[0].clientX;
        this.touchEndY = e.touches[0].clientY;
        
        // Empêcher le scroll horizontal si swipe horizontal détecté
        const deltaX = Math.abs(this.touchEndX - this.touchStartX);
        const deltaY = Math.abs(this.touchEndY - this.touchStartY);
        
        if (deltaX > deltaY && deltaX > 10) {
            e.preventDefault();
        }
    }

    handleTouchEnd(e) {
        if (!this.touchEndX && !this.touchEndY) return;
        
        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = this.touchEndY - this.touchStartY;
        const deltaTime = Date.now() - this.touchStartTime;
        
        // Vérifier si c'est un swipe valide
        if (deltaTime <= this.maxSwipeTime) {
            this.detectSwipe(deltaX, deltaY);
        }
        
        // Reset
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
    }

    detectSwipe(deltaX, deltaY) {
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);
        
        // Swipe horizontal
        if (absDeltaX > this.minSwipeDistance && absDeltaX > absDeltaY) {
            if (deltaX > 0) {
                this.onSwipeRight();
            } else {
                this.onSwipeLeft();
            }
        }
        
        // Swipe vertical
        if (absDeltaY > this.minSwipeDistance && absDeltaY > absDeltaX) {
            if (deltaY > 0) {
                this.onSwipeDown();
            } else {
                this.onSwipeUp();
            }
        }
    }

    onSwipeLeft() {
        // Fermer la sidebar si ouverte
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.mobile-overlay');
        
        if (sidebar && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            overlay?.classList.remove('active');
            document.body.style.overflow = '';
            
            // Émettre un événement personnalisé
            this.emitEvent('swipeLeft', { action: 'closeSidebar' });
        }
    }

    onSwipeRight() {
        // Ouvrir la sidebar si fermée (depuis le bord gauche)
        if (this.touchStartX < 20) {
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.mobile-overlay');
            
            if (sidebar && !sidebar.classList.contains('active')) {
                sidebar.classList.add('active');
                overlay?.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                this.emitEvent('swipeRight', { action: 'openSidebar' });
            }
        }
    }

    onSwipeUp() {
        this.emitEvent('swipeUp');
    }

    onSwipeDown() {
        // Pull to refresh (si au top de la page)
        if (window.scrollY === 0) {
            this.emitEvent('swipeDown', { action: 'pullToRefresh' });
        }
    }

    // ============================================
    // 🌟 SCROLL REVEAL ANIMATIONS
    // ============================================
    
    initScrollReveal() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), this.observerOptions);
        
        // Observer tous les éléments avec scroll-reveal
        const revealElements = document.querySelectorAll('.scroll-reveal');
        revealElements.forEach(el => this.observer.observe(el));
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Animation staggered pour les éléments enfants
                const children = entry.target.querySelectorAll('.animate-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('is-visible');
                    }, index * 100);
                });
                
                // Optionnel : arrêter d'observer une fois révélé
                // this.observer.unobserve(entry.target);
            }
        });
    }

    // ============================================
    // 💫 TOUCH FEEDBACK
    // ============================================
    
    initTouchFeedback() {
        const interactiveElements = document.querySelectorAll('.interactive, button, .btn, a');
        
        interactiveElements.forEach(el => {
            el.addEventListener('touchstart', this.addTouchFeedback.bind(this), { passive: true });
            el.addEventListener('touchend', this.removeTouchFeedback.bind(this), { passive: true });
            el.addEventListener('touchcancel', this.removeTouchFeedback.bind(this), { passive: true });
        });
    }

    addTouchFeedback(e) {
        const element = e.currentTarget;
        element.classList.add('animate-touch');
        
        // Vibration légère sur devices compatibles
        if ('vibrate' in navigator) {
            navigator.vibrate(10);
        }
    }

    removeTouchFeedback(e) {
        const element = e.currentTarget;
        setTimeout(() => {
            element.classList.remove('animate-touch');
        }, 200);
    }

    // ============================================
    // 📊 SCROLL PERFORMANCE
    // ============================================
    
    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Détection de direction
        const scrollDirection = scrollTop > this.lastScrollTop ? 'down' : 'up';
        this.lastScrollTop = scrollTop;
        
        // Header hide/show
        this.handleHeaderScroll(scrollDirection, scrollTop);
        
        // Parallax optimisé
        this.handleParallax(scrollTop);
        
        // Marquer comme en cours de scroll
        if (!this.isScrolling) {
            this.isScrolling = true;
            document.body.classList.add('is-scrolling');
        }
        
        // Clear timeout précédent
        clearTimeout(this.scrollTimeout);
        
        // Marquer la fin du scroll
        this.scrollTimeout = setTimeout(() => {
            this.isScrolling = false;
            document.body.classList.remove('is-scrolling');
        }, 150);
    }

    handleHeaderScroll(direction, scrollTop) {
        const header = document.querySelector('.mobile-header');
        if (!header) return;
        
        if (direction === 'down' && scrollTop > 100) {
            header.classList.add('header-hidden');
        } else if (direction === 'up') {
            header.classList.remove('header-hidden');
        }
    }

    handleParallax(scrollTop) {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const yPos = -(scrollTop * speed);
            el.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    }

    // ============================================
    // 🔧 UTILITAIRES
    // ============================================
    
    throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;
        
        return function (...args) {
            const currentTime = Date.now();
            
            if (currentTime - lastExecTime > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    lastExecTime = Date.now();
                }, delay - (currentTime - lastExecTime));
            }
        };
    }

    debounce(func, delay) {
        let timeoutId;
        
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    emitEvent(eventName, detail = {}) {
        const event = new CustomEvent(eventName, { detail });
        document.dispatchEvent(event);
    }

    handleResize() {
        // Recalculer les éléments au resize
        this.initScrollReveal();
        
        // Émettre événement de resize
        this.emitEvent('touchManagerResize');
    }

    // ============================================
    // 🎯 API PUBLIQUE
    // ============================================
    
    // Ajouter de nouveaux éléments à observer
    observeElement(element) {
        if (this.observer && element) {
            this.observer.observe(element);
        }
    }

    // Arrêter d'observer un élément
    unobserveElement(element) {
        if (this.observer && element) {
            this.observer.unobserve(element);
        }
    }

    // Destroy - nettoyer les event listeners
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        
        // Nettoyer les timeouts
        clearTimeout(this.scrollTimeout);
    }
}

// ============================================
// 🚀 INITIALISATION AUTOMATIQUE
// ============================================

// Auto-init quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    window.TouchManager = new TouchManager();
    
    // Écouter les événements personnalisés
    document.addEventListener('swipeLeft', (e) => {
        console.log('Swipe left detected:', e.detail);
    });
    
    document.addEventListener('swipeRight', (e) => {
        console.log('Swipe right detected:', e.detail);
    });
    
    document.addEventListener('swipeUp', (e) => {
        console.log('Swipe up detected:', e.detail);
    });
    
    document.addEventListener('swipeDown', (e) => {
        console.log('Swipe down detected:', e.detail);
    });
});

// Export pour utilisation modulaire
export default TouchManager; 