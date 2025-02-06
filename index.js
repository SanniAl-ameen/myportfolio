// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        document.querySelector('.navbar').style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add animation to hero section on load
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
});




let viewMore = document.getElementById("view-more")
viewMore.addEventListener("click", function () {
    window.location.href = "graphics-project.html"
})