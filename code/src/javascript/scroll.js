// SCROLL SUAVE
// Seleciona todos os links do menu que começam com "#"
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão

        // Seleciona o elemento alvo com base no href do link
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Faz o scroll suave até o elemento
        targetElement.scrollIntoView({
            behavior: 'smooth', // Suavidade do scroll
            block: 'start'      // Alinha no início do elemento
        });
    });
});