// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ===== Learn More Card Toggle =====
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const learnMoreCard = document.getElementById('learnMoreCard');
    const closeCardBtn = document.getElementById('closeCardBtn');

    if (learnMoreBtn && learnMoreCard) {
        learnMoreBtn.addEventListener('click', function() {
            learnMoreCard.classList.toggle('active');

            // Smooth scroll to the card when opened
            if (learnMoreCard.classList.contains('active')) {
                setTimeout(() => {
                    learnMoreCard.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 100);
            }
        });
    }

    if (closeCardBtn && learnMoreCard) {
        closeCardBtn.addEventListener('click', function() {
            learnMoreCard.classList.remove('active');
        });
    }

    // ===== Mobile Navigation Toggle =====
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // ===== Smooth Scroll for Navigation Links =====
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }

                // Scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== Close mobile menu when clicking outside =====
    document.addEventListener('click', function(event) {
        if (navMenu && navToggle) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);

            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });

    // ===== Close Learn More card when clicking outside =====
    document.addEventListener('click', function(event) {
        if (learnMoreCard && learnMoreBtn) {
            const isClickInsideCard = learnMoreCard.contains(event.target);
            const isClickOnButton = learnMoreBtn.contains(event.target);

            if (!isClickInsideCard && !isClickOnButton && learnMoreCard.classList.contains('active')) {
                learnMoreCard.classList.remove('active');
            }
        }
    });

    // ===== Keyboard accessibility for Learn More card =====
    if (closeCardBtn) {
        closeCardBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                learnMoreCard.classList.remove('active');
            }
        });
    }

    // Close Learn More card with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && learnMoreCard && learnMoreCard.classList.contains('active')) {
            learnMoreCard.classList.remove('active');
        }
    });
});
