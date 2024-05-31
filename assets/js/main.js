// Email form submission
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    // You can use a service like EmailJS or fetch to send the form data to your email
    // Example with EmailJS:
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            // Reset form fields
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
});

// Light/dark mode toggle
const themeToggle = document.querySelector('.theme__toggle');
const body = document.querySelector('body');

themeToggle.addEventListener('click', () => {
    console.log('Toggle clicked');
    body.classList.toggle('dark-mode');
});