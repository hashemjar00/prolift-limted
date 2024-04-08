document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = navLink.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offsetTop = targetSection.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Form validation for the contact form
    const contactForm = document.getElementById('contact');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Simple validation
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            nameInput.focus();
            return;
        }

        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            emailInput.focus();
            return;
        }

        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            messageInput.focus();
            return;
        }

        // Assuming the form is valid, you can submit the form here
        alert('Form submitted successfully!');
        contactForm.reset();
    });

    // Image gallery with lightbox effect
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const imgSrc = item.querySelector('img').getAttribute('src');
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `<img src="${imgSrc}" alt="Gallery Image">`;

            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });
});
