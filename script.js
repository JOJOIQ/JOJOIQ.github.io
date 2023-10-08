const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    themeToggle.checked = true;
    body.classList.add('dark-mode');
}
