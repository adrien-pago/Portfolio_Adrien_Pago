// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.disabled = true;

            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(response => response.json())
            .then(data => {
                showContactMessage(data.message, data.success ? 'success' : 'danger');
                if (data.success) {
                    contactForm.reset();
                }
            })
            .catch(() => {
                showContactMessage('Erreur lors de l\'envoi du message.', 'danger');
            })
            .finally(() => {
                if (submitBtn) submitBtn.disabled = false;
            });
        });
    }
});

function showContactMessage(message, type) {
    let alert = document.createElement('div');
    alert.className = `alert alert-${type} text-center`;
    alert.textContent = message;
    const form = document.getElementById('contactForm');
    if (form) {
        form.parentNode.insertBefore(alert, form);
    }
    setTimeout(() => {
        alert.remove();
    }, 4000);
} 