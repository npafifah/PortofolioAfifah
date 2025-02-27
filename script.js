document.addEventListener("DOMContentLoaded", function () {
    /* ==================== Toggle Icon Navbar ==================== */
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    };

    /* ==================== Scroll Sections Active Link ==================== */
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    document.querySelector(`header nav a[href*='${id}']`).classList.add("active");
                });
            }
        });

        /* ==================== Sticky Navbar ==================== */
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 100);

        /* ==================== Remove Toggle Icon & Navbar on Scroll ==================== */
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    };

    /* ==================== Smooth Scroll on Click ==================== */
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    /* ==================== Scroll Reveal Animation ==================== */
    ScrollReveal({
        distance: "80px",
        duration: 1500,
        delay: 150
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(".home-img, .skill-container, .portfolio-box, .contact form", { origin: "bottom" });
    ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
    ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

    /* ==================== Typed.js Animation ==================== */
    const typed = new Typed(".multiple-text", {
        strings: ["Student"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    /* ==================== Efek Muncul Saat Scroll (Intersection Observer) ==================== */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    /* ==================== Efek Hover untuk Skill Box ==================== */
    document.querySelectorAll(".skill-box").forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "transform 0.3s ease";
        });

        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });
});
