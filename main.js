
// Main JS for ZAINAB_UGC Portfolio
// - Init AOS, Swiper, GSAP
// - Lightbox for YouTube videos
// - Back-to-top button

// Ensure DOM ready even with defer
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // AOS animations
  if (window.AOS) {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic',
    });
  }

  // Swiper for portfolio
  const swiper = new Swiper('.portfolio-swiper', {
    slidesPerView: 1.1,
    spaceBetween: 14,
    centeredSlidesBounds: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 16 },
      1024: { slidesPerView: 3, spaceBetween: 18 },
    },
  });

  // GSAP hero entrance
  if (window.gsap) {
    gsap.from('.headline .hello', { y: 20, opacity: 0, duration: 0.6, delay: 0.1 });
    gsap.from('.headline .name', { y: 20, opacity: 0, duration: 0.6, delay: 0.25 });
    gsap.from('.headline .role', { y: 20, opacity: 0, duration: 0.6, delay: 0.4 });
    gsap.from('.hero-cta .btn', { y: 14, opacity: 0, duration: 0.6, stagger: 0.1, delay: 0.55 });
  }

  // Lightbox logic
  const lightbox = document.querySelector('.lightbox');
  const videoFrame = document.getElementById('videoFrame');
  const closeBtn = document.querySelector('.lightbox-close');

  document.querySelectorAll('.thumb').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const url = el.getAttribute('data-video');
      if (!url) return;
      // Autoplay with modestbranding
      const glue = url.includes('?') ? '&' : '?';
      videoFrame.src = `${url}${glue}autoplay=1&rel=0&modestbranding=1`;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    videoFrame.src = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });

  // Back to top
  const toTop = document.querySelector('.to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) toTop.style.opacity = 1; else toTop.style.opacity = 0;
  }, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
