document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');
    if (name && email && message) {
        formMessage.textContent = 'Thank you for your message, ' + name + '!';
        formMessage.style.color = '#1565c0';
        this.reset();
    } else {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = '#d32f2f';
    }
});
