
// Journal Animation

document.addEventListener("DOMContentLoaded", () => {
    const entries = document.querySelectorAll(".entry");

    // IntersectionObserver logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Trigger animation
                observer.unobserve(entry.target); // Stop observing the element
            }
        });
    }, { threshold: 0.1 }); // Adjust visibility threshold if needed

    // Observe each element
    entries.forEach((entry) => observer.observe(entry));

    // Force check elements already in the viewport
    entries.forEach((entry) => {
        if (isInViewport(entry)) {
            entry.classList.add("visible");
        }
    });
});

// Helper function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-column img");
  
    images.forEach((image) => {
      image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.05)";
        image.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.2)";
      });
  
      image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
        image.style.boxShadow = "none";
      });
    });
  });
  