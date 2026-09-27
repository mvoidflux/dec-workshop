/* =========================================================
   HANDS-ON WORKSHOP ON AUTONOMOUS SYSTEMS
   IIT GUWAHATI
   ========================================================= */


/* ================= MOBILE NAVIGATION ================= */

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {

    navToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });


    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}


/* ================= NAVBAR SCROLL ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= CURRENT YEAR ================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* ================= IMAGE FALLBACK ================= */

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("error", () => {

        img.style.background = "#e8eef4";

        img.style.objectFit = "contain";

        img.alt = "Workshop image";

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".experience-card, .outcome, .project-card, " +
    ".hardware-item, .info-card, .tool-card, " +
    ".timeline-item, .instructor-card, " +
    ".information-card"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* ================= SMOOTH INTERNAL LINKS ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const navbarHeight = navbar
            ? navbar.offsetHeight
            : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});