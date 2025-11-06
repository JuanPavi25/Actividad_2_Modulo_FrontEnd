
const toggleBtn = document.getElementById('toggleMenu');
const sidebar = document.getElementById('sidebar');
const fondo = document.getElementById('fondo');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    fondo.classList.toggle('active');
});

fondo.addEventListener('click', () => {
    sidebar.classList.remove('active');
    fondo.classList.remove('active');
});

