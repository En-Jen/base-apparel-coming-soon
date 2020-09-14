const form = document.querySelector('.form');
const emailInput = document.querySelector('input[type=email]');
const feedback = document.querySelector('.form__feedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Check if valid email is submitted
    if (validateEmail(emailInput.value)) {
        form.classList.remove('error');
        form.classList.add('success');
        feedback.textContent = 'You have been subscribed';
    } else {
        form.classList.remove('success');
        form.classList.add('error');
        feedback.textContent = 'Please provide a valid email';
    }
});

// Regular expression to validate email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}