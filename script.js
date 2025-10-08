// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = navMenu.contains(event.target) || hamburger.contains(event.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Don't prevent default for empty hash or just "#"
        if (href === '#' || href === '') {
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();

            // Calculate offset for sticky headers
            const headerOffset = 140; // crisis banner + navbar height
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // In a real implementation, you would send this to a server
        // For now, we'll show a success message
        alert('Thank you for your message! We will get back to you soon.\n\nNote: This is a demo form. In production, this would be sent to the ministry email.');

        // Reset form
        contactForm.reset();

        // In production, you might want to use a service like:
        // - Formspree (https://formspree.io/)
        // - EmailJS (https://www.emailjs.com/)
        // - Your own backend API

        /* Example with EmailJS:
        emailjs.send('service_id', 'template_id', {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        }).then(
            function(response) {
                alert('Message sent successfully!');
                contactForm.reset();
            },
            function(error) {
                alert('Failed to send message. Please try again.');
            }
        );
        */
    });
}

// Scroll-to-top functionality (optional enhancement)
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('id', 'scrollToTop');
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color, #2c5f8d);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        z-index: 998;
    `;

    document.body.appendChild(scrollBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top when clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll-to-top on page load
createScrollToTop();

// Add animation on scroll for elements (optional enhancement)
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    const animatedElements = document.querySelectorAll(
        '.help-card, .program-card, .resource-card, .value-card, .service-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations on page load
if (window.innerWidth > 768) {
    addScrollAnimations();
}

// Crisis banner dismiss functionality (optional)
function addCrisisBannerDismiss() {
    const crisisBanner = document.querySelector('.crisis-banner');
    if (crisisBanner) {
        // Check if user has dismissed banner in this session
        if (sessionStorage.getItem('crisisBannerDismissed') === 'true') {
            crisisBanner.style.display = 'none';
            // Adjust sticky header position
            const header = document.querySelector('header');
            if (header) {
                header.style.top = '0';
            }
        }

        // Add dismiss button (optional - currently crisis banner is always shown)
        // Uncomment below if you want to add a dismiss option:
        /*
        const dismissBtn = document.createElement('button');
        dismissBtn.innerHTML = '×';
        dismissBtn.style.cssText = `
            margin-left: 20px;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 0 10px;
        `;
        dismissBtn.setAttribute('aria-label', 'Dismiss crisis banner');

        const bannerContainer = crisisBanner.querySelector('.container');
        if (bannerContainer) {
            bannerContainer.appendChild(dismissBtn);

            dismissBtn.addEventListener('click', function() {
                crisisBanner.style.display = 'none';
                sessionStorage.setItem('crisisBannerDismissed', 'true');
                const header = document.querySelector('header');
                if (header) {
                    header.style.top = '0';
                }
            });
        }
        */
    }
}

// Initialize crisis banner functionality
addCrisisBannerDismiss();

// Add active state to current page in navigation
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('#')[0];
        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Set active nav link on page load
setActiveNavLink();

// Accessibility: Trap focus in mobile menu when open
function trapFocusInMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    if (!navMenu || !hamburger) return;

    hamburger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hamburger.click();

            // Focus first menu item when opening
            if (navMenu.classList.contains('active')) {
                const firstLink = navMenu.querySelector('a');
                if (firstLink) {
                    setTimeout(() => firstLink.focus(), 100);
                }
            }
        }
    });

    // Escape key closes menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.focus();
        }
    });
}

// Initialize focus trap
trapFocusInMenu();

// Console message (optional)
console.log('%cBreath of Life Ministries', 'font-size: 20px; font-weight: bold; color: #2c5f8d;');
console.log('%cIf you or someone you know is in crisis, call or text 988', 'font-size: 14px; color: #c41e3a; font-weight: bold;');
console.log('Website built with compassion and hope. 🙏');
