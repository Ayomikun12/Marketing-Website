document.addEventListener("DOMContentLoaded", () => {

    // LOAD HEADER
    fetch("header.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("header").innerHTML = html;
            initNavigation(); // 🔥 VERY IMPORTANT
        });

    // LOAD FOOTER
    fetch("footer.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("footer").innerHTML = html;
        });
});


// ---------------------------------------------------
// NAVIGATION LOGIC (HEADER ONLY)
// ---------------------------------------------------

function initNavigation() {

    /* ===============================
       THEME TOGGLE
    =============================== */
    const themeToggle = document.querySelector(".theme-toggle");
    const icon = document.getElementById("theme-icon");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            const isDark = document.body.classList.contains("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");

            if (icon) {
                icon.classList.toggle("fa-moon", !isDark);
                icon.classList.toggle("fa-sun", isDark);
            }
        });
    }

    // Apply saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        if (icon) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }

    /* ===============================
       MOBILE MENU
    =============================== */
    const mainMenu = document.querySelector(".mainMenu");
    const openMenu = document.querySelector(".openMenu");
    const closeMenu = document.querySelector(".closeMenu");

    if (openMenu && closeMenu && mainMenu) {
        openMenu.addEventListener("click", () => mainMenu.classList.add("show"));
        closeMenu.addEventListener("click", () => mainMenu.classList.remove("show"));
    }
}

const sections = document.querySelectorAll(".hidden");

function revealSections() {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(section => {
    section.classList.add("show");
  });
}

// Run when page loads / refreshes
window.addEventListener("load", revealSections);

sections.forEach((section, index) => {
  setTimeout(() => {
    section.classList.add("show");
  }, index * 150);
});

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;
    sections.forEach(section => {
        section.classList.toggle(
            "show",
            section.getBoundingClientRect().top < trigger
        );
    });
});