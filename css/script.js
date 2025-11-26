/* --- 1. FUNÇÕES DO MODAL (GLOBAL) --- */
window.abrirModal = function(id) {
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById(id);
    const todosModais = document.querySelectorAll('.modal-container');

    if (overlay && modal) {
        // Esconde outros modais
        todosModais.forEach(m => m.style.display = 'none');
        // Exibe o correto
        modal.style.display = 'block';
        overlay.classList.add('active');
        // Trava rolagem
        document.body.style.overflow = 'hidden';
    } else {
        console.log("Modal não encontrado: " + id);
    }
}

window.fecharModal = function() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Destrava rolagem
    }
}

/* --- 2. AO CARREGAR A PÁGINA --- */
document.addEventListener('DOMContentLoaded', () => {

    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Fechar modal ao clicar fora
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) window.fecharModal();
        });
    }

    // Inicialização do Swiper (Carrossel)
    if (typeof Swiper !== 'undefined') {
        new Swiper(".myPortfolioSwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            // Autoplay (Opcional)
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            // Setas de navegação
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            // Paginação (bolinhas)
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // Responsividade
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 }
            }
        });
    }

    // Animação Simples ao Rolar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.animate-on-scroll, .animate-on-load').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});