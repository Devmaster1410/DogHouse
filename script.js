// Console log to confirm script is loaded
console.log("Welcome to DogHouse!");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Add animation effect when scrolling through sections
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.1 }
);

sections.forEach(section => {
    observer.observe(section);
});

// Additional interactivity: Display an alert when a button is clicked
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        alert("You clicked a button! Stay tuned for more features!");
    });
});