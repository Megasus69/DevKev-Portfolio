function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const switchButton = document.querySelectorAll('.switch input'); // Use querySelectorAll to target all switches

// Add event listeners to each switch input (for mobile and desktop)
switchButton.forEach(button => {
    button.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});



// Select all sections
const sections = document.querySelectorAll("section");

// Add initial animation class on window load
window.addEventListener("load", () => {
    sections.forEach((section) => {
        section.classList.add("animate__up");
    });
});

// Add animation class on scroll
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id;

        // Check if the section is in the viewport
        if (scrollY + window.innerHeight >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            section.classList.add("animate__fadeIn");

            switch (sectionId) {
                case "experience":
                    section.classList.add("animate__slide-left");
                    break;
                case "projects":
                    section.classList.add("animate__slide-right");
                    break;
                case "contact":
                    section.classList.add("animate__slide-down");
                    break;
            }
        } else {
            section.classList.remove("animate__fadeIn");
            // Remove specific animations when out of viewport
            section.classList.remove("animate__slide-left");
            section.classList.remove("animate__slide-right");
            section.classList.remove("animate__slide-down");
        }
    });
});