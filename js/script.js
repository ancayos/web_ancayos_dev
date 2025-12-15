document.addEventListener('DOMContentLoaded', function() {
    // Inicializa el ScrollSpy de Bootstrap
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#main-nav'
    });

    // Implementación de Smooth Scrolling para enlaces internos
    document.querySelectorAll('#main-nav a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Verifica que el enlace sea a una sección de la misma página (hash)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Ajusta para la altura de la navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});