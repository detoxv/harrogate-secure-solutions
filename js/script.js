// This file contains JavaScript functionality for the Harrogate Secure Solutions website.

// Function to validate the contact form
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error messages
    errorMessage.textContent = '';

    // Simple validation
    if (!name || !email || !message) {
        errorMessage.textContent = 'Please fill in all fields.';
        return false;
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    return true;
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    if (validateContactForm()) {
        // Here you can add code to send the form data to the server
        alert('Thank you for your message! We will get back to you shortly.');
        document.getElementById('contact-form').reset(); // Reset the form
    }
}

// Event listener for the contact form submission
document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);