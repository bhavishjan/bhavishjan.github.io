document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.getElementById("site-header");
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const themeToggle = document.getElementById("theme-toggle");
    const progressBar = document.querySelector(".scroll-progress");
    const revealItems = document.querySelectorAll(".reveal");
    const year = document.getElementById("year");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const heroVisual = document.querySelector(".hero-visual");
    let ticking = false;

    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    const applyTheme = (theme) => {
        const isDark = theme === "dark";
        body.classList.toggle("dark-mode", isDark);
        themeToggle.setAttribute("aria-pressed", String(isDark));
        localStorage.setItem("theme", theme);
        setupParticles(isDark);
    };

    applyTheme(initialTheme);

    themeToggle.addEventListener("click", () => {
        const nextTheme = body.classList.contains("dark-mode") ? "light" : "dark";
        applyTheme(nextTheme);
    });

    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });

    const updateScrollUI = () => {
        const scrollTop = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

        progressBar.style.transform = `scaleX(${progress})`;
        header.classList.toggle("scrolled", scrollTop > 24);

        if (!prefersReducedMotion && heroVisual) {
            const offset = Math.min(scrollTop * 0.035, 12);
            heroVisual.style.transform = `translate3d(0, ${offset}px, 0)`;
        }
    };

    const handleScroll = () => {
        if (ticking) {
            return;
        }

        ticking = true;
        window.requestAnimationFrame(() => {
            updateScrollUI();
            ticking = false;
        });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollUI();

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (!prefersReducedMotion) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealItems.forEach((item, index) => {
            item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
            observer.observe(item);
        });

    } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    }
});

function setupParticles(isDark) {
    if (typeof particlesJS !== "function") {
        return;
    }

    const particleColor = isDark ? "#42d6d9" : "#0ea5a8";
    const lineColor = isDark ? "#f7b955" : "#f0b453";
    const opacity = isDark ? 0.2 : 0.28;

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 32,
                density: {
                    enable: true,
                    value_area: 1100
                }
            },
            color: {
                value: particleColor
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: opacity,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 120,
                color: lineColor,
                opacity: opacity,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "grab"
                },
                onclick: {
                    enable: false
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 120,
                    line_linked: {
                        opacity: isDark ? 0.3 : 0.35
                    }
                }
            }
        },
        retina_detect: true
    });
}
