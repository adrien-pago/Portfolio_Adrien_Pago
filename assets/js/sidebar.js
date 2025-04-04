// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    let isOpen = false;

    // Fonction pour basculer le menu
    function toggleMenu() {
        isOpen = !isOpen;
        if (isOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    }

    // Fonction pour ouvrir le menu
    function openMenu() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Fonction pour fermer le menu
    function closeMenu() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        isOpen = false;
    }

    // Événement pour basculer le menu
    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    // Fermer le menu lors du clic sur un lien
    const menuLinks = sidebar.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fermer le menu lors du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}); 