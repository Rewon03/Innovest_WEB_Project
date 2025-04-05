// Global animations for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.hero-content, .section-content, .card, .feature-card, .team-member, .testimonial, .startup-card');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial setup for fade elements
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Animate numbers in stats
    const animateNumbers = function() {
        const numberElements = document.querySelectorAll('.stat-number, .stat-item');
        
        numberElements.forEach(element => {
            const number = element.textContent.match(/\d+/);
            if (number) {
                const originalNumber = parseInt(number[0]);
                let currentNumber = 0;
                const duration = 2000; // 2 seconds
                const steps = 60;
                const increment = originalNumber / steps;
                const stepTime = duration / steps;

                const updateNumber = () => {
                    currentNumber += increment;
                    if (currentNumber < originalNumber) {
                        element.textContent = element.textContent.replace(/\d+/, Math.floor(currentNumber));
                        setTimeout(updateNumber, stepTime);
                    } else {
                        element.textContent = element.textContent.replace(/\d+/, originalNumber);
                    }
                };

                updateNumber();
            }
        });
    };

    // Add hover effects to cards
    const cards = document.querySelectorAll('.card, .feature-card, .team-member, .testimonial, .startup-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animate buttons
    const buttons = document.querySelectorAll('button, .btn, .contact-button, .pitch-link');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Animate navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animate social media icons
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.transition = 'transform 0.3s ease';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animate form inputs
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Initialize animations
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check
    animateNumbers();
}); 