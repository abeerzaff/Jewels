
function handleSubmit() {
    // Get the values of the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple validation check
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // Simulate form submission or send the form data to the server
    console.log('Form submitted');
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);

    // Display success message to the user
    alert('Thank you, ' + name + '! Your message has been sent.');
    
    // Clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}

// Attach event listener to the submit button
document.querySelector('button[type="button"]').addEventListener('click', handleSubmit);
