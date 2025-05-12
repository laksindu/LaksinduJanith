// Animations and scroll effects

document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Function to add animation class when element is in viewport
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.animate');
        
        animatedElements.forEach(element => {
            if (isInViewport(element)) {
                // Add the specific animation class
                const animationClass = element.getAttribute('data-animation');
                if (animationClass) {
                    element.classList.add(animationClass);
                }
            }
        });
    }
    
    // Add animation classes to elements
    function setupAnimations() {
        // About section animations
        const aboutImage = document.querySelector('.about-image');
        const aboutText = document.querySelector('.about-text');
        
        if (aboutImage && aboutText) {
            aboutImage.classList.add('animate');
            aboutImage.setAttribute('data-animation', 'fadeInLeft');
            
            aboutText.classList.add('animate');
            aboutText.setAttribute('data-animation', 'fadeInRight');
        }
        
        // Project cards animations
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.classList.add('animate');
            card.classList.add(`animate-delay-${index % 3}`);
            card.setAttribute('data-animation', 'fadeInUp');
        });
        
        // Skill cards animations
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
            card.classList.add('animate');
            card.classList.add(`animate-delay-${index % 4}`);
            card.setAttribute('data-animation', 'fadeInUp');
        });
        
        // Contact section animations
        const contactInfo = document.querySelector('.contact-info');
        const contactForm = document.querySelector('.contact-form');
        
        if (contactInfo && contactForm) {
            contactInfo.classList.add('animate');
            contactInfo.setAttribute('data-animation', 'fadeInLeft');
            
            contactForm.classList.add('animate');
            contactForm.setAttribute('data-animation', 'fadeInRight');
        }
    }
    
    // Initialize animations
    setupAnimations();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load to animate initial viewport elements
    animateOnScroll();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip for links with no hash or just #
            if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get header height for offset
                const headerHeight = document.querySelector('.header').offsetHeight;
                
                // Calculate position with offset
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add hover effect
            this.classList.add('hover-shadow');
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove hover effect
            this.classList.remove('hover-shadow');
        });
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        if (heroSection) {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
    
    // Animate scroll indicator
    function animateScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        if (scrollIndicator) {
            setTimeout(() => {
                scrollIndicator.style.opacity = '1';
            }, 1500);
        }
    }
    
    animateScrollIndicator();
});