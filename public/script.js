// ===========================================
// Language Translation System
// ===========================================
let translations = {};
let currentLang = localStorage.getItem('preferredLanguage') || 'en';

// Load translations and apply them
async function initTranslations() {
    try {
        const response = await fetch(`/i18n/${currentLang}.json`);
        translations = await response.json();
        applyTranslations();
        updateLanguageToggle();
        updateHtmlLang();
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(key);
        if (translation) {
            // Check if it's an input placeholder
            if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Handle elements with data-i18n-html for HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        const translation = getNestedTranslation(key);
        if (translation) {
            element.innerHTML = translation;
        }
    });
}

// Get nested translation value (e.g., "nav.home" -> translations.nav.home)
function getNestedTranslation(key) {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }
    return value;
}

// Update the language toggle buttons
function updateLanguageToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === currentLang) {
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        }
    });
}

// Update the HTML lang attribute
function updateHtmlLang() {
    document.documentElement.lang = currentLang;
}

// Switch language
async function switchLanguage(lang) {
    if (lang === currentLang) return;

    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);

    try {
        const response = await fetch(`/i18n/${lang}.json`);
        translations = await response.json();
        applyTranslations();
        updateLanguageToggle();
        updateHtmlLang();
    } catch (error) {
        console.error('Error switching language:', error);
    }
}

// Initialize language toggle event listeners
function initLanguageToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', function() {
    initTranslations();
    initLanguageToggle();
});

// ===========================================
// Mobile Navigation Toggle
// ===========================================
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

// Contact Form Handling with Formspree
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formStatus = document.getElementById('form-status');
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;

        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                formStatus.style.display = 'block';
                formStatus.style.padding = '1rem';
                formStatus.style.background = 'var(--success-green, #28a745)';
                formStatus.style.color = 'white';
                formStatus.style.borderRadius = 'var(--radius-md)';
                formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            } else {
                // Error from Formspree
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Error handling
            formStatus.style.display = 'block';
            formStatus.style.padding = '1rem';
            formStatus.style.background = 'var(--crisis-red, #c41e3a)';
            formStatus.style.color = 'white';
            formStatus.style.borderRadius = 'var(--radius-md)';
            formStatus.textContent = 'Oops! There was a problem sending your message. Please try again or email us directly at Breathoflifeministry3@gmail.com';
        } finally {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
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
