const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navMenu.classList.remove('active');
    }
});

// Roadmap functionality
const roadmapTitles = document.querySelectorAll('.roadmap-title');

roadmapTitles.forEach(title => {
    title.addEventListener('click', () => {
        const roadmap = title.parentElement;
        roadmap.classList.toggle('active');
    });
});
