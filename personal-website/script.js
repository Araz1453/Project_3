// Scroll fade-in animation for all elements
function observeElements() {
    const elements = document.querySelectorAll('header, section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((element) => {
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', observeElements);

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');
    if (name && email && message) {
        formMessage.textContent = 'Thank you for your message, ' + name + '!';
        formMessage.style.color = '#87CEEB';
        this.reset();
    } else {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = '#ff6b6b';
    }
});
