// JavaScript for interactive elements and smooth scroll management.
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.full-screen-section, .content-section');

    // 1. Gentle Scroll Management (Optional but enhances 'sanctuary' feel)
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const header = document.getElementById('navbar');
        if (header) {
            // Scroll-aware navbar: fade in slightly as we scroll past hero
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // 2. Implementing the "soft fade" effect on scroll view (Intersection Observer)
    const observerOptions = {
        root: null,
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add an active class to trigger CSS transitions/animations
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // We must add 'fade-in-hidden' class initially and let CSS handle the transition for best effect
        if (!section.classList.contains('is-visible')) {
             section.classList.add('fade-in-hidden');
             observer.observe(section);
        }
    });

    // Note: Complex parallax/scroll-based animations are better handled with a dedicated library (e.g., GSAP) 
    // but the Intersection Observer handles the 'soft reveal' requirement well enough for now.

});