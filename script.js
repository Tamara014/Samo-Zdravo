const menuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (navMenu && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        accordionHeaders.forEach(h => {
            h.setAttribute('aria-expanded', 'false');
        });
        
        if (!isExpanded) {
            this.setAttribute('aria-expanded', 'true');
        }
    });

    header.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

const flavorCards = document.querySelectorAll('.flavor-card');

flavorCards.forEach(card => {
    card.addEventListener('click', function(e) {

        if (this.classList.contains('active')) {
            return;
        }
        
        flavorCards.forEach(c => c.classList.remove('active'));

        this.classList.add('active');
        
        if (window.innerWidth > 768 && window.innerWidth <= 1024) {
            this.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest', 
                inline: 'center' 
            });
        }
    });
});

document.addEventListener('click', (e) => {
    if (window.innerWidth > 768 && !e.target.closest('.flavor-card')) {
        flavorCards.forEach(card => card.classList.remove('active'));
    }
});

const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-main');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });
}

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

window.addEventListener('orientationchange', () => {

    flavorCards.forEach(card => card.classList.remove('active'));
    navMenu.classList.remove('active');
});

const flavorsGrid = document.querySelector('.flavors-grid');
if (flavorsGrid) {
    let isDown = false;
    let startX;
    let scrollLeft;

    flavorsGrid.addEventListener('mousedown', (e) => {
        isDown = true;
        flavorsGrid.style.cursor = 'grabbing';
        startX = e.pageX - flavorsGrid.offsetLeft;
        scrollLeft = flavorsGrid.scrollLeft;
    });

    flavorsGrid.addEventListener('mouseleave', () => {
        isDown = false;
        flavorsGrid.style.cursor = 'grab';
    });

    flavorsGrid.addEventListener('mouseup', () => {
        isDown = false;
        flavorsGrid.style.cursor = 'grab';
    });

    flavorsGrid.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - flavorsGrid.offsetLeft;
        const walk = (x - startX) * 2;
        flavorsGrid.scrollLeft = scrollLeft - walk;
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const handleResize = debounce(() => {

    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
}, 250);

window.addEventListener('resize', handleResize);

const preventScroll = (e) => {
    if (navMenu.classList.contains('active') && window.innerWidth <= 768) {
        e.preventDefault();
    }
};

flavorCards.forEach((card, index) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for flavor ${index + 1}`);
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

if (navigator.hardwareConcurrency <= 4) {
    document.body.classList.add('reduced-motion');
}
