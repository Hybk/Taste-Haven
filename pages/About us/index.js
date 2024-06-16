    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        let isValid = true;
        const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ccc';
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });
