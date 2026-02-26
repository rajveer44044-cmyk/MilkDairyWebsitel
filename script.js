// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if(navLinks.style.display === 'flex'){
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.right = '0';
        navLinks.style.background = 'white';
        navLinks.style.width = '100%';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Form Submission Handling
const form = document.getElementById('orderForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stops page from reloading
    alert("Thank you! Your message has been received. We will contact you soon!");
    form.reset(); // Clear form fields
};