const toggleThemeBtn = document.getElementById('toggle-theme');
const btnTopo = document.getElementById('btn-topo');

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Mostrar ou esconder botão de topo
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.classList.add('show');
    } else {
        btnTopo.classList.remove('show');
    }
});

// Voltar ao topo suave
btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
