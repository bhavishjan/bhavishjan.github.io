document.addEventListener('DOMContentLoaded', () => {


    // --- PARTICLES.JS INITIALIZATION ---
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#4f46e5" },
            "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 } },
            "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#a5b4fc", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "push" }, "resize": false },
            "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
        },
        "retina_detect": true
    });

    // --- SCROLLREVEAL.JS INITIALIZATION ---
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: false // Animations repeat only once
    });

    sr.reveal('#home h1, #home p, #home div a', { interval: 100 });
    sr.reveal('#home img', { origin: 'bottom' });
    sr.reveal('.section-title, .about-description', { origin: 'left' });
    sr.reveal('.about-image', { origin: 'right' });
    sr.reveal('.skills-card', { interval: 100 });
    sr.reveal('.education-card', { origin: 'bottom' });
    sr.reveal('.experience-card', { interval: 100, origin: 'bottom' });
    sr.reveal('.contact-info', { origin: 'left' });
    sr.reveal('.contact-form-container', { origin: 'right' });
});

document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 100,
        reset: false
    });

    // Existing Skills animation
    sr.reveal('.skills-card', { interval: 100 });

    // Add Contact cards animation
    sr.reveal('.contact-card', { interval: 100 });
});
