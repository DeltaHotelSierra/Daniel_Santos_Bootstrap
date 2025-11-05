// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Gradual blur effect on scroll
    const sections = document.querySelectorAll(
        ".about-section, .projects-section, .contact-section"
    );
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector("header");

    const observerOptions = {
        threshold: 0.3,
        rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view");
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });
});
