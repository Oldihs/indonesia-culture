document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navIndicator = document.querySelector('.nav-indicator');

    function moveIndicator(link) {
        navIndicator.style.width = `${link.offsetWidth}px`;
        navIndicator.style.left = `${link.offsetLeft}px`;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Update active class for all links
            navLinks.forEach(lnk => lnk.classList.remove('active'));
            this.classList.add('active');

            // Move the indicator
            moveIndicator(this);
        });
    });

    // Initialize the indicator position and width
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
        moveIndicator(activeLink);
    } else {
        // Optional: hide indicator if no active link is found
        navIndicator.style.width = '0';
        navIndicator.style.left = '0';
    }
});
