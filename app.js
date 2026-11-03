/**
 * COSMIC CRAFT // PRODUCTION APP.JS
 * Smooth Scroll Reveal, Dynamic Vitrine Observer, and Modal Controller
 */

document.addEventListener("DOMContentLoaded", () => {
    'use strict';

    // 1. Kinetic Scroll Reveal (IntersectionObserver)
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.05
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
            } else {
                // Двусторонний сброс для повторного запуска при скролле обратно вверх
                entry.target.classList.remove('is-revealed');
            }
        });
    }, observerOptions);

    // Делаем observer глобально доступным, чтобы catalog.js / витрина могли регистрировать новые карточки
    window.scrollObserver = scrollObserver;

    // Инициализация статических элементов (секции, статические карточки, заголовки, футер)
    const staticTargets = document.querySelectorAll('section, .current-glass, footer, h2, h3');
    staticTargets.forEach((el) => {
        if (!el.closest('#intro-splash') && !el.closest('#auction-modal') && !el.closest('#lab-specs-modal')) {
            el.classList.add('reveal-on-scroll');
            scrollObserver.observe(el);
        }
    });

    // Первичное сканирование видимой зоны после загрузки
    setTimeout(() => {
        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('is-revealed');
            }
        });
    }, 100);

    // 2. Global Modal Managers (Lab Specs & Auction Modals)
    window.openLabModal = function() {
        const m = document.getElementById('lab-specs-modal');
        if (m) {
            m.classList.remove('hidden');
            m.classList.add('flex');
        }
    };

    window.closeLabModal = function(e) {
        if (e && e.target && e.target !== e.currentTarget) return;
        const m = document.getElementById('lab-specs-modal');
        if (m) {
            m.classList.remove('flex');
            m.classList.add('hidden');
        }
    };

    // Закрытие модалок по клавише Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const labModal = document.getElementById('lab-specs-modal');
            if (labModal && labModal.classList.contains('flex')) {
                labModal.classList.remove('flex');
                labModal.classList.add('hidden');
            }
            // Закрытие аукционной модалки если открыта
            if (typeof closeModal === 'function') {
                closeModal();
            }
            if (typeof closeLightbox === 'function') {
                closeLightbox();
            }
        }
    });
});
