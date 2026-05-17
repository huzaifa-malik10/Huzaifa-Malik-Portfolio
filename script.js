// DARK MODE Code

const themeToggle = document.querySelector(".toggle-switch");
const body = document.body;

// Load saved theme

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}


// ACTIVE NAV LINKS ON SCROLL

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


// CONTACT FORM VALIDATION

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {

    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');

    form.addEventListener("submit", function (e) {

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        formMessage.classList.remove("error", "success");

        if (name === "" || email === "" || message === "") {
            e.preventDefault();
            formMessage.textContent = "Please fill all fields";
            formMessage.classList.add("error");
            return;
        }

        if (!emailPattern.test(email)) {
            e.preventDefault();
            formMessage.textContent = "Please enter a valid email";
            formMessage.classList.add("error");
            return;
        }

        formMessage.textContent = "Sending..."; // optional
    });
}


//  HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.getElementById("navLinks");

if (hamburger && navLinksContainer) {

    hamburger.addEventListener("click", () => {
        navLinksContainer.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinksContainer.classList.remove("active");
        });
    });

}

document.addEventListener("click", (e) => {
    const isClickingInsideMenu = navLinksContainer.contains(e.target);
    const isClickingOnHamburger = hamburger.contains(e.target);

    if (!isClickingInsideMenu && !isClickingOnHamburger) {
        navLinksContainer.classList.remove("active");
    }
});

const revealElements = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

document.querySelectorAll("button, .cta-btn").forEach(btn => {
    btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.96)";
    });

    btn.addEventListener("mouseup", () => {
        btn.style.transform = "scale(1)";
    });
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.6)";
        navbar.style.backdropFilter = "blur(10px)";
    } else {
        navbar.style.background = "var(--Bg)";
    }
});