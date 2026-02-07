// Scroll animations using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
});

// Re-observe elements after a short delay to ensure they're ready
setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach((el) => {
        observer.observe(el);
    });
}, 100);
