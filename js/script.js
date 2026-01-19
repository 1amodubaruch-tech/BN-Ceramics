// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Add to Cart Functionality
    const cartButtons = document.querySelectorAll('.add-to-cart');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Find the product name relative to the button clicked
            const productName = event.target.closest('.card-body').querySelector('.card-title').innerText;
            
            // For now, we just show an alert
            alert(`${productName} has been added to your cart!`);
            
            // Visual feedback: Change button text temporarily
            const originalText = button.innerText;
            button.innerText = 'Added!';
            button.classList.replace('btn-outline-dark', 'btn-success');
            
            setTimeout(() => {
                button.innerText = originalText;
                button.classList.replace('btn-success', 'btn-outline-dark');
            }, 2000);
        });
    });

    // 2. Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('emailInput').value;
            
            console.log(`Newsletter signup for: ${email}`);
            alert('Thank you for joining our mailing list!');
            
            newsletterForm.reset();
        });
    }

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Inside your existing document.addEventListener('DOMContentLoaded', () => { ... })

    const myCarousel = document.querySelector('#testimonialCarousel');
    const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // Changes slides every 5 seconds
    touch: true,    // Allows swiping on mobile
    pause: 'hover'  // Stops the timer when the user hovers over it
    });


});


document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
});




// Scroll Reveal Animation Logic
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
// Trigger once on load in case elements are already in view
window.addEventListener('load', scrollReveal);






// Add this to your existing script.js
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Change button state to show it's "Working"
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Sending...';
        btn.disabled = true;

        // Simulate an API call
        setTimeout(() => {
            alert('Message Sent Successfully! We will contact you soon.');
            btn.innerHTML = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 2000);
    });
}

// Reveal Logic
        

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

