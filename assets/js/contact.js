// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            // Here you would typically send the data to your backend
            // For now, we'll just show a success message
            showSuccessMessage();
        });
    }
});

// Show success message
function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.textContent = 'Message envoyé avec succès !';
    document.body.appendChild(message);

    // Show the message
    setTimeout(() => message.classList.add('show'), 100);

    // Remove the message after 3 seconds
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => message.remove(), 300);
    }, 3000);
} 