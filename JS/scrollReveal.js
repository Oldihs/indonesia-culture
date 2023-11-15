document.addEventListener("DOMContentLoaded", function() {
    // ScrollReveal for Hero Section
    ScrollReveal().reveal('.hero-content h1', { 
        delay: 300, 
        duration: 1000,
        origin: 'bottom',
        distance: '50px'
    });

    ScrollReveal().reveal('.hero-content p', { 
        delay: 500, 
        duration: 1000,
        origin: 'bottom',
        distance: '50px'
    });

    ScrollReveal().reveal('.cta-btn', { 
        delay: 700, 
        duration: 1000,
        origin: 'bottom',
        distance: '50px'
    });

    ScrollReveal().reveal('#earth-container', { 
        delay: 900, 
        duration: 1000,
        origin: 'bottom',
        distance: '50px'
    });
});
