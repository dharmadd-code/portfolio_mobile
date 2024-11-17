// Example JavaScript for contact form submission (you can enhance with real form handling)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Normally, you would send this data to the server via an AJAX request
    alert(`Message sent! \nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
