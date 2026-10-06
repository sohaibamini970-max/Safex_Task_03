/**
 * Contact form: client-side validation + fake submit.
 */
(function () {
    function init() {
        const form = document.getElementById('contact-form');
        const msg = document.getElementById('contact-msg');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const subject = form.subject.value;
            const message = form.message.value.trim();

            if (!name || !email || !subject || !message) {
                msg.textContent = 'Please fill in every field.';
                msg.className = 'text-sm text-red-600';
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                msg.textContent = 'Please enter a valid email address.';
                msg.className = 'text-sm text-red-600';
                return;
            }

            msg.textContent = 'Sending…';
            msg.className = 'text-sm text-ink-700';

            setTimeout(() => {
                msg.textContent = 'Thanks! We received your message and will reply within 2 business days.';
                msg.className = 'text-sm text-green-600';
                form.reset();
            }, 800);
        });
    }

    document.addEventListener('DOMContentLoaded', init);
})();